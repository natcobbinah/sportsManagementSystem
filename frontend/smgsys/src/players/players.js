import React, { Component } from "react";
import {
  getAllPlayers,
  addNewPlayer,
  updatePlayer,
  deletePlayer,
} from "../httpEndpoints/sportsapiPlayersEndpoints";

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allPlayersResult: [],
    };
  }

  componentDidMount() {
    getAllPlayers()
      .then((result) => this.setState({ allPlayersResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allPlayersResult } = this.state;
    console.log(allPlayersResult);
    return (
      <div>
        <h1>PLAYER 10</h1>
        <h1>PLAYER 10</h1>
      </div>
    );
  }
}

export default Players;
