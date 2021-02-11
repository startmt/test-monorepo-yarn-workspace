import React from "react";
import { ITodo } from "utils";
const IndexPage = () => {
  const a: ITodo = {
    id: "1",
    message: "Hello",
  };
  return <div> {a.id}</div>;
};

export default IndexPage;
