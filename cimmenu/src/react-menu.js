"use strict";

import templates from "../templates/index.js";
import common from "./common.js";
import theMenuStructure from "./react-menu.json";

var Nav = ReactBootstrap.Nav;

class FileMenuEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let input, a;
        if (this.props.input) {
            if (this.props.input.type) {
                input = <input id={this.props.input.id} type={this.props.input.type} style={{"display":"none"}} multiple={true}/>;
            }
            else {
                input = <input id={this.props.input.id} style={{"display":"none"}} multiple={true}/>;
            }
        }
        if ("a" in this.props && this.props.a !== undefined) {
            if ("onclick" in this.props.a && this.props.a.onclick !== undefined) {
                a = <a href="#" className="button wide-button indent" onClick={Function(this.props.a.onclick)}>
                        <span className={this.props.a.icon}/>
                        {this.props.a.text}
                    </a>
            }
        }
        let element = <li className="FileMenuEntry wide-row list-subtitle">
            {input}
            {a}
        </li>
        return element;
    }
}

class HideableMenu extends React.Component {
    constructor(props) {
        super(props);
        let title = null, main = null;
        if (props.children) {
            if ('title' in props.children) {
                title = props.children.title;
            }
            if ('main' in props.children) {
                main = props.children.main;
            }
        }
        this.state = {
            title:      title,
            main:       main,
            id:         props.id,
            isHidden:   props.isHidden,
        };
        this.showBody = this.showBody.bind(this);
        this.toggleBody = this.toggleBody.bind(this);
    }

    update(content) {
        this.setState(content);
    }

    showBody (show=true) {
        this.setState({ isHidden: !show });
    }

    toggleBody(e) {
        this.setState({
            isHidden: !this.state.isHidden
        });
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        let hiddenMenuBodyClass   = this.state.isHidden ? " hiddenmenu" : "";
        let element = <div className={this.props.className} id={this.props.id}>
                          <div className={this.props.className+"Title"} onClick={this.toggleBody}>
                              {this.state.title}
                          </div>
                          <div className={this.props.className+"Body"+hiddenMenuBodyClass}>
                              {this.state.main}
                          </div>
                      </div>
        return element;
    }
}

class ComponentTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <li className="ComponentTitle wide-row list-subtitle removeColon typeName-li">
                   <div className="button indent row-left"><span className="fa fa-list"></span>  {this.props.title}</div>
               </li>;
    }
}

class DiagramTitle extends React.Component {
    constructor(props) {
        super(props);
        this.visibleIconChar =   "fa-star";
        this.invisibleIconChar = "fa-star-o";
        this.state = {
            name:     props.name,
            iconChar: this.visibleIconChar,
	}
        this.toggleDiagramVisibility = this.toggleDiagramVisibility.bind(this);
    }

    toggleDiagramVisibility(e) {
        if (this.props.getCimsvg()) {
            if (this.props.getCimsvg().toggleDiagramVisible(this.props.diagramId)) {
                 this.setState({iconChar: this.invisibleIconChar});
            }
            else {
                 this.setState({iconChar: this.visibleIconChar});
            }
        }
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        const iconClass="button panel-button row-right fa " + this.state.iconChar;
        return <div className="DiagramTitle wide-row list-title">
                   <div className="button row-left"><span className="fa fa-sitemap"></span>  Diagram: {this.state.name}</div>
                   <div className={iconClass} onClick={this.toggleDiagramVisibility}/>
               </div>
    }
}

class DiagramComponentList extends React.Component {

    constructor(props) {
        super(props);
        this.updatableList = new UpdatableComponentList(this);
        const diagramComponentList = this.updatableList.updateAll(props.components);
        this.state = {
            body:     diagramComponentList,
            bodyId:   props.diagramId,
            title:    props.title,
        }
        this.hideableMenu = React.createRef();
    }

    createEntry(object, meta) {
        return <ComponentOfTypeList ref={meta.ref} key={meta.index} title={meta.id} instances={object}/>
    }

    update(componentList) {
        const componentInstances = this.updatableList.updateAll(componentList["components"]);
        this.hideableMenu.current.update({ title: this.state.title, main: componentInstances });
    }

    render() {
	return <HideableMenu className="DiagramComponentList" ref={this.hideableMenu} bodyId={this.state.bodyId} isHidden={true}>
                   {{ title: this.state.title,
                      main:  this.state.body }}
               </HideableMenu>
    }
}

class ComponentListEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label:         props.label,
            dropdownId:    props.dropdownId,
            componentId:   props.componentId,
            componentType: props.componentType,
        }
        this.selectEntry = this.selectEntry.bind(this);
    }

    update(object) {
        this.setState({ label: object["pintura:label"]["text"] });
    }

    selectEntry() {
        currentCimmenu().componentInstanceSelected(null, this.props.componentType, this.props.componentId)
    }

    render() {
        let buttonId = this.props.componentId + "-components-panel-button";
        return <li className="ComponentListEntry list-entry">
                   <button id={buttonId}
                       className="row button wide-button {{this.selected}}"
                       onClick={this.selectEntry}>
                           <span className="fa fa-cube">
                   </span>{this.state.label}</button>
               </li>
    }
}

class ComponentOfTypeList extends React.Component {
    constructor(props) {
        super(props);
        this.updatableList = new UpdatableComponentList(this);
        const componentInstances = <ul> {this.updatableList.updateAll(props.instances)} </ul>;
        this.state = {
            title:     props.title,
            instances: componentInstances
        }
    }

    createEntry(object, meta) {
        return <ComponentListEntry ref={meta.ref} key={meta.index} label={object["pintura:label"]["text"]} componentId={meta.id} componentType={this.props.title}/>
    }

    update(componentList) {
        const componentInstances = this.updatableList.updateAll(componentList);
        this.setState({ instances:  componentInstances });
    }

    render() {
        let componentTitle = <ComponentTitle title={this.state.title}/>
        return <HideableMenu className="ComponentOfTypeList" isHidden={true} title={componentTitle}>
                   {{ title: componentTitle, main: this.state.instances }}
               </HideableMenu>
    }
}

class UpdatableComponentList {
    constructor (creator) {
        this.creator = creator;
        this.state = {
            instances: {},
            refs: {},
        }
    }

    updateAll(updateObject) {
        if (updateObject) {
            Object.keys(updateObject).map((key, index) => {
                let object = updateObject[key];
                if (key in this.state.refs) {
                    if ('current' in this.state.refs[key] && this.state.refs[key].current) {
                        this.state.refs[key].current.update(object)
                    }
                }
                else {
                    this.state.refs[key] = React.createRef();
                    const meta = { id: key, index: index, ref: this.state.refs[key] }
                    this.state.instances[key] = this.creator.createEntry(object, meta);
                }
	    });
            Object.keys(this.state.refs).forEach((key) => {
                if (!key in updateObject || updateObject[key] === undefined) {
                    delete this.state.refs[key];
                    delete this.state.instances[key];
                }
            });
        }
        return Object.values(this.state.instances);
    }
}

class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.setViewability = this.setViewability.bind(this);
        this.state = {
          body:        props.body || props.children,
          className:   props.className,
          id:          props.id,
          isOutOfView: props.outOfView
        }
    }

    setViewability(inView) {
        this.setState({
            isOutOfView: !inView
        });
    }

    update(content) {
        this.setState(content);
    }

    render() {
        let tabClass = "";
        if (this.state.isOutOfView) {
            tabClass = this.state.className + " hiddentab";
        }
        else {
            tabClass = this.state.className;
        }
        return <div id={this.state.id} className={tabClass}>
             {this.state.body}
        </div>;
    }
}

class FileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.tabMenu = React.createRef();
        let fileMenuLinks = null;
        if ("links" in theMenuStructure && theMenuStructure.links !== undefined) {
            fileMenuLinks = theMenuStructure.links.map((item, index) =>
                <FileMenuEntry key={index} icon={item.icon} a={item.a} input={item.input} ></FileMenuEntry>
            );
        }
        this.state = {
            fileMenuLinks: fileMenuLinks,
	};
    }

    showBody(show=true) {
        this.tabMenu.current.setViewability(show);
    }

    render() {
        return <TabMenu className={this.props.className} body={this.state.fileMenuLinks} id={this.props.id} ref={this.tabMenu} outOfView={this.props.isHidden}/>
    }
}

class DiagramList extends React.Component {
    constructor(props) {
        super(props);
        this.tabMenu = React.createRef();
        this.updatableList = new UpdatableComponentList(this);
        this.getCimsvg = this.getCimsvg.bind(this)
    }

    getCimsvg() {
        return this.state.cimsvg;
    }

    createEntry(object, meta) {
        const diagramTitle = <DiagramTitle name={object['pintura:name']} getCimsvg={this.getCimsvg} diagramId={meta.id}/>
        const diagramComponentList = <DiagramComponentList key={meta.index} ref={meta.ref} title={diagramTitle} components={object["components"]}/>
        return diagramComponentList;
    }

    showBody(show=true) {
        this.tabMenu.current.setViewability(show);
    }

    setCimsvg(cimsvg) {
        this.setState(cimsvg);
    }

    updateLinks(diagramsObject) {
        const diagramList = this.updatableList.updateAll(diagramsObject);
        const buttonAndList = <>
            <button className="component-type-name button wide-button" onClick={ () => { this.state.cimsvg.addDiagram();} }>New Diagram</button>
            { diagramList }
        </>;
        if (this.tabMenu.current) {
            this.tabMenu.current.update({ body: buttonAndList })
        }
    }

    render() {
        return <TabMenu className={this.props.className} id={this.props.id} ref={this.tabMenu} outOfView={this.props.isHidden}>
                   <button className="component-type-name button wide-button" onClick={ () => { this.state.cimsvg.addDiagram(); } }>New Diagram</button>
               </TabMenu>;
    }
}

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

class DiagramPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cimsvg: this.props.cimsvg
        }
    }

    setCimsvg(cimsvg) {
        this.setState(cimsvg);
    }

    updateDiagramList(diagrams) {
        let diagramList = []
        Object.keys(diagrams).map((diagram, index) =>{
            diagramList.push(<option key={index} value={diagram}>{diagrams[diagram]['pintura:name']}</option>)
        });
        this.setState({ options: diagramList })
    }

    render() {
        return <select className="center-button" id="diagram-picker" onChange={ (e)=>{ this.state.cimsvg.setCurrentDiagramId(e.target.value); } }>
                   <option>Select Diagram To Edit</option>
                   { this.state.options }
               </select>;
    }
}

class NewComponentMenu extends React.Component {
    constructor(props) {
        super(props);
        this.getCimsvg = this.getCimsvg.bind(this)
        this.tabMenu = React.createRef();
        this.diagramPicker = React.createRef();
        this.state = {
            cimsvg: this.props.cimsvg
        }
    }

    showBody(show=true) {
        this.tabMenu.current.setViewability(show);
    }

    getCimsvg() {
        return this.state.cimsvg;
    }

    setCimsvg(cimsvg) {
        this.setState(cimsvg);
        if (this.diagramPicker.current) {
            this.diagramPicker.current.setState(cimsvg);
        }
    }

    updateDiagramList(diagrams) {
        if (this.diagramPicker.current) {
            this.diagramPicker.current.updateDiagramList(diagrams);
        }
    }

    render() {
        return <TabMenu className={this.props.className} id={this.props.id} ref={this.tabMenu} outOfView={this.props.isHidden}>
                   <DiagramPicker ref={this.diagramPicker} cimsvg={this.state.cimsvg} />
                   <CreateNewComponentList getCimsvg={this.getCimsvg} />
               </TabMenu>
    }
}
 
class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSwitch: "file-menu-switch",
            diagramMenuLinks: null,
            cimsvg: null,
	};
        this.tabs = {
            "file-menu-switch": React.createRef(),
            "diagram-menu-switch": React.createRef(),
            "new-component-menu-switch": React.createRef(),
        }
        this.updateSelectedTab = this.updateSelectedTab.bind(this);
    }

    setCimsvg(cimsvg) {
        this.setState({cimsvg});
        if (this.tabs["new-component-menu-switch"].current) {
            this.tabs["new-component-menu-switch"].current.setCimsvg({cimsvg});
        }
        if (this.tabs["diagram-menu-switch"].current) {
            this.tabs["diagram-menu-switch"].current.setCimsvg({cimsvg});
        }
    }

    updateSelectedTab(e) {
        Object.values(this.tabs).forEach((tab) => {
            tab.current.showBody(false);
        });
        if(e.currentTarget.id in this.tabs) {
            this.tabs[e.currentTarget.id].current.showBody(true);
            this.setState({ "selectedSwitch": e.currentTarget.id });
        }
        else {
            console.error("No matching tab for id: ", e.currentTarget.id, "currentTarget: ", e.currentTarget);
        }
        e.preventDefault();
        e.stopPropagation();
    }

    updateDiagramMenuLinks(links) {
        if (this.tabs["diagram-menu-switch"].current) {
            this.tabs["diagram-menu-switch"].current.updateLinks(links);
        }
        if (this.tabs["new-component-menu-switch"].current) {
            this.tabs["new-component-menu-switch"].current.updateDiagramList(links);
        }
    }

    render() {
        let baseSwitchClasses = "switch button tab";
        let fileSwitchClass = this.state.selectedSwitch == "file-menu-switch" ? " selected" : ""
        let diagramSwitchClass = this.state.selectedSwitch == "diagram-menu-switch" ? " selected" : ""
        let componentSwitchClass = this.state.selectedSwitch == "new-component-menu-switch" ? " selected" : ""

        let element = <div style={{ "height": "100%" }}>
            <li id="icons" className="row tabs">
                <ul id="file-menu-switch" className={baseSwitchClasses + fileSwitchClass} onClick={ (e) => { this.updateSelectedTab(e) } }>
                    <span className="fa fa-file-archive-o"></span>
                </ul>
                <ul id="diagram-menu-switch" className={baseSwitchClasses + diagramSwitchClass} onClick={ (e) => { this.updateSelectedTab(e) } }>
                    <span className="fa fa-sitemap"></span>
                </ul>
                <ul id="new-component-menu-switch" className={baseSwitchClasses + componentSwitchClass} onClick={ (e) => { this.updateSelectedTab(e) } }>
                    <span className="fa fa-plus-square"></span>
                </ul>
            </li>
            <div id="multi-menu-panel">
                <FileMenu id="file-menu-panel" className="FileMenu" isHidden={false} ref={this.tabs["file-menu-switch"]} iconClass="fa fa-file-archive-o"> </FileMenu>
                <DiagramList id="diagram-menu-panel" className="DiagramList" cimsvg={this.state.cimsvg} isHidden={true} ref={this.tabs["diagram-menu-switch"]} iconClass="fa fa-sitemap"/>
                <NewComponentMenu id="new-component-menu" className="NewComponentMenu" cimsvg={this.state.cimsvg} isHidden={true} ref={this.tabs["new-component-menu-switch"]}/>
            </div>
            <nav id="context-menu" className="context-menu" onMouseUp={ function() { currentCimmenu().getContextMenu().toggleMenuOff() }} style={{ left: "451px", top: "285px", pointerEvents: "auto" }} >
                <ul className="context-menu-items">
                    <li className="context-menu-item">
                        <a onMouseUp={ function() { currentCimmenu().getContextMenu().removeComponent() }}>Delete Component</a>
                    </li>
                </ul>
            </nav>
        </div>;
	return element;
    }
};

Menu.menuStructure = theMenuStructure;
export default Menu
