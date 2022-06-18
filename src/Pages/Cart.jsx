import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { mobile } from '../Responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    text-align: center;

`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    ${mobile({
        padding: "10px"
    })}
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    display: flex;
    ${mobile({
        display: "none"
    })}
`
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const Info = styled.div`
    flex: 3;
`

const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column",
        padding: "5px"
    })}
`
const ProcutDetail = styled.div`
    flex: 2;
    display: flex;
`
const Img = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   
`
const ProductAmountCont = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({
        margin: "10px 20px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

     ${mobile({
        "margin-bottom": "10px"
    })}
`
const TitleSummery = styled.h1`
    font-weight: 200;
`
const SummeryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.total === "total" && "24px"};
    font-weight: ${props=>props.total === "total" && "500"};
`
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    font-weight: 600;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Nav />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shoping</TopButton>
                    <TopTexts>
                        <TopText>Shoping Bag (2)</TopText>
                        <TopText>Wishlist (5)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check Out</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProcutDetail>
                                <Img src="https://mystickermania.com/cdn/stickers/anime/child-monkey-d-luffy-512x512.png" />
                                <Details>
                                    <ProductName><b>Luffy Sticker</b></ProductName>
                                    <ProductId><b>ID:</b> 987654321</ProductId>
                                    <ProductColor color="blue" />
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                </Details>
                            </ProcutDetail>
                            <PriceDetail>
                                <ProductAmountCont>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountCont>
                                <ProductPrice>$20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <HR />
                        <Product>
                            <ProcutDetail>
                                <Img src="https://www.pngmart.com/files/13/Luffy-PNG-Transparent-HD-Photo.png" />
                                <Details>
                                    <ProductName><b>Luffy Sticker</b></ProductName>
                                    <ProductId><b>ID:</b> 987654321</ProductId>
                                    <ProductColor color="red" />
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                </Details>
                            </ProcutDetail>
                            <PriceDetail>
                                <ProductAmountCont>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountCont>
                                <ProductPrice>$10</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <TitleSummery>Order Summery</TitleSummery>
                        <SummeryItem>
                            <SummeryItemText>Subtotal</SummeryItemText>
                            <SummeryItemPrice>$30</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <SummeryItemText>Estimated Shipping</SummeryItemText>
                            <SummeryItemPrice>$5.5</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <SummeryItemText>Shipping Discount</SummeryItemText>
                            <SummeryItemPrice>$-5.5</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem total="total">
                            <SummeryItemText>Total</SummeryItemText>
                            <SummeryItemPrice>$30</SummeryItemPrice>
                        </SummeryItem>
                        <Button>CheckOut Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart