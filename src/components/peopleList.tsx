import React from "react";
import { Container, Stack } from "react-bootstrap";
import peopleList from "../data/people.json";
import { People } from "../interfaces/people";
import { PeopleView } from "./peopleView";

const PEOPLE = peopleList as People[];

function PeopleList(): JSX.Element {
  // const [peoples, setPeoples] = useState<People[]>(PEOPLE);

  return (
    <Container>
      <Stack gap={3}>
        {PEOPLE.map((people: People) => (
          <div key={people.name}>
            <PeopleView people={people}></PeopleView>
          </div>
        ))}
      </Stack>
    </Container>
  );
}

export default PeopleList;
