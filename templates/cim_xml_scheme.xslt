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
            <xsl:variable name="two_lbr">{{</xsl:variable>
            <xsl:variable name="two_rbr">}}</xsl:variable>
            <xsl:variable name="lsq">[</xsl:variable>
            <xsl:variable name="rsq">]</xsl:variable>
            <xsl:variable name="lrd">(</xsl:variable>
            <xsl:variable name="rrd">)</xsl:variable>
            <xsl:variable name="else">
                <xsl:text>&#xa;        </xsl:text>
                <xsl:text>{{else}}</xsl:text>
                <xsl:text>&#xa;        </xsl:text>
            </xsl:variable>
            <xsl:variable name="endif">
                <xsl:text>&#xa;        </xsl:text>
                <xsl:text>{{/if}}</xsl:text>
                <xsl:text>&#xa;        </xsl:text>
            </xsl:variable>
            <xsl:variable name="component_link_start">populateAttributesIdOnly(cimsvg.getComponentAttributesNode(), '</xsl:variable>
            <xsl:variable name="component_link_stop">');showContainer('component-attributes', null, 'true', 'table');</xsl:variable>

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
                            <xsl:variable name="generated_id">
                                <xsl:value-of select="generate-id(.)"/>
                            </xsl:variable>

                            <xsl:variable name="variable_id">
                                <xsl:value-of select="concat($type, '.', @name)"/>
                            </xsl:variable>
                            <xsl:choose>
                                <xsl:when test="(@type='String') or (@type='Boolean') or (@type='Number')">
                                    <span class="row-right floating-panel-value">
                                    <input type="text">
                                       <xsl:text>&#xa;        </xsl:text>
                                       <span class="row-left floating-panel-name"><xsl:value-of select="$variable_id"/></span>
                                       <xsl:text>&#xa;        </xsl:text>
                                    </input>
                                    </span>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:text>&#xa;        </xsl:text>
                                        <span class="row-right floating-panel-value">
                                            <xsl:variable name="rdfid">
                                                <xsl:value-of select="concat($thr_lbr, 'getRdfId ', $lsq, $variable_id, $rsq, $thr_rbr)"/>
                                            </xsl:variable>
                                            <xsl:variable name="pop_attr_button_link">
                                                <xsl:value-of select="concat($component_link_start, $rdfid, $component_link_stop)"/>
                                            </xsl:variable>
                                            <xsl:variable name="create_component_link">javascript:alert("Not ready yet")</xsl:variable>

                                            <xsl:variable name="if_valid_rdfid_start">
                                                <xsl:text>&#xa;        </xsl:text>
                                                <xsl:text>{{#if [</xsl:text><xsl:value-of select="$variable_id"></xsl:value-of><xsl:text>]}}</xsl:text>
                                                <xsl:text>&#xa;        </xsl:text>
                                            </xsl:variable>
                                            <xsl:attribute name="onclick">
                                                <xsl:value-of select="$if_valid_rdfid_start"></xsl:value-of>
                                                <xsl:value-of select="$pop_attr_button_link"></xsl:value-of>
                                                <xsl:value-of select="$else"></xsl:value-of>
                                                <xsl:value-of select="$create_component_link"></xsl:value-of>
                                                <xsl:value-of select="$endif"></xsl:value-of>
                                            </xsl:attribute>
                                            <xsl:value-of select="$if_valid_rdfid_start"></xsl:value-of>
                                            Show Object
                                            <xsl:value-of select="$else"></xsl:value-of>
                                            Can't Create Object Yet
                                            <xsl:value-of select="$endif"></xsl:value-of>
                                        </span>
                                    <xsl:text>&#xa;        </xsl:text>
                                </xsl:otherwise>
                            </xsl:choose>
                        <xsl:text>&#xa;    </xsl:text>
                    </li>
                </xsl:for-each>
                <xsl:text>&#xa;</xsl:text>
           </xsl:for-each>
           </ul>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
