import React from "react";
import {Link} from "react-router";
import sortBy from "lodash/sortBy";
import DocumentTitle from "react-document-title";
import {link} from "gatsby-helpers";
import access from "safe-access";
import {config} from "config";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";

import "../css/zenburn.css";

export default class BlogIndex extends React.Component {

  static propTypes = {
    route: React.PropTypes.object
  }

  render () {

    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, "data.date")
    ).reverse();
    sortedPages.forEach((page) => {
      if (access(page, "file.ext") === "md") {
        pageLinks.push(
          <HomeItem key={page.path} page={page}/>
        )
      }
    });

    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <Header></Header>
          <ul className="homelist">
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
