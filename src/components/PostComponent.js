import React, { Component } from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";

class Post extends Component {
  render() {
    return (
      <div className="ui container comments">
        <CommentDetail
          author={"Edward"}
          date={"Yesterday at 3 PM"}
          content={"My Post!"}
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author={"Eugene"}
          date={"Yesterday at 4 PM"}
          content={"Great Interview!"}
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author={"Jane"}
          date={"Today at 3PM"}
          content={"My Post!"}
          avatar={faker.image.avatar()}
        />
      </div>
    );
  }
}

export default Post;
