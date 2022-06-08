import React from "react";
import BodyParagraph from "../../components/BodyParagraph";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

const NotFound = () => (
  <Container>
    <Navbar />
    <Heading variant="h2" text="404 Not Found" />
    <BodyParagraph text="The requested page was not found." />
  </Container>
);

export default NotFound;
