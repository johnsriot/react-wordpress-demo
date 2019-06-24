import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";

class PostView extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    axios
      .get(`https://www.goidp.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then(post => {
        this.setState({
          post: post.data[0]
        });
      });
  }

  createMarkup = html => {
    return { __html: html };
  };

  render() {
    const { post } = this.state;
    if (post === undefined || Object.keys(post).length === 0) {
      return <Spinner />;
    } else {
      let build;
      if (post.title) {
        build = (
          <div>
            <h1>{post.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)}
            />
          </div>
        );
      } else {
        build = <div />;
      }
      return build;
    }
  }
}

export default PostView;
