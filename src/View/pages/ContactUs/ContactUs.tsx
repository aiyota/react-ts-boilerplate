import React from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import style from "./contactUsStyle";

const ContactUs = () => (
  <Container>
    <Navbar />
    <Heading variant="h2" text="Contact Us" />
    <div>
      <label style={style.label} htmlFor="email">
        Email:
      </label>
      <input id="email" type="email" />
    </div>
    <div>
      <label style={style.label} htmlFor="message">
        Message:
      </label>
      <textarea id="message"></textarea>
    </div>
    <button type="submit">Submit</button>
  </Container>
);

export default ContactUs;
