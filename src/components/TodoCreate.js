import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;

  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  border-top: 1px solid #e9ecef;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen((curr) => !curr);
  const onChange = ({ target: { value } }) => setValue(value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });

    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              value={value}
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

// export default TodoCreate;
export default React.memo(TodoCreate);
