import React from "react";
import BodyParagraph from "../../components/BodyParagraph";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import bunnyImg from "../../../img/bunny.jpg";

const Home = () => (
  <Container>
    <Navbar />
    <Heading text="My React TS App" />
    <img src={bunnyImg} />
    <BodyParagraph
      text={`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Iusto veritatis autem dignissimos nam aut est? 
        Dolorem optio maxime aut tempore.`}
    />
  </Container>
);

export default Home;
