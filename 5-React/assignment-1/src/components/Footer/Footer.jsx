import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="12" className="footer-copywright">
            <span>Copyright © {year} Made by❤️</span>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer