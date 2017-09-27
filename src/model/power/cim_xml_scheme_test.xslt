<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.0">

    <xsl:output omit-xml-declaration="yes" indent="yes"/>
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <xsl:for-each select="xs:schema/xs:complexType">
        <xsl:sort select="@name"/>
            <p>
                <a href="#"
                    class="component-list-item w3-bar-item w3-button"
                    id="componentTypeFilter"
                    onclick="javascript:cimmenu.selectComponentType(this.innerHTML)">
                        <xsl:value-of select="@name"/>
                </a>
                <div class="component-type-accordion">
                    <xsl:attribute name="id">
                        <xsl:variable name="post" select="'-accordion'"/>
                        <xsl:value-of select="concat(@name, $post)"/>
                    </xsl:attribute>
                    <xsl:attribute name="style">
                        <xsl:value-of select="'display:none'"/>
                    </xsl:attribute>
                </div>
            </p>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>

