import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: "35vh",
  })}
  border-radius: 20px;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// const Title = styled.h1`
//   color: white;
//   margin-bottom: 20px;
//   /* -webkit-text-stroke: 1px black; width and color */
//   font-family: sans;
//   /* background-color: rgba(0,0,0,0.5); */
// `;
const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  font-family: sans;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0.5);
  color: #e8eaf6;
  cursor: pointer;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  :hover {
    background-color: #e69696;
    color: black;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/productlist/${item.cat}`}>
        <Img src={item.img} />
        <Info>
          {/* <Title>{item.title}</Title> */}
          <Button>{item.title}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
