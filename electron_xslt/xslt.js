
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

  process.stderr.write("Loading " + filename + '\n');
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
    process.stderr.write("Importing stylesheet..\n")
    if (attribute != undefined) {
      process.stderr.write("Setting attribute to: \n" + attribute)
      xsltProcessor.setParameter(null, "attribute", attribute)
    }
    xsltProcessor.importStylesheet(xsl);
    process.stderr.write("Attempting transform..\n")
    let resultDocument = xsltProcessor.transformToDocument(xml, document);
    return resultDocument.body.innerHTML
  }
};

var performXSLTTranslationFilenames = function(xmlFile, xsltFile) {

  let xml = loadXMLDoc(xmlFile);
  let xsl = loadXMLDoc(xsltFile);
  
  let componentList = listComponentsAndPerformXSLTranslation(xmlFile).split('\n');

  returnString = "";

  for (let index in componentList) {
    returnString += performXSLTTranslation(xml, xsl, componentList[index]);
  }

  return returnString;
};

listComponentsAndPerformXSLTranslation = function(xmlFile) {
  let xml = loadXMLDoc(xmlFile);
  let xsl = new DOMParser().parseFromString(component_list_xslt, 'text/xml');
  return performXSLTTranslation(xml, xsl);
};

module.exports = {
  performXSLTTranslationFilenames,
};
