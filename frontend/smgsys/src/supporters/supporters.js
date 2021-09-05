import React, { Component } from "react";
import {
  getAllSupporters,
  getAllSupporterCommentsByEmail,
  createNewSupporterAccount,
  updateSupporterAccount,
  deleteSupporterById,
} from "../httpEndpoints/sportsapiSupportersEndpoints";

class Supporters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allSupportersResult: [],
    };
  }

  componentDidMount() {
    getAllSupporters()
      .then((result) => this.setState({ allSupportersResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allSupportersResult } = this.state;
    console.log(allSupportersResult);
    return (
      <div>
        <h1>SUPPORTER 10</h1>
        <h1>SUPPORTER 10</h1>
      </div>
    );
  }
}

export default Supporters;
