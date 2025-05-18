<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Todos los Videojuegos</title>
    <link rel="stylesheet" href="videojuegos.css"/>
</head>
<body>
    <h1>Todos los Videojuegos</h1>
    
    <div class="nav">
        <a href="index.html">Volver al Índice</a>
    </div>
    
    <table>
        <tr>
            <th>Título</th>
            <th>Año</th>
            <th>Género</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
            <th>Vendidos</th>
            <th>Valoración</th>
        </tr>
        <xsl:for-each select="videojuegos/videojuego">
            <tr>
                <td><xsl:value-of select="titulo"/></td>
                <td><xsl:value-of select="@anyo"/></td>
                <td><xsl:value-of select="genero"/></td>
                <td>
                    <xsl:for-each select="imagenes/imagen[1]">
                        <img class="thumbnail">
                            <xsl:attribute name="src">
                                <xsl:value-of select="."/>
                            </xsl:attribute>
                            <xsl:attribute name="alt">
                                <xsl:value-of select="../../titulo"/>
                            </xsl:attribute>
                        </img>
                    </xsl:for-each>
                </td>
                <td class="descripcion"><xsl:value-of select="descripcion"/></td>
                <td class="precio">
                    <xsl:choose>
                        <xsl:when test="precio = 0">Gratis</xsl:when>
                        <xsl:otherwise><xsl:value-of select="concat(precio, ' €')"/></xsl:otherwise>
                    </xsl:choose>
                </td>
                <td class="descuento">
                    <xsl:choose>
                        <xsl:when test="precioDescuento = 0">Gratis</xsl:when>
                        <xsl:otherwise><xsl:value-of select="concat(precioDescuento, ' €')"/></xsl:otherwise>
                    </xsl:choose>
                </td>
                <td>
                    <xsl:choose>
                        <xsl:when test="unidadesStock &lt; 10">
                            <span class="stock-bajo"><xsl:value-of select="unidadesStock"/></span>
                        </xsl:when>
                        <xsl:when test="unidadesStock &lt; 50">
                            <span class="stock-medio"><xsl:value-of select="unidadesStock"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                            <span class="stock-alto"><xsl:value-of select="unidadesStock"/></span>
                        </xsl:otherwise>
                    </xsl:choose>
                </td>
                <td><xsl:value-of select="unidadesVendidas"/></td>
                <td>
                    <xsl:variable name="valoracion" select="number(valorOpiniones)"/>
                    <xsl:choose>
                        <xsl:when test="$valoracion &gt;= 4.5">
                            <span class="valoracion valoracion-alta"><xsl:value-of select="valorOpiniones"/>/5</span>
                        </xsl:when>
                        <xsl:when test="$valoracion &gt;= 3.5">
                            <span class="valoracion valoracion-media"><xsl:value-of select="valorOpiniones"/>/5</span>
                        </xsl:when>
                        <xsl:otherwise>
                            <span class="valoracion valoracion-baja"><xsl:value-of select="valorOpiniones"/>/5</span>
                        </xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr>
        </xsl:for-each>
    </table>
    
    <h2>Detalles y Opiniones</h2>
    
    <xsl:for-each select="videojuegos/videojuego">
        <div class="detalle-juego">
            <h3><xsl:value-of select="titulo"/> (<xsl:value-of select="@anyo"/>)</h3>
            <p><strong>Género:</strong> <xsl:value-of select="genero"/></p>
            <p class="descripcion"><xsl:value-of select="descripcion"/></p>
            
            <h4>Opiniones</h4>
            <xsl:for-each select="opiniones/opinion">
                <div class="opinion">
                    <span class="opinion-autor"><xsl:value-of select="autor"/></span>
                    <span class="opinion-fecha"><xsl:value-of select="fecha"/></span>
                    <span class="opinion-nota">★ <xsl:value-of select="nota"/>/5</span>
                    <p class="opinion-texto"><xsl:value-of select="texto"/></p>
                </div>
            </xsl:for-each>
        </div>
    </xsl:for-each>
    
    <div class="volver">
        <a href="index.html">Volver al Índice</a>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>