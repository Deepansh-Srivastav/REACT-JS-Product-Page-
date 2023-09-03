const HeadphoneItem= ({item}) => {
    return (
      <div className='product'>
  
      <div className='product-image-div'> <img src={item.image} width={item.width} alt= ""  /> </div>
  
      <div className="product-details">
  
          <div className="product-name">
            {item.name}
          </div>
  
          <span style={{color:'black'}}>{item.point}{item.rating}</span>
  
          <div className='price'> {item.price}</div>
  
          <button className='buy-button'>Buy Now</button>
  
      </div>
  </div>
    )
  }
  
  export default HeadphoneItem
  