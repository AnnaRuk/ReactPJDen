import { dir } from 'console';
import React from 'react'
import { Navigate } from 'react-router-dom';
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

interface Props{
  products:Product[],
  index:number
}


export default function ProductPage(props:Props):JSX.Element {

const{products,index} = props;

console.log(products);

//0

const currentProduct = products.find((product)=>product.id === index);
if(currentProduct===undefined){

  return(
    <div>ErrroooRRRR</div>
  );

}

return(
  <div>
    Product {index}
<h1>{currentProduct.title}</h1>
<p>{currentProduct.description}</p>
<p>Price:{currentProduct.price} $</p>
<p>Rating: {currentProduct.rating.rate}</p>
<img style={{width:'100px'}} src = {currentProduct.image} alt='pictures'/>


  </div>
);




}


//1
// return(
//   <div>
// <h1>{products[index].title}</h1>


//   </div>
// );

// }


//2
// if(index <= products.length-1){

// }
//   return (
//     <div> Product {index}
//       <h1>{products[index-1].title}</h1>
//       <h2>{products[index-1].price}'$'</h2>
//       <p>{products[index-1].description}</p>
//       <img style={{width:'100px'}} src = {products[index-1].image} alt='pictures'/> 
//     </div>
//   );

  
// }



 //3
// if (index <= products.length-1){
//   return (
//     <div> Product {index}
//       <h1>{products[index-1].title}</h1>
//       <h2>{products[index-1].price}'$'</h2>
//       <p>{products[index-1].description}</p>
//       <img style={{width:'100px'}} src = {products[index-1].image} alt='pictures'/> 
//     </div>
//   );
// } else {
//   return (
//     <div>ErroRRRR</div>
//   );
// }
// }
