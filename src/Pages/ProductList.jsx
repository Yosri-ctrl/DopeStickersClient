import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
    const location = useLocation();
    const cate = location.pathname.split('/')[2]

    const [filter, setFilter] = useState({});
    const handelFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value,
        })
    }
    const [sort, setSort] = useState('newest');
    const handleSort = (e) => {
        setSort(e.target.value)
    }

    return (
        <Container>
            <Announcement />
            <Nav />

            <Title>{cate}</Title>
            <FilterContainer>
                <Filter>
                    <FillterText>Filter stickers:</FillterText>
                    <Select name="color" onChange={handelFilter}>
                        <Option disabled defaultValue>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handelFilter}>
                        <Option disabled defaultValue>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FillterText>Sort stickers:</FillterText>
                    <Select name="sort" onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="priceasc">Price (asc)</Option>
                        <Option value="pricedesc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cate={cate} filter={filter} sort={sort}/>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList