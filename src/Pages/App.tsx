import React from "react";
import BodyParagraph from "../Components/BodyParagraph";
import Heading from "../Components/Heading";

const App = () => (
  <>
    <Heading text={"My React TS App"} />

    <BodyParagraph
      text={`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Iusto veritatis autem dignissimos nam aut est? 
        Dolorem optio maxime aut tempore.`}
    />
  </>
);

export default App;
