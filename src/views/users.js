import React, { Component } from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import {
  registerUser,
  getAllRegisteredUsers,
  deleteRegisteredUser,
} from "../httpEndpoints/sportsapiUserRegLoginEndpoints";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      addUserSuccess: null,
      addUserError: null,
      allUsersFetch: [],
      err: null,

      //alert attributes
      show: true,

      //coach attributes to update
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.addUsertoDB = this.addUsertoDB.bind(this);
  }

  addUsertoDB() {
    const { firstName, lastName, email, password } = this.state;
    let role = document.getElementById("roleValue").value;
    const userData = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    registerUser(userData)
      .then((addUserSuccess) =>
        this.setState({ addUserSuccess: addUserSuccess.data })
      )
      .catch((err) => this.setState({ err }));
  }

  componentDidMount() {
    const { allUsersFetch } = this.state;
    getAllRegisteredUsers()
      .then((result) => this.setState({ allUsersFetch: result.data }))
      .catch((err) => this.setState(err));

    console.log(allUsersFetch);
  }

  render() {
    const { addUserSuccess, addUserError, show } = this.state;
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
      return null;
    } else {
      return (
        <Container fluid>
          <Row>
            <Col md="12">
              {addUserSuccess ? (
                <Alert
                  show={show}
                  variant="success"
                  onClose={(event) => this.setState({ show: false })}
                  dismissible
                >
                  <Alert.Heading>
                    User added to system successfully
                  </Alert.Heading>
                </Alert>
              ) : null}

              {addUserError ? (
                <Alert
                  show={show}
                  variant="danger"
                  onClose={(event) => this.setState({ show: false })}
                  dismissible
                >
                  <Alert.Heading>Error adding user to the System</Alert.Heading>
                  <p>Server might be down: or not available currently</p>
                </Alert>
              ) : null}
              <Card>
                <Card.Header>
                  <Card.Title as="h4"></Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Firstname"
                          onChange={(e) =>
                            this.setState({ firstName: e.target.value })
                          }
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          onChange={(e) =>
                            this.setState({ lastName: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />

                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />

                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select" id="roleValue">
                          <option value="admin">Admin</option>
                          <option value="coach">Coach</option>
                          <option value="supporter">Supporter</option>
                        </Form.Control>
                      </Form.Group>
                    </Row>
                    <Button
                      variant="success"
                      onClick={() => this.addUsertoDB()}
                    >
                      Add User
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Users;
