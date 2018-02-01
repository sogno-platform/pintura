<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.0">

    <xsl:output omit-xml-declaration="yes" indent="yes"/>
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <xsl:for-each select="xs:schema/xs:complexType[@name=$attribute]">
        <xsl:sort select="@name"/>
            <ul class="floating-panel-list">
            <xsl:attribute name="id">
                <xsl:value-of select="@name"/>
            </xsl:attribute>
            <xsl:variable name="type">
                <xsl:variable name="pre" select="'cim:'"/>
                <xsl:value-of select="concat($pre, @name)"/>
            </xsl:variable>
            <xsl:for-each select="xs:complexContent/xs:extension">
                <xsl:attribute name="base">
                    <xsl:value-of select="@base"/>
                </xsl:attribute>
                <xsl:text>&#xa;    </xsl:text>
                <li class="wide-row floating-panel-item dark-grey-background">
                    <xsl:text>&#xa;        </xsl:text>
                    <span class="row-left floating-panel-name">cim:IdentifiedObject.name</span>
                    <xsl:text>&#xa;        </xsl:text>
                    <span class="row-right floating-panel-value">
                        <input type="text">
                            <xsl:attribute name="value">{{[cim:IdentifiedObject.name]}}</xsl:attribute>
                            <xsl:attribute name="onchange">javascript:updateComponent('<xsl:value-of select="$type"/>', '{{rdfid}}', 'cim:IdentifiedObject.name', this.value)</xsl:attribute>
                        </input>
                    </span>
                    <xsl:text>&#xa;    </xsl:text>
                </li>
                <xsl:for-each select="xs:sequence/xs:element">
                    <xsl:text>&#xa;    </xsl:text>
                    <li class="wide-row floating-panel-item dark-grey-background">
                        <xsl:text>&#xa;        </xsl:text>
                        <span class="row-left floating-panel-name"><xsl:value-of select="concat($type, '.', @name)"/></span>
                        <xsl:text>&#xa;        </xsl:text>
                        <span class="row-right floating-panel-value">
                            <input type="text">
                                <xsl:attribute name="value">{{[<xsl:value-of select="concat($type, '.', @name)"/>]}}</xsl:attribute>
                                <xsl:attribute name="onchange">javascript:updateComponent('<xsl:value-of select="$type"/>', '{{rdfid}}', '<xsl:value-of select="concat($type, '.', @name)"/>', this.value)</xsl:attribute>
                            </input>
                        </span>
                        <xsl:text>&#xa;    </xsl:text>
                    </li>
                </xsl:for-each>
                <xsl:text>&#xa;</xsl:text>
           </xsl:for-each>
           </ul>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>

