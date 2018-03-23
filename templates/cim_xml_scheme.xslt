<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.0">
    <xsl:output method="html" omit-xml-declaration="yes" />
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <xsl:for-each select="xs:schema/xs:complexType[@name=$attribute]">
        <xsl:sort select="@name"/>
            <xsl:variable name="thr_lbr">{{{</xsl:variable>
            <xsl:variable name="thr_rbr">}}}</xsl:variable>
            <xsl:variable name="lsq">[</xsl:variable>
            <xsl:variable name="rsq">]</xsl:variable>
            <xsl:variable name="apos">'</xsl:variable>
            <xsl:variable name="else">
                <xsl:text>{{else}}</xsl:text>
            </xsl:variable>
            <xsl:variable name="endif">
                <xsl:text>{{/if}}</xsl:text>
            </xsl:variable>

            <ul class="floating-panel-list">
            <xsl:attribute name="id">
                <xsl:value-of select="@name"/>
            </xsl:attribute>
            <xsl:variable name="type">
                <xsl:variable name="pre" select="'cim:'"/>
                <xsl:value-of select="concat($pre, @name)"/>
            </xsl:variable>
            <xsl:for-each select="xs:complexContent/xs:extension">
                <!-- Make the heading -->
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
                <xsl:text>&#xa;    </xsl:text>
                <xsl:for-each select="xs:sequence/xs:element">
                    <xsl:variable name="rdfid">
                        <xsl:value-of select="concat($lsq, $type, '.', @name, $rsq)"/>
                    </xsl:variable>
                    <xsl:variable name="aggregate_component_type">
                        <xsl:value-of select="concat($apos, @type, $apos)"/>
                    </xsl:variable>
                    <li class="wide-row floating-panel-item dark-grey-background">
                        <xsl:text>&#xa;        </xsl:text>
                        <span class="row-left floating-panel-name">
                            <xsl:value-of select="concat($type, '.', @name)"/>
                        </span>
                        <xsl:value-of select="concat($thr_lbr, 'getAggregateComponentEditMenu ', $rdfid, ' ', $aggregate_component_type, $thr_rbr)"/>
                        <xsl:text>&#xa;        </xsl:text>
                        <xsl:text>&#xa;    </xsl:text>
                    </li>
                    <xsl:text>&#xa;    </xsl:text>
                </xsl:for-each>
                <xsl:text>&#xa;</xsl:text>
           </xsl:for-each>
           </ul>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
