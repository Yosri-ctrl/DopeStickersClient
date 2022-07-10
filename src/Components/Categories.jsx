import React from 'react'
import styled from 'styled-components'
import { category } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between; 
    background-color: #151719;

    ${mobile({
       padding: "10px",
       flexDirection: "column"
    })}
`
const Categories = () => {
    return (
        <Container>
            {category.map(item => (
                // <div>
                <CategoryItem item={item} key={item.id}/>
                // <h1>{item.title}</h1>
                // </div>
            ))}
        </Container>
    )
}

export default Categories