import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #3b434b;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  color: #e8eaf6;
`;
const Desc = styled.p`
  margin: 20px 0;
  color: #e8eaf6;
`;
const SocilContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Titel = styled.h3`
  margin-bottom: 30px;
  color: #e8eaf6;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  color: #e8eaf6;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #e8eaf6;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DopeStickers</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercit
        </Desc>
        <SocilContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
        </SocilContainer>
      </Left>
      <Center>
        <Titel>Useful Links</Titel>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Anime</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Games</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Titel>Contact</Titel>
        <ContactItem>
          <LocationOn style={{ paddingRight: "10px" }} /> 99 path, other path
          9999
        </ContactItem>
        <ContactItem>
          <Phone style={{ paddingRight: "10px" }} /> +216111111
        </ContactItem>
        <ContactItem>
          <Email style={{ paddingRight: "10px" }} /> dopesticker@gmail.com
        </ContactItem>
        {/* <AddCard /> */}
      </Right>
    </Container>
  );
};

export default Footer;
