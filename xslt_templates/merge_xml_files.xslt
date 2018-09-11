<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:exsl="http://exslt.org/common"
    >
  <xsl:template match="/">
    <xs:schema>
      <xsl:variable name="fileList" as="element()*">
        <Item>Core</Item>
        <Item>DiagramLayout</Item>
        <Item>Domain.xsd</Item>
        <Item>Equivalents.xsd</Item>
        <Item>LoadModel.xsd</Item>
        <Item>OperationalLimits.xsd</Item>
        <Item>Topology.xsd</Item>
        <Item>Wires.xsd</Item>
      </xsl:variable>
      <xsl:for-each select="exsl:node-set($fileList)">
        <xsl:variable name="file">
          <xsl:value-of select="concat('data_model/', $attribute, '/', Item, '.xsd')"/>
        </xsl:variable>
        <xsl:copy-of select="document($file)/xs:schema/xs:complexType"/>
        <xsl:copy-of select="document($file)/xs:schema/xs:simpleType"/>
      </xsl:for-each>
    </xs:schema>
  </xsl:template>
</xsl:stylesheet>
