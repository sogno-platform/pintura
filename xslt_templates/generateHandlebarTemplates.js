const fs = require('fs');
const path = require('path');
const glob = require('glob');

const libxslt = require('libxslt');
const libxmljs = libxslt.libxmljs;

const xslt = require('./xslt.js');

const xmlOpt = '--xmlDir';
const dbgOpt = '--debug';

const createAddComponentMenuFilename = "xslt_templates/cim_add_components_menu.xslt";
const createAttributeListFilename = "xslt_templates/cim_xml_scheme.xslt";
const sortMenuXSLTFilename = "xslt_templates/sort_menu.xslt";
const sortedMenuFilename = "generated/add_components_menu.xml";
const attributeDir = "generated/attributes/";
const cimedit = require('../src/cimedit.js');

const getOptions = function(args) {
  let options = {};
  for (let index = 1; index < args.length; index++) {
    keyPair = args[index].split('='); 
    if (keyPair.length == 2) {
      options[keyPair[0]] = keyPair[1];
    }
  }
  if (options[dbgOpt] == 'true') {
    for (let optionIndex in options){
      process.stderr.write("option: " + optionIndex + " = " + options[optionIndex] + "\n");
    }
  }
  return options;
};

const XSLTTranslation = function(xmlFile, options) {
  return xslt.performXSLTTranslationFilenames(xmlFile, createAttributeListFilename,
                                              createAddComponentMenuFilename, options[dbgOpt]);
};

const writeToFile = function(filename, data, success) {

  fs.writeFile(filename, data, function(err) {
    if(err) {
      return process.stderr.write(err.message);
    }
    else {
      return success();
    }
  });
}

const makePathRecursive = function(dir) {
  let dirList = [];
  while (dir && !fs.existsSync(dir) && dir != '.') {
    dirList.unshift(dir);
    dir = path.dirname(dir);
  }
  dirList.forEach((newDir)=>{
    fs.mkdirSync(newDir);
  });
};

const writeArrayOfFiles = function(objects, index, done) {
  let dir = path.dirname(objects[index]['filename'])
  makePathRecursive(dir)
  writeToFile(objects[index]['filename'], objects[index]['data'], function() {
    if (objects.length > index+1) {
      writeArrayOfFiles(objects, index+1, done);
    }
    else {
      done();
    }
  });
};

const createComponentCreationHtml = function(menuXml) {
    let ul = "<ul class='floating-panel-list'>";
    for (let item in cimedit.terminalAndPointLimits) {
        if (cimedit.typeIsVisible(item)) {
            let xpathQuery = "/menu/ul/li[@id='" + item.substr(4) + "']";
            let result = menuXml.get(xpathQuery);
            if (result) {
                ul += result.toString();
            }
        }
    }
    ul += "</ul>";
    return ul;
};

const processFilenames = function(filenames, directory, options) {

  let arrayOfFiles = [];
  let menuItems = "<menu><ul class=\"floating-panel-list\">";

  filenames.forEach((file)=>{
    let result = XSLTTranslation(file, options);
    menuItems += result['menuEntries'];
    for (let attribute in result['attributeList']) {
      let attributeFilename = attributeDir + directory + '/' + attribute + '.handlebars'
      arrayOfFiles.push({ 'filename': attributeFilename, 'data': result['attributeList'][attribute] });
    }
  });

  menuItems += "</ul></menu>";

  let menuSortingXSLT = xslt.loadXMLDoc(sortMenuXSLTFilename);
  let menuXMLDoc = libxmljs.parseXml(menuItems);
  let sortedMenuItems = xslt.performXSLTTranslation(menuXMLDoc, menuSortingXSLT);
  let htmlMenuItems = createComponentCreationHtml(sortedMenuItems);
  arrayOfFiles.push({ 'filename': sortedMenuFilename, 'data': htmlMenuItems });

  return arrayOfFiles;
};

const parseOptions = function( args ) {

  let options = getOptions( args );
  if (options[xmlOpt] == null) {
    process.stderr.write('I need at least a directory for xml Files')
    process.exit();
  }
  fs.readdir(options[xmlOpt], function(err, model_versions) {
    if (err) {
      process.stderr.write(err.message)
    }
    else {
      model_versions.forEach(function(dir) {
        let directory = options[xmlOpt] + '/' + dir + '/*.xsd';
        glob(directory, function(err, files) {
          let arrayOfFiles = processFilenames(files, dir, options);
          writeArrayOfFiles(arrayOfFiles, 0, function() { });
        });
      });
    }
  });
};

parseOptions( process.argv )
