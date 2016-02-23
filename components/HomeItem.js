import React from 'react'
import access from 'safe-access'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { prune, include as includes } from 'underscore.string'

class HomeItem extends React.Component {
  render () {
    const { page } = this.props;
    const title = access(page, 'data.title') || page.path;
    return (
      <li
        style={{
          marginBottom: rhythm(1/4),
        }}
      >
        <Link to={link(page.path)}>{title}</Link>
        <br/>
        {prune(page.data.body.replace(/<[^>]*>/g, ''), 200)}
      </li>
    )
  }
}

HomeItem.propTypes = {
  page: React.PropTypes.object.isRequired,
}

export default HomeItem
