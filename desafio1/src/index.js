import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./components/Header.js";
import Post from "./components/Post.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: "Gérfesson Santos",
          avatar: "https://avatars3.githubusercontent.com/u/20760093?s=460&v=4",
          time: "há 3 min",
          body:
            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
        },
        {
          id: 2,
          name: "Rocketseat",
          avatar: "https://avatars3.githubusercontent.com/u/20760093?s=460&v=4",
          time: "há 30 min",
          body:
            "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <Header />
        </div>
        {this.state.posts.map(post => {
          console.log(post.avatar + "\n" + post.name + "\n" + post.time);
          return (
            <Post
              id={post.id}
              header={{ avatar: post.avatar, name: post.name, time: post.time }}
              body={post.body}
            />
          );
        })}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
