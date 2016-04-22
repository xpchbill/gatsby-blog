import React from "react";
import {Container} from "react-responsive-grid";
import {config} from "config";

import "normalize.css/normalize.css"
import "../css/styles.css"

export default class Template extends React.Component {

  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
  }

  render() {
    const {location, children} = this.props
    return (
      <Container>
        {children}
      </Container>
    )
  }
}
