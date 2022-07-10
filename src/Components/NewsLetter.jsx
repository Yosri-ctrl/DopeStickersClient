import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Component = styled.div`
  height: 50vh;
  background-color: #151719;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #fff7f7;

  ${mobile({
    fontSize: "50px",
  })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #fff7f7;
  ${mobile({
    textAlign: "center",
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  /* align-items: center; */
  border-radius: 10px;

  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border-radius: 10px;

  &:focus {
    border: none;
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #e25c5c;
  border-radius: 10px;

  cursor: pointer;
  color: white;
  :hover {
    background-color: #e69696;
  }
`;

const NewsLetter = () => {
  return (
    <Component>
      <Title>News Letter</Title>
      <Desc>Get new updates about our porducts!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Component>
  );
};

export default NewsLetter;
