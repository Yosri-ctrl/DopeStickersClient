import "./Product.css";
import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import NewsLetter from "../Components/NewsLetter";
import { publicReq } from "../reqMethods";
import { mobile } from "../Responsive";
import { addProductToCart } from "../Redux/reduxCart";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #151719;

  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;

  ${mobile({
    height: "50vh",
  })}
`;
const Infocontainer = styled.div`
  flex: 1;
  margin-top: 70px;
  padding: 50px 50px 0 50px;
  height: 50vh;
  background-color: #e8eaf6;
  border-radius: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 500;
  font-family: sans;
  font-size: 40px;
  color: #151719;
`;
const Desc = styled.p`
  margin: 20px 0;
  color: #151719;
  font-size: 20px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  display: flex;
  float: right;
  color: #151719;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: #151719;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  background: transparent;
  color: #151719;
  font-family: sans;
  font-size: 15px;
  :hover {
    background-color: #f4b4b4;
    color: black;
  }
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  margin: 10px;
  color: #151719;
`;
const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  background: transparent;
  color: #151719;
  font-family: sans;
  font-size: 15px;
  :hover {
    background-color: #f4b4b4;
    color: black;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);
  // console.log(product);

  const addProduct = (sign) => {
    sign === "+"
      ? setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };

  const handelSubmit = () => {
    dispatch(addProductToCart({ ...product, quantity, color, size }));
    // dispatch({ type: "" });
  };

  // console.log(color, size);
  return (
    <Container>
      {/* <Announcement /> */}
      <Nav />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <Infocontainer>
          <Price>$ {product.price}</Price>
          <Title>{product.title?.toUpperCase()}</Title>
          <Desc>{product.desc}</Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s} onClick={() => setSize(s)}>
                    {s}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove className="button" onClick={() => addProduct("-")} />
              <Amount>{quantity}</Amount>
              <Add className="button" onClick={() => addProduct("+")} />
            </AmountContainer>
            <Button onClick={() => handelSubmit()}>Add to Cart</Button>
          </AddContainer>
        </Infocontainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
