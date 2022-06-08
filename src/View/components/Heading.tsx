import React from "react";

const Heading = ({ text, variant = "h1" }: HeadingProps) => {
  switch (variant) {
    case "h1":
      return <h1>{text}</h1>;
    case "h2":
      return <h2>{text}</h2>;
    case "h3":
      return <h3>{text}</h3>;
    case "h4":
      return <h4>{text}</h4>;
    default:
      throw new Error("Invalid variant passed. Use h1-h4");
  }
};

type HeadingProps = {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4";
};

export default Heading;
