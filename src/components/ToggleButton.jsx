import PropTypes from "prop-types";
import React, { Component } from "react";
import "../style/ToggleButton.css";

class ToggleButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <div id="nav-container" onClick={toggleSelected}>
        <div className={`toggle-icon ${selected ? "pushed" : "disabled"}`}>
          {selected ? 
            <div>
              <span className="bar" />
              <span style={style} className="bar" />
              <span style={style2} className="bar" />
              <ul className="list-group">
              <li id="navlinks" className="list-group-item"><a href="https://swapi.dev">API</a></li>
              </ul>
            </div> : 
            <div>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>}
        </div>
      </div>
    );
  }
}

const style = {
  borderRightColor: "#e9b8b9",
  boxShadow: "0.3em 0 0.4em 0.1em rgba(205, 40, 44, 0.75)"
  }

const style2 = {
  borderRightColor: "#daecf1",
  boxShadow: "0.3em 0 0.4em 0.1em rgba(0, 100, 255, 0.75)"
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};

export default ToggleButton;