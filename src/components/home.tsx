import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(): JSX.Element {
  return (
    <Container fluid="md">
      <Row>
        <Col sm></Col>
        <Col sm>
          <div>This is the home page of X-Lab at University of Delaware</div>
        </Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
}
