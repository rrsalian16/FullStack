import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import { Route, Link } from "react-router-dom";

import FullPost from '../FullPost/FullPost';


import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Rakshith",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        // this.setState({ error: true });
      });
  }

  postSelectedHanlder = (id) => {
    // this.props.history.push({pathname:'/'+id});
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Something went wrong....!</p>
    );

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          //   <Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHanlder(post.id)}
          />
          //   </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts"> {posts} </section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
