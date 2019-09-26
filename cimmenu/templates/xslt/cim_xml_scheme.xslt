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
                <xsl:variable name="apos">'</xsl:variable>
                <xsl:variable name="endeq">
                    <xsl:text>{{/neq}}</xsl:text>
                </xsl:variable>

                <ul class="floating-panel-list">
                <xsl:variable name="type">
                    <xsl:variable name="pre" select="'cim:'"/>
                    <xsl:value-of select="concat($pre, @name)"/>
                </xsl:variable>

                <!-- Add the IdentifiedObject.name row -->
                <xsl:text>&#xa;    </xsl:text>
                <xsl:variable name="parentId">
                    <xsl:value-of select="concat($lsq, 'pintura:rdfid', $rsq)"/>
                </xsl:variable>
                <li class="wide-row floating-panel-item list-entry">
                    <xsl:text>&#xa;        </xsl:text>
                    <span class="row-left floating-panel-name">IdentifiedObject.name</span>
                    <xsl:text>&#xa;        </xsl:text>
                    <span class="row-right wide-row floating-panel-value">
                       <input type="text">
                           <xsl:attribute name="value">{{[cim:IdentifiedObject.name]}}</xsl:attribute>
                           <xsl:attribute name="onchange">javascript:currentCimsvg().updateComponent('<xsl:value-of select="$type"/>', <xsl:value-of select="concat($apos, $thr_lbr, $parentId, $thr_rbr, $apos)"/>, 'cim:IdentifiedObject.name', this.value)</xsl:attribute>
                       </input>
<!--
                        <button style="visibility:hidden"> + </button>
                        <button style="visibility:hidden"> -> </button>
-->
                    </span>
                    <xsl:text>&#xa;    </xsl:text>
                </li>
                <xsl:text>&#xa;    </xsl:text>

                <!-- Add the complex types -->
                <xsl:for-each select="xs:complexContent/xs:extension">
                    <xsl:for-each select="xs:sequence/xs:element">
                        <xsl:variable name="rdfid">
                            <xsl:value-of select="concat($lsq, $type, '.', @name, $rsq)"/>
                        </xsl:variable>
                        <xsl:variable name="aggregate_component_type">
                            <xsl:value-of select="concat($apos, @type, $apos)"/>
                        </xsl:variable>
                        <xsl:variable name="attribute_name">
                            <xsl:value-of select="@name"/>
                        </xsl:variable>
                        <li class="wide-row floating-panel-item list-entry">
                            <xsl:text>&#xa;        </xsl:text>
                            <span class="row-left floating-panel-name">
                                <xsl:value-of select="$attribute_name"/>
                            </span>
                            <xsl:text>&#xa;        </xsl:text>
                            <xsl:value-of select="concat($thr_lbr, 'getAggregateComponentMenu ',
                                                         $apos, $type, $apos, ' ', $parentId, ' ',
                                                         $rdfid, ' ', $aggregate_component_type, ' ',
                                                         $apos, $attribute_name, $apos, $thr_rbr)"/>
                            <xsl:text>&#xa;        </xsl:text>
                            <xsl:text>&#xa;    </xsl:text>
                        </li>
                        <xsl:text>&#xa;    </xsl:text>
                    </xsl:for-each>
                    <xsl:text>&#xa;</xsl:text>
               </xsl:for-each>

               <!-- Add the simple types -->
               <xsl:for-each select="xs:sequence/xs:element">
                   <xsl:variable name="rdfid">
                       <xsl:value-of select="concat($lsq, $type, '.', @name, $rsq)"/>
                   </xsl:variable>
                   <xsl:variable name="aggregate_component_type">
                       <xsl:value-of select="concat($apos, @type, $apos)"/>
                   </xsl:variable>
                   <xsl:variable name="attribute_name">
                       <xsl:value-of select="concat($type, '.', @name)"/>
                   </xsl:variable>
                   <li class="wide-row floating-panel-item list-subtitle">
                       <xsl:text>&#xa;        </xsl:text>
                       <span class="row-left floating-panel-name">
                           <xsl:value-of select="$attribute_name"/>
                       </span>
                       <xsl:text>&#xa;        </xsl:text>
                       <xsl:value-of select="concat($thr_lbr, 'getAggregateComponentMenu ',
                                                     $apos, $type, $apos, ' ', $parentId, ' ',
                                                     $rdfid, ' ', $aggregate_component_type, ' ',
                                                     $apos, $attribute_name, $apos, $thr_rbr)"/>
                       <xsl:text>&#xa;        </xsl:text>
                       <xsl:text>&#xa;    </xsl:text>
                   </li>
                   <xsl:text>&#xa;    </xsl:text>
               </xsl:for-each>

               <!-- Add the terminal link -->
               <xsl:text>&#xa;</xsl:text>
                   <xsl:value-of select="concat($two_lbr, '#neq ', $apos, @name, $apos, ' ', $apos, 'Terminal', $apos, $two_rbr)"/>
               <xsl:text>&#xa;</xsl:text>
                   <li class="wide-row floating-panel-item list-subtitle">
                       <xsl:text>&#xa;        </xsl:text>
                       <span class="row-left floating-panel-name">Show Terminals</span>
                       <span class="row-right floating-panel-value">
                       <button>
                           <xsl:attribute name="onclick">
                               <xsl:value-of select="concat('currentCimsvg().populateTerminals(', $apos, $type, $apos, ', ', $apos, $thr_lbr, $parentId, $thr_rbr, $apos, ')')"/>
                           </xsl:attribute>
                           ->
                       </button>
                    </span>
                   </li>
               <xsl:text>&#xa;</xsl:text>
                   <xsl:value-of select="$endeq"/>
               <xsl:text>&#xa;</xsl:text>
               </ul>
            </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
