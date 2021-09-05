import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Coaches from "./coaches/coaches";
import Comments from "./comments/comments";
import Players from "./players/players";
import Supporters from "./supporters/supporters";
import Tickets from "./tickets/tickets";
import Users from "./users/users";
import ImageSliders from "./imageSliders/carousel";
import ShowSportNews from "./news/sportNews";

function App() {
  return (
    <div>
      <Container fluid>
        <Row className="homepage my-4 py-5">
          <NavigationBar />
          <ImageSliders />
          <ShowSportNews />
        </Row>

        <BrowserRouter>
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">SPMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/fixtures">Fixtures</Nav.Link>
          <Nav.Link href="/table">Table</Nav.Link>
          <Nav.Link href="/teams">Teams</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/contactUs">ContactUs</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-danger mx-2" size="lg">
            Login
          </Button>
          <Button variant="outline-warning" size="lg">
            SignUp
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
