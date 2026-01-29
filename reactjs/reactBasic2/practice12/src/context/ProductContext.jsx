import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
export const ProductDataContext = createContext();
const ProductContext = ({children}) => {
     const [productData,setProductData]=useState([]);
  const getData = async()=>{
    const response =await axios.get('https://fakestoreapi.com/products');
    
    
    setProductData(response.data);
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    
      <ProductDataContext.Provider value={productData}>
       {children}
      </ProductDataContext.Provider>
    
  )
}

export default ProductContext
