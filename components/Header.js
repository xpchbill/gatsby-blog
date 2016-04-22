import React from "react";
import { config } from "config";

import "../css/header.css";
export default class Header extends React.Component {
  render() {
    return (
      <header className="flx-header">
        <div>
          <span className="hd-photo"><img src="./bill.jpg"/></span>
        </div>
        <div>
          <h1>{config.authorName}</h1>
          <p>FEE</p>
        </div>
      </header>
    )
  }
}
