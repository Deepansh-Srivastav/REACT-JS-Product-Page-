import React from 'react'
import Navbar from '../Navbar/Navbar'
import LaptopItem from './LaptopItem'

let products = [
    {
        name: 'Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6" (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 Months McAfee/Backlit',
        point:'4.0',
        rating : "⭐⭐⭐⭐",
        price : "₹ 75,990",
        image:"https://m.media-amazon.com/images/I/51rEPuvNYFL._AC_UY327_FMwebp_QL65_.jpg",
        width : '300px'
    },

    {
        name: 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera.',
        point:'3.0',
        rating : "⭐⭐⭐",
        price : "₹ 81,990",
        image:"https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UY327_FMwebp_QL65_.jpg",
        width : '290px'
    },

    {
        name: 'Apple 2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM 256GB SSD storage, backlit keyboard, 1080p FaceTimeHD camera,Touch ID',
        point:'4.0',
        rating : "⭐⭐⭐⭐",
        price : "₹ 1,34,891",
        image:"https://m.media-amazon.com/images/I/81xW62KXNhL._AC_UY327_FMwebp_QL65_.jpg",
        width : '290px'
    }
]



const Laptop = () => {
    return (
        <>
        <Navbar />
        <div className='product-container'>
            <LaptopItem item = {products[0]} />
            <LaptopItem item = {products[1]} />
            <LaptopItem item = {products[2]} />
        </div>
        </>
    )
}

export default Laptop
