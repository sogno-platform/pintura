<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:exsl="http://exslt.org/common"
    xmlns:array="http://array.com" exclude-result-prefixes="array">
  <array:files>
    <xsd>Core</xsd>
    <xsd>DiagramLayout</xsd>
    <xsd>Domain</xsd>
    <xsd>Equivalents</xsd>
    <xsd>LoadModel</xsd>
    <xsd>OperationalLimits</xsd>
    <xsd>Topology</xsd>
    <xsd>Wires</xsd>
  </array:files>
  <xsl:template match="/">
    <xs:schema>
      <xsl:for-each select="document('')/xsl:stylesheet/array:files/xsd" >
        <xsl:variable name="file">
          <xsl:value-of select="concat('../data_model/', $attribute, '/', ., '.xsd')"/>
        </xsl:variable>
        <xsl:copy-of select="document($file)/xs:schema/xs:complexType"/>
      </xsl:for-each>
      <xsl:for-each select="document('')/xsl:stylesheet/array:files/xsd" >
        <xsl:variable name="file">
          <xsl:value-of select="concat('../data_model/', $attribute, '/', ., '.xsd')"/>
        </xsl:variable>
        <xsl:copy-of select="document($file)/xs:schema/xs:simpleType"/>
      </xsl:for-each>
    </xs:schema>
  </xsl:template>
</xsl:stylesheet>
