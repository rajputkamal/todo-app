/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styled, { css } from "styled-components";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const Main = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addTodoHandler = () => {
    if (input === "" || input.trim().length === 0) {
      return;
    }
    if (isEditing) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setIsEditing(false);
      setEditId(null);
      setInput("");
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
      setInput("");
    }
  };

  function getTodaysDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[today.getMonth()];
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  const deleteHandler = (id: number) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
    setInput("");
  };

  const editHandler = (todo: any) => {
    setInput(todo.text);
    setIsEditing(true);
    setEditId(todo.id);
  };

  const toggleCompleteHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <StyledMainContainer>
      <legend>To Do</legend>
      <StyledTopWrapper>
        <StyledLogo>
          <StyledIcon>
            <LuListTodo scale={1.8} />
          </StyledIcon>
        </StyledLogo>
        <StyledInputContainer>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodoHandler()}
          />
        </StyledInputContainer>
        <StyledButton onClick={addTodoHandler}>Add</StyledButton>
      </StyledTopWrapper>
      <StyledListContainer>
        <legend>My Day: {getTodaysDate()}</legend>
        {todos.map((todo) => {
          return (
            <StyledTodoItems>
              <StyledList>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleteHandler(todo.id)}
                />
                <StyledLi key={todo.id} completed={todo.completed}>
                  {todo.text}
                </StyledLi>
              </StyledList>
              <StyledActions>
                <StyledIcon
                  type="edit"
                  onClick={() => editHandler(todo)}
                  className={
                    (isEditing && editId === todo.id) || todo.completed
                      ? "disabledIcon"
                      : ""
                  }
                >
                  <CiEdit />
                </StyledIcon>
                <StyledIcon
                  type="delete"
                  onClick={() => deleteHandler(todo.id)}
                  className={todo.completed ? "disabledIcon" : ""}
                >
                  <MdOutlineDelete />
                </StyledIcon>
              </StyledActions>
            </StyledTodoItems>
          );
        })}
      </StyledListContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  max-height: 600px;
  border-radius: 4px;
  margin: 40px 0;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

type StyledIconProps = {
  scale?: number;
  type?: string;
};

const StyledIcon = styled.span<StyledIconProps>(
  ({ scale, type }) => css`
    scale: ${scale || 1.5};
    cursor: pointer;
    &:hover {
      & svg {
        fill: ${type === "delete"
          ? "red"
          : type === "edit"
          ? "#66fcf1"
          : "none"};
        transition: all ease-in-out 0.3s;
      }
    }
    &.disabledIcon {
      opacity: 0.5;
      pointer-events: none;
    }
  `
);

const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 4px 12px; */
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  flex: 1;
  max-width: 600px;
  background-color: #0b0c10;
  padding-left: 12px;

  & input {
    display: flex;
    width: 100%;
    padding: 12px;
    border: none;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    &:focus {
    }
    &::placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  }
`;

const StyledListContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: none;
  overflow: auto;
  & legend {
    color: #66fcf1;
    padding: 12px 0;
  }
`;

const StyledLi = styled.li<{ completed: boolean }>(
  ({ completed }) => css`
    text-decoration: ${completed ? "line-through" : ""};
  `
);

const StyledButton = styled.button`
  display: flex;
  &:hover {
    border: 1px solid #66fcf1;
  }
`;

const StyledTodoItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  margin-bottom: 8px;
  background-color: #1f2833;
`;

const StyledList = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 16px;
`;

export { Main };
