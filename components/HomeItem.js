import React from "react";
import moment from "moment";
import access from "safe-access";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";

import "../css/home-item.css";
export default class HomeItem extends React.Component {

  static propTypes = {
    page: React.PropTypes.object.isRequired
  }

  render () {
    const { page } = this.props;
    const title = access(page, "data.title") || page.path;

    return (
      <li className="home-item">
        <h3><Link to={prefixLink(page.path)}>{title}</Link></h3>
        <p className="home-item-status">{moment(page.data.date).format('YYYY-MM-D')}</p>
        <div dangerouslySetInnerHTML={{ __html: page.data.body }}/>
        <p className="home-item-content">{page.data.body.replace(/<[^>]*>/g, "")}</p>
      </li>
    )
  }
}
