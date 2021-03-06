import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    margin-top: 40px;
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const remain = todos.filter((todo) => !todo.done).length;

  const today = new Date();
  const dateStr = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateStr}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">
        {todos.length > 0
          ? remain > 0
            ? `할 일 ${remain}개 남음`
            : `다 했어요!`
          : `할 일이 없어요...`}
      </div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
