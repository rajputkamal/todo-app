import styled from "styled-components";
import { LuListTodo } from "react-icons/lu";
import { IoSettingsOutline, IoSearch } from "react-icons/io5";
import { Avatar } from "./Avatar";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <LuListTodo style={{ scale: "1.8" }} /> To Do
      </StyledLogo>
      <StyledInputContainer>
        <IoSearch style={{ scale: "1.4", fill: '#66FCF1' }} />
        <input type="search" placeholder="search" />
      </StyledInputContainer>
      <StyledUserWrapper>
        <div>
          <IoSettingsOutline style={{ scale: "1.5", marginTop: "5px" }} />
        </div>
        <div>John Doe</div>
        <Avatar />
      </StyledUserWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #1f2833;
  /* border-bottom: 1px solid #c5c6c7; */
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 600px;
  min-width: 300px;
  background-color: #0b0c10;
  padding-left: 12px;

  & input {
    display: flex;
    width: 100%;
    padding: 12px;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    &:focus {
      &::placeholder {
        visibility: visible;
      }
    }
    &::placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
      font-size: 18px;
      text-transform: capitalize;
      visibility: hidden;
    }
  }
`;

const StyledUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;

export { Header };
