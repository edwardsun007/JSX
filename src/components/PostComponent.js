import React, { Component } from "react";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

class Post extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={"Edward"}
            date={"Yesterday at 3 PM"}
            content={"My Post!"}
            avatar={faker.image.avatar()}
          />
          {/* by using closing tag on component, we can nest another
          component inside so it will be a prop of the wrapping
          component */}
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={"Eugene"}
            date={"Yesterday at 4 PM"}
            content={"Great Interview!"}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={"Jane"}
            date={"Today at 3PM"}
            content={"My Post!"}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default Post;
