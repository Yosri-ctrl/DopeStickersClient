import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5)),
    url("https://wallpaperaccess.com/full/914158.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #e8eaf6;
  /* border: 0.5px solid #f4b4b4; */
  border-radius: 20px;
  ${mobile({
    width: "80vw",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #151719;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid #f4b4b4;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 5px 20px;
  background-color: transparent;
  color: #151719;
  cursor: pointer;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  :hover {
    background-color: #e69696;
    color: black;
  }
  &:disabled {
    background-color: red;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-decoration: none;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handelLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Bottom>
            <Button onClick={handelLogin} disabled={isFetching}>
              Sign In
            </Button>
            <Links>
              <Link>Forgot Password</Link>
              <Link>
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Create Account
                </NavLink>
              </Link>
            </Links>
          </Bottom>
          {error && <Error>Somthing is wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
