import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./footer.css";
import * as Icon from "react-bootstrap-icons";

const PageFooterContent = () => {
  return (
    <Container className="footerContent" fluid>
      <Row>
        <Col className="mt-4 pt-4" md={3}></Col>
        <Col className="mt-3 pt-3 text-center font-weight-bold" md={6}>
          <Icon.Whatsapp size={56} className="mr-4" color="green" />
          <Icon.Facebook size={56} className="mr-4" color="blue" />
          <Icon.Twitter size={56} className="mr-4" color="royalblue" />
          <Icon.Twitch size={56} className="mr-4" color="red" />
        </Col>
        <Col className="mt-4 pt-4" md={3}></Col>
      </Row>
    </Container>
  );
};

export default PageFooterContent;
