import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeStyle={{ color: "red", fontWeight: "bold" }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  NewPost
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} /> */}

        <Switch>
          <Route path="/new-post"  component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from='/' to='/posts'/>
          {/* <Route path="/" component={Posts} /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
