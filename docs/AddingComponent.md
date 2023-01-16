
## How to add a new component type to Pintura

Pintura currently (release 0.4.17) supports the creation of the following component types:

| Component type | 
|----------------|
| AC Line Segment |
| Energy Consumer |
| Power Transformer |
| Synchronous Machine |
| Topological Node |
 

#### Add the component type to the menu

in cimmenu/src/react-menu.js:

```javascript
class CreateNewComponentList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:ACLineSegment');} }>ACLineSegment</button>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:EnergyConsumer');} }>EnergyConsumer</button>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:PowerTransformer');} }>PowerTransformer</button>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:SynchronousMachine');} }>SynchronousMachine</button>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:TopologicalNode');} }>TopologicalNode</button>
            <button className="component-type-name button wide-button" onClick={ () => { this.props.getCimsvg().addComponent('cim:Terminal');} }>Terminal</button>
        </>;
    }
}
```

#### Create a new icon in cimsvg/images.
The icons are svg images created using paths. If you are not interested in creating an image in this way you can use
inkscape or any other svg editor.


#### Create a new entry in the icon list

in cimsvg/src/cimjson.js:

```javascript
cimjson.imageNames = {
    "cim:ACLineSegment":             term,
    "cim:Terminal":                  term,
    "cim:Breaker":                   brea,
    "cim:ConnectivityNode":          conn,
    "cim:EnergyConsumer":            cons,
    "cim:EquivalentInjection":       cons,
    "cim:ExternalNetworkInjection":  net,
    "cim:PowerTransformer":          tran,
    "cim:SolarGeneratingUnit":       sola,
    "cim:SynchronousMachine":        sync,
    "cim:TopologicalNode":           conn,
    "cim:TransformerWinding":        tran,
    "generic":                       gene
};
```

If you do not create a new svg file, the generic icon will be used. The generic icon looks like a question mark.

#### Create a new entry in the terminal and points list

```javascript
cimedit.terminalAndPointLimits = {
    "cim:ACLineSegment": {
        "minTerminals" : 2,
        "maxTerminals" : 2,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:Busbar": {
        "minTerminals" : 2,
        "maxTerminals" : 2,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:Terminal": {
        "minTerminals" : 0,
        "maxTerminals" : 0,
        "points": 1,
    },
    "cim:TopologicalNode": {
        "minTerminals" : 0,
        "maxTerminals" : 0,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:EnergyConsumer": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
    "cim:PowerTransformer": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
    "cim:SynchronousMachine": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
};
```
