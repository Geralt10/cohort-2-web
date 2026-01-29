import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
import { getData } from '../api/ProductApi';
export const ProductDataContext = createContext();
const ProductContext = ({children}) => {
     const [productData,setProductData]=useState([]);
  const setData = async()=>{
    const data = await getData();
    setProductData(data);
  }
  useEffect(()=>{
    setData();
  },[]);
  return (
    
      <ProductDataContext.Provider value={productData}>
       {children}
      </ProductDataContext.Provider>
    
  )
}

export default ProductContext
