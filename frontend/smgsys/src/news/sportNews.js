import { sportNews } from "../staticdata/staticdata";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ShowSportNews extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <ShowSportListing allLatesSportNews={sportNews} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const ShowSportListing = ({ allLatesSportNews }) => {
  if (allLatesSportNews) {
    return (
      <Container fluid>
        <Row>
          {allLatesSportNews.map((news, i) => (
            <Col md={6}>
              <Card key={news.id} bg="Secondary" className="my-4 py-4">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{news.id}</Card.Title>
                  <Card.Text>{news.name}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <p>{news.description}</p>
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return <p> Loading ... </p>;
  }
};

export default ShowSportNews;
