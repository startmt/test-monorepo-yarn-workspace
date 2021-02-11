import React from "react";
import { useTodo } from "../hooks/todo-hooks";
const IndexPage = () => {
  const { todoListoData } = useTodo();
  console.log(todoListoData);
  return <div> 1</div>;
};

export default IndexPage;
