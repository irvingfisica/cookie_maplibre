let width = parseInt(d3.select("#mapa").style("width"));
let height = window.innerWidth > 576 ? width*0.56 : width*1.3;

d3.select("#mapa").style("height",height + "px");
let caja_mapa = document.getElementById('mapa');

const center = [24.433333, -102.133333];
const zoom = 5;

const protocol = new pmtiles.Protocol();
maplibregl.addProtocol('pmtiles', protocol.tile);

const PMTILES_URL = '../ts/mexbase.pmtiles';
const ftiles = '../ts/fl'

const p = new pmtiles.PMTiles(PMTILES_URL);
protocol.add(p);

let stl = [d3.json("./resources/datos/light.json")];

Promise.all(stl).then(function(data){

    let style = data[0];
    style["sources"] = {
        "protomaps": {
            "type": 'vector',
            "url": `pmtiles://${PMTILES_URL}`,
            "attribution": '© <a href="https://morlan.mx">MORLAN</a>'
        }
    };

    let mbase = {{cookiecutter.mapabase}};
    if (mbase == "OSM"){
        style = {
            "version": 8,
            "sources": {
              "osm": {
                "type": "raster",
                "tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
                "tileSize": 256,
                "attribution": "&copy; OpenStreetMap Contributors",
                "maxzoom": 19
              }
            },
            "layers": [
              {
                "id": "osm",
                "type": "raster",
                "source": "osm"
              }
            ]
          }
    }


    const map = new maplibregl.Map({
        container: 'mapa',
        zoom: zoom,
        center: center,
        style: style
    });

    map.on("load", () => {
        map.addSource('full',{
            type: "vector",
    
            url: "pmtiles://" + ftiles,
            attribution: '© <a href="https://www.inegi.org.mx/">INEGI</a>'
        });
    
        map.addLayer({
            "id":"manzanas",
            "source": "full",
            "source-layer":"manzanas",
            "type": "fill",
            "paint": {
                "fill-color": "red",
                "fill-outline-color": "black",
                "fill-opacity": 0.3
            }
        });

    });

});


