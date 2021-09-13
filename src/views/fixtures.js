import React, { Component } from "react";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { getAllFixtures } from "../httpEndpoints/sportsapiFixturesEndpoints";

class Fixtures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
      allFixturesResult: [],
    };
  }

  componentDidMount() {
    getAllFixtures()
      .then((result) => this.setState({ allFixturesResult: result.data }))
      .catch((err) => this.setState(err));
  }

  render() {
    const { allFixturesResult } = this.state;
    return (
      <>
        <Container fluid>
          <Row className="mt-3 pt-3">
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Fixtures for the Season</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  {allFixturesResult ? (
                    <Table className="table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="border-0">Home Team</th>
                          <th className="border-0">Scores</th>
                          <th className="border-0">Away Team</th>
                          <th className="border-0">Winner</th>
                          <th className="border-0">Looser</th>
                          <th className="border-0">PlayGround</th>
                          <th className="border-0">Match Date</th>
                          <th className="border-0">PostPoned</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allFixturesResult.map((fixture) => (
                          <tr id={fixture.key}>
                            <td>{fixture.teamOne}</td>
                            <td>{fixture.scores}</td>
                            <td>{fixture.teamTwo}</td>
                            <td>{fixture.winner}</td>
                            <td>{fixture.looser}</td>
                            <td>{fixture.playGround}</td>
                            <td>{fixture.playatTimeDate}</td>
                            <td>{fixture.postPoned}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Fixtures;
