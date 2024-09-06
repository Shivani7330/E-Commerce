import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product';


const ProductDisplay = () => {
    const {productId} = useParams()
    const [size, setSize] = useState('S');
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        const searchedProduct = all_product.find(p=> p.id.toString() === productId)
        if(searchedProduct) setProduct(searchedProduct)
    },[productId])
    const {addToCart}=useContext(ShopContext);
  return (
    <>
    {!product? <h2>Loading...</h2>:
    (<div className='productdisplay'>
      <div className="productdisplay-left">
       <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
       </div>
       <div className="productdisplay-img">
        <img  className='productdisplay-main-img'src={product.image} alt="" />
       </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually, pullover shirt. close-fitting and with a round neckline and short sleeves, worn as an undershirt.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div onClick={()=>setSize('S')} className={size === 'S'?'product-active':'product-inactive'}>S</div>
                <div onClick={()=>setSize('M')} className={size === 'M'?'product-active':'product-inactive'}>M</div>
                <div onClick={()=>setSize('L')} className={size === 'L'?'product-active':'product-inactive'}>L</div>
                <div onClick={()=>setSize('XL')} className={size === 'XL'?'product-active':'product-inactive'}>XL</div>
                <div onClick={()=>setSize('XXL')} className={size === 'XXL'?'product-active':'product-inactive'}>XXL</div>
            </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category : </span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest </p>
      
      </div>
    </div>)}
    </>
  )
}

export default ProductDisplay;
