import React, { Component } from "react";
import {
  getAllTickets,
  addNewTicket,
  buyTicket,
} from "../httpEndpoints/sportsapiTicketsEndpoints";

class Tickets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allTicketsResult: [],
    };
  }

  componentDidMount() {
    getAllTickets()
      .then((result) => this.setState({ allTicketsResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allTicketsResult } = this.state;
    console.log(allTicketsResult);
    return (
      <div>
        <h1>TICKETS 10</h1>
        <h1>TICKETS 10</h1>
      </div>
    );
  }
}

export default Tickets;
