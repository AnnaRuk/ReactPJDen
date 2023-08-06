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

// const{products,index} = props;

const products = props.products;
const index = props.index;
console.log(products);

return(
  <div>
<h1>{products[index].title}</h1>


  </div>
);

}

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

