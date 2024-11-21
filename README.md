Template para generar una web para mapa interactivo usando MapLibre
====================

Este es un template para generar una web para mapas usando:
- [Protomaps](https://protomaps.com/)
- [D3js](https://d3js.org/)
- [MapLibre](https://maplibre.org/)
- [Topojson](https://github.com/topojson/topojson)
- [Bootstrap](https://getbootstrap.com/)

Requerimientos
------------
Python

Instalar `cookiecutter`

desde la línea de comandos: `pip install cookiecutter`    

Uso
-----
Para crear un proyecto de web nuevo:

`cookiecutter gh:irvingfisica/cookie_maplibre`

Recomendaciones
-----
Para poder visualizar el mapa en local es necesario tener un servidor. Si usas VSCode para editar instala la extensión liveserver aunque esta puede tener problemas para servir los tiles.

Es necesario un servidor capaz de resolver peticiones por rangos para servir los tiles. La mejor manera es montar uno a través de python con [RangeHTTPServer](https://github.com/danvk/RangeHTTPServer)

Una vez instalado este servidor para ejecutarlo basta con teclear en la terminal:

`python -m RangeHTTPServer`

Tambien es necesario un mapabase. Este puede conseguirse desde mapbox, cartodb o incluso openstreetmap. Sin embargo usualmente hay un mapa base en la carpeta de tiles donde usualmente se usa esta plantilla. Este mapa base se generó con protomaps.