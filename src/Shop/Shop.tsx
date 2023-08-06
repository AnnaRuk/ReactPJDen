import React, { useEffect, useState } from 'react'
import ProductPage from '../ProductPage/ProductPage';
import { useParams } from 'react-router-dom';


interface Product{
  id:number,
  title:string,
  price:number,
  category:string,
  description:string,
  image:string,
  rating:Rating
}

interface Rating{
  rate:number,
  count:number
}

interface ProductData{
    products:Product[],
}


const url = 'https://fakestoreapi.com/products';

export default function Shop():JSX.Element {

  const init:ProductData = {products:[]} ;

  const[arrayProducts, setArrayProducts] = useState<ProductData>(init)

  async function getProducts():Promise<void>{
    const res = await fetch(url);
    const arr:Product[] = await res.json();
    setArrayProducts({...arrayProducts, products:arr});
   

  }

  useEffect(()=>{getProducts()},[])


function productHandler(){
  const{products}=arrayProducts;
  return products.map((product)=>(
   <li className='product'>
      <span className='product'>ID {product.id},</span>
      <span className='product'>TITLE: {product.title}</span>
      <span className='product'>PRICE: {product.price}</span>
   </li>
  )
  )
}

const{productId} = useParams();
console.log(arrayProducts.products.length)



  return (
    <div>

        <h1>Shop_Shop</h1>
        
        <ul className='product'>
            {productHandler()}
        </ul>


   <div>PAGE</div>
<ProductPage products={arrayProducts.products} index={Number(productId)} />


    </div>
    
  );
}
