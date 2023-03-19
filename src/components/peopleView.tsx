import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { People } from "../interfaces/people";

export function PeopleView({ people }: { people: People }): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>{people.name}</Col>
      </Row>
    </Container>
  );
}
