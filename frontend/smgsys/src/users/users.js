import React, { Component } from "react";
import {
  registerUser,
  loginUser,
  getAllRegisteredUsers,
  deleteRegisteredUser,
} from "../httpEndpoints/sportsapiUserRegLoginEndpoints";

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
      <div>
        <h1>USERS 10</h1>
        <h1>USERS 10</h1>
      </div>
    );
  }
}

export default Users;
