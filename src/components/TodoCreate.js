import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

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

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen((curr) => !curr);
  return (
    <>
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
