const fs = require('fs');
const path = require('path');
const glob = require('glob');

const libxslt = require('libxslt');
const libxmljs = libxslt.libxmljs;

const xslt = require('./xslt.js');

const xmlOpt = '--xmlDir';
const dbgOpt = '--debug';

const createAddComponentMenuFilename = "/xslt/cim_add_components_menu.xslt";
const createAttributeListFilename = "/xslt/cim_xml_scheme.xslt";
const sortMenuXSLTFilename = "/xslt/sort_menu.xslt";
const sortedMenuFilename = "/generated/add_components_menu.xml";
const sortedAllComponentsFilename = "/generated/add_all_components_menu.xml";
const attributeDir = "/generated/attributes/";
global.window = { clientWidth: 300, clientHeight: 300 };
global.JSZip = require('jszip');
global.Handlebars = require('handlebars/runtime');
const terminalAndPointLimits = require('./terminalAndPointLimits');
var body = {
    head: { appendChild: function() {} }
}
global.document = {
    createElement: function() {
        return {
            appendChild: function() {},
            setAttribute: function() {}
        }
    },
    createTextNode: function() {},
    querySelector: function(query) {
        return body[query];
    },
    insertInto: function(place, thing) {
        stuff[place] = thing;
    }
};

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
  let currentFile = objects[index]['filename'];
  let dir = path.dirname(currentFile)
  makePathRecursive(dir)
  writeToFile(currentFile, objects[index]['data'], function() {
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
  for (let item in terminalAndPointLimits) {
    if (terminalAndPointLimits.typeIsVisible(item)) {
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

const createAllComponentsCreationHtml = function(menuXml) {
  let header = `<div class="all-components-list">
                  <input type="text" onkeyup="javascript:currentCimsvg().updateRawComponentSearch(this.value);"/>`;
  let xpathQuery = "/menu/ul";
  return header + menuXml.get(xpathQuery) + '</div>';
};

const processFilenamesForAttributes = function(filenames, directory, options) {

  let arrayOfFiles = [];

  filenames.forEach((file)=>{
    let result = XSLTTranslation(file, options);
    for (let attribute in result['attributeList']) {
      let attributeFilename = attributeDir + directory + '/' + attribute + '.handlebars'
      arrayOfFiles.push({ 'filename': attributeFilename, 'data': result['attributeList'][attribute] });
    }
  });

  return arrayOfFiles;
};

const processFilenamesForMenus = function(filenames, directory, options) {

  let arrayOfFiles = [];
  let menuItems = "<menu><ul class=\"floating-panel-list\">";
  let rawMenuItems = "<menu><ul class=\"floating-panel-list\">";

  filenames.forEach((file)=>{
    let result = XSLTTranslation(file, options);
    menuItems += result['menuEntries'];
    rawMenuItems += result['rawMenuEntries'];
  });

  menuItems += "</ul></menu>";
  rawMenuItems += "</ul></menu>";

  let menuSortingXSLT = xslt.loadXMLDoc(sortMenuXSLTFilename);
  let menuXMLDoc = libxmljs.parseXml(menuItems);
  let sortedMenuItems = xslt.performXSLTTranslation(menuXMLDoc, menuSortingXSLT);
  let htmlMenuItems = createComponentCreationHtml(sortedMenuItems);

  let rawMenuXMLDoc = libxmljs.parseXml(rawMenuItems);
  let sortedAllComponentsMenuItems = xslt.performXSLTTranslation(rawMenuXMLDoc, menuSortingXSLT);
  let htmlAllComponentsMenuItems = createAllComponentsCreationHtml(sortedAllComponentsMenuItems);
  arrayOfFiles.push({ 'filename': sortedMenuFilename, 'data': htmlMenuItems });
  arrayOfFiles.push({ 'filename': sortedAllComponentsFilename, 'data': htmlAllComponentsMenuItems });

  return arrayOfFiles;
};

const helpers = {
  js: "import helpers from '../../../handlebars/helpers/index.js';\nexport default helpers\n"
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
      let do_once = true;
      model_versions.forEach(function(dir) {
        let directory = options[xmlOpt] + '/' + dir + '/*.xsd';
        if (do_once && dir !== 'cgmes') {
          do_once = false;
          glob(directory, function(err, files) {
            let arrayOfFiles = processFilenamesForMenus(files, dir, options);
            writeArrayOfFiles(arrayOfFiles, 0, function() { });
          });
        }
        glob(directory, function(err, files) {
          let arrayOfFiles = processFilenamesForAttributes(files, dir, options);
          arrayOfFiles.push({ 'filename': attributeDir + dir + '/helpers.js', 'data': helpers.js });
          writeArrayOfFiles(arrayOfFiles, 0, function() { });
        });
      });
    }
  });
};

parseOptions( process.argv )
