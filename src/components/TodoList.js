import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="테스트1" done={true} />
      <TodoItem text="테스트2" done={true} />
      <TodoItem text="테스트3" done={false} />
      <TodoItem text="테스트4" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
