import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Filter extends Component {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <input type="text" onChange={this.props.onChange} />
      </>
    );
  }
}

Filter.prototyp = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
