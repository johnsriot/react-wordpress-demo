import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.goidp.com/wp-json/wp/v2/posts/`).then(posts => {
      this.setState({
        posts: posts.data
      });
    });
  }

  createMarkup = html => ({ __html: html });

  render() {
    const { posts } = this.state;
    if (posts.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div>
          {posts.map(post => (
            <Link to={`/${post.slug}`} key={post.id}>
              <div className="card" key={post.id}>
                <div className="card-content">
                  <h3>{post.title.rendered}</h3>
                  <div
                    dangerouslySetInnerHTML={this.createMarkup(
                      post.excerpt.rendered
                    )}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }
}

export default PostList;
