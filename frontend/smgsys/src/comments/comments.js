import React, { Component } from "react";
import {
  getAllComments,
  addNewComment,
  updateComment,
  deleteComment,
} from "../httpEndpoints/sportsapiCommentsEndpoints";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allCommentsResult: [],
    };
  }

  componentDidMount() {
    getAllComments()
      .then((result) => this.setState({ allCommentsResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allCommentsResult } = this.state;
    console.log(allCommentsResult);
    return (
      <div>
        <h1>COMMENT 10</h1>
        <h1>COMMENT 10</h1>
      </div>
    );
  }
}

export default Comments;
