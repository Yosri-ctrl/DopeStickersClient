import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit :cover;
    
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    -webkit-text-stroke: 1px black; /* width and color */
    font-family: sans;
`
const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    font-weight: 600;
`
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem