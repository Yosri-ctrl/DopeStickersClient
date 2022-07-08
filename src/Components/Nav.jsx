import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "10px 0",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  /* background-color: red; */

  ${mobile({
    display: "none",
  })}
`;
const SearchContainr = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
    paddingLeft: "0px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: "2",
    "justify-content": "center",
  })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "16px",
    paddingLeft: "5px",
  })}
`;

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainr>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainr>
        </Left>
        <Center>
          <Logo>DopeStickers</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/register"
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              Sign In
            </Link>
          </MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Nav;
