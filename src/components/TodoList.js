import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;

  background-color: red;
`;

const TodoList = () => {
  return <TodoListBlock>TodoListBlock</TodoListBlock>;
};

export default TodoList;
