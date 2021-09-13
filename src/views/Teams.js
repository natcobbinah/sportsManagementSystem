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
  Modal,
  Form,
  Alert,
} from "react-bootstrap";

import { teamsLogos } from "../staticdata/staticdata";

import { addNewFixture } from "../httpEndpoints/sportsapiFixturesEndpoints";

const fixturesState = {
  teamOne: "",
  teamTwo: "",
  scores: "",
  playatTimeDate: "",
  postPoned: "",
  playGround: "",
  city: "",
  winner: "",
  looser: "",
};

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //show modal
      showModal: false,
      ...fixturesState,

      //alert message
      show: true,

      //submit _result
      fixturesResult: null,
      error: null,
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addFixturetoDB = this.addFixturetoDB.bind(this);
  }

  onFixtureChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleShowModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  addFixturetoDB() {
    const {
      teamOne,
      teamTwo,
      scores,
      playatTimeDate,
      postPoned,
      playGround,
      city,
      winner,
      looser,
    } = this.state;

    let postPonedSelect = document.getElementById("postPonedValue").value;

    const fixturesData = {
      teamOne,
      teamTwo,
      scores,
      playatTimeDate,
      postPoned: postPonedSelect,
      playGround,
      city,
      winner,
      looser,
    };

    addNewFixture(fixturesData)
      .then((result) => this.setState({ fixturesResult: result.data }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const { showModal, fixturesResult, show, error } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Button
                variant="primary"
                size="lg"
                className="mb-3"
                onClick={this.handleShowModal}
              >
                Add Fixture
              </Button>

              <Card>
                <Card.Header>
                  <Card.Title as="h4">GHANA LEAGUE TEAMS</Card.Title>
                </Card.Header>

                <Card.Body className="all-icons">
                  <Row>
                    {teamsLogos.map((team) => (
                      <Col
                        className="font-icon-list my-3 py-2"
                        lg="2"
                        md="3"
                        sm="4"
                        xs="6"
                      >
                        <img
                          className="imageItem w-100 p-10"
                          src={team.logo}
                          alt={team.logo}
                        />
                      </Col>
                    ))}
                  </Row>

                  <Modal
                    show={showModal}
                    onHide={this.handleCloseModal}
                    size="lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add Fixture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {fixturesResult ? (
                        <Alert
                          show={show}
                          variant="success"
                          onClose={(event) => this.setState({ show: false })}
                          dismissible
                        >
                          <Alert.Heading>
                            Fixtures added to system successfully
                          </Alert.Heading>
                        </Alert>
                      ) : null}
                      {error ? (
                        <Alert
                          show={show}
                          variant="danger"
                          onClose={(event) => this.setState({ show: false })}
                          dismissible
                        >
                          <Alert.Heading>
                            Error adding fixtures to system
                          </Alert.Heading>
                        </Alert>
                      ) : null}
                      <Form>
                        <Row className="mb-3">
                          <Form.Group as={Col}>
                            <Form.Label>TeamOne</Form.Label>
                            <Form.Control
                              type="text"
                              name="teamOne"
                              placeholder="Enter Team One"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>Scores</Form.Label>
                            <Form.Control
                              type="text"
                              name="scores"
                              placeholder="Enter scores"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>TeamTwo</Form.Label>
                            <Form.Control
                              type="text"
                              name="teamTwo"
                              placeholder="Enter Team Two"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col}>
                            <Form.Label>PlayAtDateTime</Form.Label>
                            <Form.Control
                              type="date"
                              name="playatTimeDate"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>PostPoned</Form.Label>
                            <Form.Control as="select" id="postPonedValue">
                              <option value="true">True</option>
                              <option value="false">False</option>
                            </Form.Control>
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col}>
                            <Form.Label>PlayGround</Form.Label>
                            <Form.Control
                              type="text"
                              name="playGround"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="city"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col}>
                            <Form.Label>Winner</Form.Label>
                            <Form.Control
                              type="text"
                              name="winner"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>Looser</Form.Label>
                            <Form.Control
                              type="text"
                              name="looser"
                              onChange={this.onFixtureChange}
                            />
                          </Form.Group>
                        </Row>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={this.addFixturetoDB}>
                        Add-Fixture
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Teams;
