import React, { Component } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";

import "./welcome.css";
import {
  registerUser,
  loginUser,
  getAllRegisteredUsers,
} from "../httpEndpoints/sportsapiUserRegLoginEndpoints";

const INITIAL_STATE = {
  email: "",
  password: "",
};

import { sportNews } from "../staticdata/staticdata";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
      errorLogin: null,
      successLogin: null,
      allRegisteredUsers: [],
      err: null,
      //modal attributes
      show: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginShowModal = this.handleLoginShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password, errorLogin, successLogin, show } = this.state;
    const logindata = {
      email,
      password,
    };

    loginUser(logindata)
      .then((successLogin) =>
        this.setState({ successLogin: successLogin.data })
      )
      .catch((errorLogin) => this.setState({ errorLogin }));

    this.setState({
      show: false,
    });

    console.log(successLogin);
    //redirect to main dashboard
    this.props.history.push("/admin/dashboard");
  }

  handleLoginShowModal() {
    this.setState({
      show: true,
    });
  }

  handleCloseModal() {
    this.setState({
      show: false,
    });
  }

  componentDidMount() {
    const { allRegisteredUsers } = this.state;
    getAllRegisteredUsers()
      .then((result) => this.setState({ allRegisteredUsers: result.data }))
      .catch((err) => this.setState(err));

    console.log(allRegisteredUsers);
  }

  render() {
    const { show, errorLogin, successLogin, email, password } = this.state;
    return (
      <Container fluid className="sports">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">SPMS</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="outline-primary"
              onClick={this.handleLoginShowModal}
            >
              Login
            </Button>
            <Button variant="outline-secondary" onClick={() => handleSignUp()}>
              SignUp
            </Button>
          </Nav>
        </Navbar>
        <LoginForm
          show={show}
          handleClose={this.handleCloseModal}
          loginSubmit={this.handleLoginSubmit}
          onChange={this.onChange}
        />

        <Row className="my-5 mt-5 pt-5">
          {sportNews.map((news, index) => (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
              <div class="hovereffect">
                <img class="img-responsive" src={news.image} alt="" />
                <div class="overlay">
                  <h2>{news.description}</h2>
                  <p>
                    <a href={news.link} target="_blank">
                      View News
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

const LoginForm = ({ show, handleClose, loginSubmit, onChange }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>LOGIN PAGE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="Enter email"
                  onChange={onChange}
                />

                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  size="lg"
                  placeholder="Password"
                  onChange={onChange}
                />
              </Form.Group>

              <Button
                variant="secondary"
                type="submit"
                block
                onClick={loginSubmit}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Welcome;
