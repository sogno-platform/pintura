"use strict";

import templates from "../templates/index.js";
import theMenuStructure from "./react-menu.json";

var Nav = ReactBootstrap.Nav;

const e = React.createElement;

class ItemLink extends React.Component {
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
                a = <a href="#" className="button wide-button" onClick={Function(this.props.a.onclick)}>{this.props.a.text}</a>
            }
        }
        let element = <li className="wide-row list-subtitle">
            {input}
            {a}
        </li>;
        return element;
    }
}

function createGridArea(column, row, height) {
  let rowStart     = (row + 1).toString();
  let rowEnd       = (row + 1 + height).toString();
  let columnStart  = (column + 1).toString();
  let columnEnd    = (column + 2).toString();

  return { "gridArea":    rowStart +
                 " / " + columnStart +
                 " / " + rowEnd +
                 " / " + columnEnd };
};

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

	let links = [];

        if ("links" in this.props && this.props.links !== undefined) {
            links = this.props.links.map((item, index) =>
                <ItemLink key={index} a={item.a} input={item.input} ></ItemLink>
            );
        }
        let titleStyle = createGridArea(this.props.column, 0, 1)
        let listStyle = createGridArea(this.props.column, 1, links.length)

        let element = <>
            <div id={this.props.button.id} style={titleStyle} className="menu-title">
                <a href="#" className="button wide-button center-button" type="file">{this.props.title}</a>
            </div>
            <div id={this.props.panel.id} style={listStyle} className="main-menu-panel floating-panel invisible">
                <div className="floating-panel-table">
                    <div className="floating-menu-list">
                        <ul className="floating-panel-list">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </>;
	return element;
    }
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = theMenuStructure;
    }

    render() {
        let element = <>
            <div id="corner-switches">
                <span id="barmenu-switch" className="switch button row-right topleft" onClick={ function(evt) { currentCimmenu().toggleMainMenuVisible(); evt.stopPropagation(); }} >
                    <span className="fa fa-bars"></span>
                </span>
                <span id="all-components-switch" className="switch button row-right bottomright" onClick={ function() { currentCimmenu().toggleAllComponentsVisibility(); evt.stopPropagation(); }} >
                    <span className="fa fa-gears"></span>
                </span>
                    <span id="diagram-components-switch" className="switch button row-right bottomleft" onClick={ function() { currentCimmenu().toggleDiagramComponentsVisibility(); evt.stopPropagation(); }} >
                    <span className="fa fa-cubes"></span>
                </span>
            </div>
            <div id="main-menu" className="row-left dialog-over-diagram grid-panel invisible">
                {Object.keys(this.state).map((item,index) =>
                    <MenuItem key={index} column={index} button={this.state[item].button} panel={this.state[item].panel}
                              title={item} links={this.state[item].links}>
                    </MenuItem>)}
            </div>
            <div className="spacer" order="1">
            </div>
            <div id="column-panels" className="grid-panel">
                <div className="diagrams-panel invisible">
                    <div className="floating-panel-table">
                        <div className="spacer">
                        </div>
                        <div className="floating-menu-list"> </div>
                    </div>
                </div>
                <div className="components-panel invisible">
                    <div className="floating-panel-table">
                        <div className="spacer">
                        </div>
                        <div className="floating-menu-list"> </div>
                    </div>
                </div>
                <div className="attributes-panel invisible">
                    <div className="floating-panel-table">
                        <div className="spacer">
                        </div>
                        <div className="floating-menu-list"> </div>
                    </div>
                </div>
                <div className="all-components-panel invisible">
                    <div className="floating-panel-table">
                        <div className="spacer">
                        </div>
                        <div className="floating-menu-list"> </div>
                    </div>
                </div>
            </div>
            <nav id="context-menu" className="context-menu" onMouseUp={ function() { currentCimmenu().getContextMenu().toggleMenuOff() }} style={{ left: "451px", top: "285px", pointerEvents: "auto" }} >
                <ul className="context-menu-items">
                    <li className="context-menu-item">
                        <a onMouseUp={ function() { currentCimmenu().getContextMenu().removeComponent() }}>Delete Component</a>
                    </li>
                </ul>
            </nav>
        </>;
	return element;
    }
};

Menu.menuStructure = theMenuStructure;
export default Menu
