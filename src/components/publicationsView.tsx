import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Publication } from "../interfaces/publication";
import {
  BsFiletypePdf,
  BsFiletypePpt,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";

function PdfIcon({ link }: { link: string }): JSX.Element {
  if (link) {
    return (
      <a href={link}>
        <BsFiletypePdf size="30px" />
      </a>
    );
  } else {
    return <div></div>;
  }
}
function SlidesIcon({ link }: { link: string }): JSX.Element {
  if (link) {
    return (
      <a href={link}>
        <BsFiletypePpt size="30px" />
      </a>
    );
  } else {
    return <div></div>;
  }
}
function TalkIcon({ link }: { link: string }): JSX.Element {
  if (link) {
    return (
      <a href={link}>
        <BsFillCaretRightSquareFill size="30px" />
      </a>
    );
  } else {
    return <div></div>;
  }
}

export function PublicationsView({
  publication,
}: {
  publication: Publication;
}): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          {publication.title} {publication.conference}
        </Col>
      </Row>
      <Row>
        <Col>
          <PdfIcon link={publication.pdfLink}></PdfIcon>
          <SlidesIcon link={publication.slidesLink}></SlidesIcon>
          <TalkIcon link={publication.talkLink}></TalkIcon>
        </Col>
      </Row>
    </Container>
  );
}
