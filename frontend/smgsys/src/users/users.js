import React, { Component } from "react";
import {
  registerUser,
  loginUser,
  getAllRegisteredUsers,
  deleteRegisteredUser,
} from "../httpEndpoints/sportsapiUserRegLoginEndpoints";

import { Container } from "react-bootstrap";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allUsersResult: [],
    };
  }

  componentDidMount() {
    getAllRegisteredUsers()
      .then((result) => this.setState({ allUsersResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allUsersResult } = this.state;
    console.log(allUsersResult);
    return (
      <Container fluid>
        <p>hello</p>
      </Container>
    );
  }
}

export default Users;
