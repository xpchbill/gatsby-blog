import React from 'react'
import { Link } from 'react-router'
import {find, includes} from 'lodash'

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let nextPost
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = nextPost.data.body
      const body = html.replace(/<[^>]*>/g, '')

      return (
        <div>
          <h6>
            READ THIS NEXT:
          </h6>
          <h3>
            <Link
              to={{
                pathname: nextPost.path,
                query: {
                  readNext: true,
                },
              }}
            >
              {nextPost.data.title}
            </Link>
          </h3>
          <p>{body}</p>
          <hr />
        </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNext
