import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class PostHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <img className="avatar-publi" src={this.props.avatar} alt="img" />
        <div>
          <p className="name-publi">{this.props.name}</p>
          <p className="time-publi">{this.props.time}</p>
        </div>
      </Fragment>
    );
  }
}

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};
