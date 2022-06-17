import React from 'react'
import styled from 'styled-components'
import { category } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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