import React from "react";
import BodyParagraph from "../../components/BodyParagraph";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

const About = () => (
  <Container>
    <Navbar />
    <Heading text="About Us" />
    <BodyParagraph text="Just some stuff about us" />
  </Container>
);

export default About;
