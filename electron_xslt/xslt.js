
component_list_xslt = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.0">

    <xsl:output method="html" omit-xml-declaration="yes" />
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <xsl:for-each select="xs:schema/xs:complexType">
        <xsl:sort select="@name"/>
            <xsl:value-of select="@name"/><xsl:text>&#xa;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
`

var loadXMLDoc = function(filename) {

  log("Loading " + filename);
  if (window.ActiveXObject)
  {
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
  else
  {
      xhttp = new XMLHttpRequest();
  }
  xhttp.open("GET", filename, false);
  xhttp.send("");
  return xhttp.responseXML;
}

var logOutput = false;

var log = function(str) {
  if (logOutput) {
    process.stderr.write(str + "\n")
  }
};

var performXSLTTranslation = function(xml, xsl, attribute) {

  // code for IE
  if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
    ex = xml.transformNode(xsl);
    document.getElementById("example").innerHTML = ex;
  }
  // code for Chrome, Firefox, Opera, etc.
  else if (document.implementation && document.implementation.createDocument)
  {
    xsltProcessor = new XSLTProcessor();
    log("Importing stylesheet..")
    if (attribute != undefined) {
      log("Setting attribute to: " + attribute)
      xsltProcessor.setParameter(null, "attribute", attribute)
    }
    xsltProcessor.importStylesheet(xsl);
    log("Attempting transform..")
    let resultDocument = xsltProcessor.transformToDocument(xml, document);
    return resultDocument.body.innerHTML
  }
};

var performXSLTTranslationFilenames = function(xmlFile, attributeXSLTFile, menuXSLTFile, debug) {

  let returnVariable = { 'menuEntries': '', 'attributeList': ''}
  if (debug) {
    logOutput = true;
  }

  let xml = loadXMLDoc(xmlFile);
  let attributeXSLT = loadXMLDoc(attributeXSLTFile);
  let menuXSLT = loadXMLDoc(menuXSLTFile);
  let componentList = listComponentsAndPerformXSLTranslation(xmlFile).split('\n');

  returnVariable['menuEntries'] = performXSLTTranslation(xml, menuXSLT, null, debug);
  returnVariable['attributeList'] = {};

  let thisResult = "";

  for (let index in componentList) {
    if (componentList[index] != "") {
      log("Creating attribute list for [" + componentList[index] + "]");
      thisResult = performXSLTTranslation(xml, attributeXSLT, componentList[index], debug);
      log("This result: " + thisResult)
      returnVariable['attributeList'][componentList[index]] = thisResult + "\n";
    }
  }

  return returnVariable;
};

listComponentsAndPerformXSLTranslation = function(xmlFile) {
  let xml = loadXMLDoc(xmlFile);
  let xsl = new DOMParser().parseFromString(component_list_xslt, 'text/xml');
  return performXSLTTranslation(xml, xsl);
};

module.exports = {
  performXSLTTranslationFilenames,
};
