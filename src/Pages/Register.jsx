import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 0, 255, 0.5), rgba(0, 255, 255, 0.5)),
    url("https://wallpaperaccess.com/full/914158.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #e8eaf6;
  border-radius: 20px;
  ${mobile({
    width: "80vw",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border: 0.5px solid #f4b4b4;
  border-radius: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 25px;
  cursor: pointer;
  background-color: transparent;
  color: #151719;
  cursor: pointer;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  :hover {
    background-color: #e69696;
    color: black;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
