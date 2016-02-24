import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import DisqusThread from 'react-disqus-thread'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
          <em>
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr/>
          <ReadNext post={post} pages={route.pages} />
          <DisqusThread
            shortname="Bill"
            title={post.title}
            url={"http://bricolage.io#{@props.page.path}"}
          />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
