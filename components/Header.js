import React from "react";
import { config } from "config";

import "../css/header.less";
class Header extends React.Component {
  render() {
    return (
      <header className="flx-header">
        <div className="bx-xl-1-8">
          <img src="./bill.jpg"/>
        </div>
        <div className="bx-xl-7-8">
          <strong>{config.authorName}</strong>
          <p>FEE</p>
        </div>
      </header>
    )
  }
}

export default Header
