import React, { useEffect, useState } from 'react'
import ProductPage from '../ProductPage/ProductPage';
import { Link, useParams } from 'react-router-dom';


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


  const urlShort:string = "http://localhost:3000/products/"


function productHandler(){
  const{products}=arrayProducts;

  return products.map((product)=>(
   <li className='product'>
      <span className='product'>{product.id}. </span>
      <span className='product'>  {product.title}</span>
      <Link to={urlShort+product.id} style={{marginLeft:"20px"}}> Show users information</Link>
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
