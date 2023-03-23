import React from "react";
import { Container, Stack } from "react-bootstrap";
import publications from "../data/publications.json";
import { Publication } from "../interfaces/publication";
import { PublicationsView } from "./publicationsView";

const PUBLICATIONS = publications as Publication[];

function PublicationList() {
  return (
    <Container>
      <Stack>
        {PUBLICATIONS.map((publication: Publication) => (
          <div key={publication.title}>
            <PublicationsView publication={publication}></PublicationsView>
          </div>
        ))}
      </Stack>
    </Container>
  );
}

export default PublicationList;
