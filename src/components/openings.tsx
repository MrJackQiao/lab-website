import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Openings(): JSX.Element {
  return (
    <Container fluid="md">
      <Row>
        <Col sm></Col>
        <Col sm>
          <div>Openings</div>
          <div>Openings will be listed here.</div>
        </Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
}
