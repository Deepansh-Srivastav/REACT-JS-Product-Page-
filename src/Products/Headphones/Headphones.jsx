import Navbar from '../Navbar/Navbar'
import HeadphoneItem from './HeadphoneItem'
import "../LaptopPage/LaptopItem.css"


let headphones = [
    {
        name: 'New Apple AirPods Max - Pink',
        point: '4.5',
        rating: "⭐⭐⭐⭐",
        price: "₹ 68,999",
        image: "https://m.media-amazon.com/images/I/81NIpE9-5mL._AC_UY327_FMwebp_QL65_.jpg",
        width: '180px'
    },

    {
        name: 'Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones,8 Mics for Clear Calling,40Hr Battery,3 Min Quick Charge = 3 Hours Playback,Multi Point Connectivity,Alexa - Mid Night Blue',
        point: '4.0',
        rating: "⭐⭐⭐⭐",
        price: "₹ 29,545",
        image: "https://m.media-amazon.com/images/I/51KGPDttQhL._AC_UY327_FMwebp_QL65_.jpg",
        width: '130px'
    },

    {
        name: 'Bose Noise Cancelling 700 Bluetooth Wireless Over Ear Headphones with Mic for Clear Calls & Alexa Enabled and Touch Control, (Black)',
        point: '4.0',
        rating: "⭐⭐⭐⭐",
        price: "₹ 34,700",
        image: "https://m.media-amazon.com/images/I/51oAhmXKzzL._AC_UY327_FMwebp_QL65_.jpg",
        width: '120px'
    }
]

const Headphones = () => {
    return (
        <>
            <Navbar />
            <div className='product-container'>
                <HeadphoneItem item={headphones[0]} />
                <HeadphoneItem item={headphones[1]} />
                <HeadphoneItem item={headphones[2]} />

            </div>
        </>
    )
}

export default Headphones
