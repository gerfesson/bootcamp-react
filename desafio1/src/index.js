import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./components/Header.js";
import Post from "./components/Post.js";

import "./style.scss";

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
            "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko."
        },
        {
          id: 2,
          name: "Rocketseat",
          avatar: "https://avatars3.githubusercontent.com/u/20760093?s=460&v=4",
          time: "há 30 min",
          body:
            "Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach."
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
        <div className="page">
          {this.state.posts.map(post => {
            console.log(post.avatar + "\n" + post.name + "\n" + post.time);
            return (
              <Post
                key={post.id}
                id={post.id}
                header={{
                  avatar: post.avatar,
                  name: post.name,
                  time: post.time
                }}
                body={post.body}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
