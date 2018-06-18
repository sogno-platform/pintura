<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="3.0">
  <xsl:template match="/">
    <xs:schema>
     <xsl:copy-of select="document('data_model/Core.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/DiagramLayout.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/Domain.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/Equivalents.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/LoadModel.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/OperationalLimits.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/Topology.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/Wires.xsd')/xs:schema/xs:complexType"/>
     <xsl:copy-of select="document('data_model/Core.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/DiagramLayout.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/Domain.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/Equivalents.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/LoadModel.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/OperationalLimits.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/Topology.xsd')/xs:schema/xs:simpleType"/>
     <xsl:copy-of select="document('data_model/Wires.xsd')/xs:schema/xs:simpleType"/>
    </xs:schema>
  </xsl:template>
</xsl:stylesheet>
