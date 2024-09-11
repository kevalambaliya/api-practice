import React, { useEffect, useState } from 'react'

const Products = () => {
    let [data,setData]=useState([]);
    const getdata = async () => {
        let req = await fetch("https://fakestoreapi.com/products");
        let res = await req.json();
        console.log(res);
        setData(res);  
    };
    useEffect(()=>{
        getdata();
    })
  return (
    <div>
      {data.map((ele)=>(
        <div>
            <h2>{ele.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Products
