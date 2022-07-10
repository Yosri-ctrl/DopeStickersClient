import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #151719;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none",
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  :hover{
    background-color: #f4b4b4;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;

  /* padding-top:-${(props) => props.slideI}px; */
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideI * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
  background-color: #151719;
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 5vw; // <-----
`;
const Img = styled.img`
  height: 80%;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 72px;
  color: #e69696;
`;
const Desc = styled.p`
  margin: 50px 40px 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #e8eaf6;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  color: #e8eaf6;
  cursor: pointer;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  :hover {
    background-color: #e69696;
    color: black;
  }
`;

const Silder = () => {
  const [slideI, setSlide] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slideI > 0 ? slideI - 1 : 2);
    } else {
      setSlide(slideI < 2 ? slideI + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Wrapper slideI={slideI}>
        {slideItems.map((item) => (
          <Slide key={item.id}>
            <ImgCont>
              <Img src="https://images.vexels.com/media/users/3/229836/isolated/preview/8c75cf1363bc6eb456ef39b090c34c90-i-feel-nothing-sticker.png" key={item.id} />
            </ImgCont>
            <InfoCont>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show now</Button>
            </InfoCont>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Silder;
