import React from 'react'
// import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import NewsLetter from '../Components/NewsLetter'
import Products from '../Components/Products'
import Silder from '../Components/Silder'

const Home = () => {
    return (
        <>
            {/* <Announcement/> */}
            <Nav />
            <Silder/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
            {/* <div>Home</div> */}
        </>
    )
}

export default Home