import React from "react";
import styled from "styled-components";
// import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#453e7a",
    },
    secondary: {
      main: "#f4b4b4",
    },
    icon: {
      main: "#8993cf",
    },
  },
});

const Container = styled.div`
  height: 60px;
  background-color: #151719;
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
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   /* background-color: red; */

//   ${mobile({
//     display: "none",
//   })}
// `;
// const SearchContainr = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;
// const Input = styled.input`
//   border: none;
//   ${mobile({
//     width: "50px",
//     paddingLeft: "0px",
//   })}
// `;

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
  cursor: pointer;
  margin-left: 25px;
  font-size: 20px;

  ${mobile({
    fontSize: "14px",
    marginLeft: "15px",
    marginTop: "5px",
  })}
`;

const Logo = styled.h1`
  background: -webkit-linear-gradient(#403979, #f4b4b4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  ${mobile({
    fontSize: "20px",
    paddingLeft: "20px",
  })}
`;

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);

  const linkStyle = {
    textDecoration: "none",
    color: "#CDCECE",
    display: user ? "none" : "block",
  };
  const linkStyleInv = {
    textDecoration: "none",
    color: "#CDCECE",
    display: user ? "block" : "none",
    cursor: "context-menu"
  };
  return (
    <Container>
      <Wraper>
        <Left>
          {/* <Language>EN</Language> */}
          {/* <SearchContainr> */}
          {/* <Input placeholder="Search" /> */}
          {/* <Search style={{ color: "gray", fontSize: "16px" }} /> */}
          {/* </SearchContainr> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>DopeStickers</Logo>
          </Link>
        </Left>
        {/* <Center></Center> */}
        <Right>
          <MenuItem>
            <Link style={linkStyle} to="/register">
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={linkStyle} to="/login">
              Sign In
            </Link>
          </MenuItem>
          <MenuItem style={linkStyleInv}>Hello {user?.username}</MenuItem>
          <MenuItem style={linkStyleInv}>LOGOUT</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <ThemeProvider theme={theme}>
                <Badge badgeContent={cart.quantity} color="primary">
                  <ShoppingCartOutlinedIcon color="secondary" />
                </Badge>
              </ThemeProvider>
            </MenuItem>
          </Link>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Nav;
