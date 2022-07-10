import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { mobile } from "../Responsive";
import StripeCheckout from "react-stripe-checkout";
import { userReq } from "../reqMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  background-color: #151719;
`;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  color: #e8eaf6;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${mobile({
    padding: "10px",
  })}
`;
// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;
// const TopTexts = styled.div`
//   display: flex;
//   ${mobile({
//     display: "none",
//   })}
// `;
// const TopText = styled.div`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0 10px;
// `;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #f4b4b4;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-bottom: 20px;
  width: 60vw;
  color: #000;
  background-color: #c6cfda;

  border-radius: 20px;
  ${mobile({
    flexDirection: "column",
    // padding: "5px",
    width: "88%",
    padding: "20px 20px 0 20px",
    "margin-left": "0px",
  })}
`;
const ProcutDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Img = styled.img`
  width: 200px;
  ${mobile({
    width: "35vw",
  })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
const ProductId = styled.span`
  ${mobile({
    fontSize: "9px",
  })}
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "0px 20px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    "margin-bottom": "10px",
  })}
`;
const TitleSummery = styled.h1`
  font-weight: 200;
  color: #e8eaf6;
`;
const SummeryItem = styled.div`
  margin: 4vh 0;
  display: flex;
  color: #e8eaf6;
  justify-content: space-between;
  font-size: ${(props) => props.total === "total" && "24px"};
  font-weight: ${(props) => props.total === "total" && "500"};
`;
const SummeryItemText = styled.span`
  margin: 0;
`;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  border: 1px solid #f4b4b4;
  border-radius: 10px;
  background: transparent;
  color: #e8eaf6;
  font-family: sans;
  font-size: 15px;
  :hover {
    background-color: #f4b4b4;
    color: black;
  }
`;

const KEY = process.env.REACT_APP_STRIPE_KEY;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [stripeK, setStripeK] = useState(null);
  const onToken = (token) => {
    setStripeK(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userReq.post("/stripe/payment", {
          tokenId: stripeK.id,
          amount: cart.totale * 100,
        });
        navigate("/success", { data: res.data });
      } catch (err) {
        console.log(err.response);
      }
    };
    stripeK && cart.totale >= 1 && makeReq();
  }, [stripeK, cart.totale, navigate]);

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          {/* <TopButton>Continue Shoping</TopButton>
          <TopTexts>
            <TopText>Shoping Bag (2)</TopText>
            <TopText>Wishlist (5)</TopText>
          </TopTexts>
          <TopButton type="filled">Check Out</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            {cart.product?.map((product) => (
              <Product key={product._id}>
                <ProcutDetail>
                  <Img src={product.img} />
                  <Details>
                    <ProductName>{product.title.toUpperCase()}</ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProcutDetail>
                <PriceDetail>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                  <ProductAmountCont>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountCont>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <TitleSummery>Order Summery</TitleSummery>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ {cart.totale}</SummeryItemPrice>
            </SummeryItem>
            {/* <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 0</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>$ 0</SummeryItemPrice>
            </SummeryItem> */}
            <SummeryItem total="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ {cart.totale}</SummeryItemPrice>
            </SummeryItem>
            <StripeCheckout
              name="DopeSticker"
              image=""
              // billingAddress
              // shippingAddress
              description={`Your total is $ ${cart.totale}`}
              amount={cart.totale * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CheckOut Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
