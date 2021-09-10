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
} from "react-bootstrap";

import {
  getAllTickets,
  addNewTicket,
  buyTicket,
} from "../httpEndpoints/sportsapiTicketsEndpoints";

import { teamsLogos } from "../staticdata/staticdata";

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
      <>
        <Container fluid>
          <Row>
            <Col md="12">
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tickets;
