
import asyn        from "../images/asyn.svg";
import term        from "../images/term.svg";
import brea        from "../images/brea.svg";
import conn        from "../images/conn.svg";
import cons        from "../images/cons.svg";
import gene        from "../images/gene.svg";
import net         from "../images/net.svg";
import tran        from "../images/trans.svg";
import sola        from "../images/sol.svg";
import sync        from "../images/sync.svg";
import circ        from "../images/circ.svg";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.state = {

	};
    }

    static iconStyle(svg) {
        return new ol.style.Style({
            image: new ol.style.Icon({
                opacity: 1,
                src: 'data:image/svg+xml;utf8,' + svg,
                scale: 1,
                color: 'rgba(255, 255, 255, 1)',
            })
        })
    }

    importSvgGrid(osmxml) {
        let features = new ol.format.OSMXML().readFeatures(osmxml, {
            featureProjection: 'EPSG:4326',
        });
        this.vectorSource.addFeatures(features);
 
        this.map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              this.vectorLayer
            ],
            view: new ol.View({
              extent: [-180, -90, 180, 90],
              center: [0, 0],
              projection: 'EPSG:4326',
              zoom: 2,
            }),
        });
    }

    static getStyle(feature) {
        for (let key in Map.styles) {
            let value = feature.get(key);
            if (value !== undefined) {
                for (let regexp in Map.styles[key]) {
                    if (new RegExp(regexp).test(value)) {
                        return Map.styles[key][regexp];
                    }
                }
            }
        }
        return null;
    }

    componentDidMount() {
        this.vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML(),
            strategy: ol.loadingstrategy.bbox,
        });

       
        this.vectorLayer = new ol.layer.Vector({
            source: this.vectorSource,
            style: Map.getStyle,
        });
    }

    render(args) {
        let element = <div ref={this.ref} id="map" className="map"></div>;
        return element;
    }
};

Map.styles = {
    'icon': {
/*
        'cim:Terminal': Map.iconStyle(term),
        'cim:SynchronousGenerator': Map.iconStyle(sync),
        'cim:AsynchronousGenerator': Map.iconStyle(asyn),
*/
        '.*': Map.iconStyle(circ),
    },
}

export default Map
