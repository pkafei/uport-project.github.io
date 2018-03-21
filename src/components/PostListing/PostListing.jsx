import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post =>
          <Link to={post.path} key={post.path}>
            <h1>
              {post.title}
            </h1>
          </Link>
        )}
      </div>
    );
  }
}

export default PostListing;
