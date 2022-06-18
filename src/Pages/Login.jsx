import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5)), url("https://wallpaperaccess.com/full/914158.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;

    ${mobile({
        width: "80vw"
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
` 
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>Sign In</Button>
                <Link>Forgot Password</Link>
                <Link>Create Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login