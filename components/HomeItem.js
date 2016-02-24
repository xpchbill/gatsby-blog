import React from "react";
import moment from "moment";
import access from "safe-access";
import { Link } from "react-router";
import { link } from "gatsby-helpers";1
import { prune, include as includes } from "underscore.string";

import "../css/home-item.css";
class HomeItem extends React.Component {
  render () {
    const { page } = this.props;
    const title = access(page, "data.title") || page.path;
    console.log();
    return (
      <li className="home-item">
        <h3><Link to={link(page.path)}>{title}</Link></h3>
        <p className="home-item-status">{moment(page.data.date).format('YYYY-MM-D')}</p>
        <p className="home-item-content">{prune(page.data.body.replace(/<[^>]*>/g, ""), 340)}</p>
      </li>
    )
  }
}

HomeItem.propTypes = {
  page: React.PropTypes.object.isRequired,
}

export default HomeItem
