import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import NewsLetter from '../Components/NewsLetter'
import Products from '../Components/Products'
import { mobile } from '../Responsive'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const Filter = styled.div`
    margin: 20px;
`
const FillterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
         padding: "5px"
    })}
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Nav />

            <Title>Stickers</Title>
            <FilterContainer>
                <Filter>
                    <FillterText>Filter stickers:</FillterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FillterText>Sort stickers:</FillterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList