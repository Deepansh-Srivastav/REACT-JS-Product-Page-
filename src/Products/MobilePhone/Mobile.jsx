
import Navbar from '../Navbar/Navbar'
import MobileItem from './MobileItem'
import "../LaptopPage/LaptopItem.css"


let mobile = [
    {
        name: 'Samsung Galaxy S23 Ultra 5G (Cream, 12GB, 256GB Storage)',
        point:'5.0',
        rating : "⭐⭐⭐⭐⭐",
        price : "₹ 1,24,999",
        image:"https://m.media-amazon.com/images/I/61j99uUfXNL._AC_UY327_FMwebp_QL65_.jpg",
        width : '200px'
    },

    {
        name: 'Apple iPhone 14 Pro Max (256 GB) - Deep Purple',
        point:'3.0',
        rating : "⭐⭐⭐",
        price : "₹ 1,43,990",
        image:"https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg",
        width : '170px'
    },

    {
        name: 'Google Pixel 7 Pro (Obsidian, 128 GB)  (12 GB RAM)',
        point:'4.0',
        rating : "⭐⭐⭐⭐",
        price : "₹ 75,891",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
        width : '300px'
    }
]

const Mobile = () => {
    return (
        <>
            <Navbar />
            <div className='product-container'>
                <MobileItem item = {mobile[0]}/>
                <MobileItem item = {mobile[1]}/>
                <MobileItem item = {mobile[2]}/>

            </div>
        </>
    )
}

export default Mobile
