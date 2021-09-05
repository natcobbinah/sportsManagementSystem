import React, { Component } from "react";
import {
  getAllCoaches,
  addNewCoachAccount,
  updateCoachAccount,
  deleteCoachAccount,
} from "../httpEndpoints/sportsapiCoachesEndpoints";

class Coaches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allCoachesResult: [],
    };
  }

  componentDidMount() {
    getAllCoaches()
      .then((result) => this.setState({ allCoachesResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allCoachesResult } = this.state;
    console.log(allCoachesResult);
    return (
      <div>
        <h1>COACH 10</h1>
        <h1>COACH 10</h1>
      </div>
    );
  }
}

export default Coaches;
