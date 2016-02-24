import React from "react";
import moment from "moment";
import access from "safe-access";
import { Link } from "react-router";
import { link } from "gatsby-helpers";1
import { prune, include as includes } from "underscore.string";

import "../css/homeitem.css";
class HomeItem extends React.Component {
  render () {
    const { page } = this.props;
    const title = access(page, "data.title") || page.path;
    console.log();
    return (
      <li className="home-item">
        <h3><Link to={link(page.path)}>{title}</Link></h3>
        <p>{moment(page.data.date).format('MMMM-D-YYYY')}</p>
        <p>{prune(page.data.body.replace(/<[^>]*>/g, ""), 200)}</p>
      </li>
    )
  }
}

HomeItem.propTypes = {
  page: React.PropTypes.object.isRequired,
}

export default HomeItem
