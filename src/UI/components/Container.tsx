import React from "react";
import { Children } from "../../ts/types";

const Container = ({ children }: ContainerProps) => (
  <div className="container">{children}</div>
);

type ContainerProps = { children: Children };

export default Container;
