

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
type Name = {
    firstname:string,
    lastname:string;
}

type Geolocation = {
    lat:string,
    long:string
}

   interface Address {
    city:string,
    long:string,
    street:string,
    number:number,
    zipcode:string,
    geolocation:Geolocation
}

interface User{

    id:number,
    email:string,
    username:string,
    password:string,
    name:Name,
    address:Address,
    phone:string
}



export default function UserPage():JSX.Element {
  
    const {userId} = useParams();

const init:User = {
    id:0,
    email:"",
    username:"",
    password:"",
    name:
    {firstname:"",
        lastname:""},

    address:{city:"",
        long:"",
        street:"",
        number:0,
        zipcode:"",
        geolocation:{lat:"",
            long:""}},
    phone:""

}
    
const [user, setUser] = useState<User>(init);
   async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }

  useEffect(() => { loadProduct();}, [userId]);
  
    return (
    <div>UserPage {userId}
    <h2>{user.username}</h2>
    <div>{user.email}</div>
    <div>{user.phone}</div>
    <p>{user.name.firstname} {user.name.lastname}</p>
    <p>{user.address.city} {user.address.street} {user.address.number}</p>
    <p>{user.password}</p>



     <Link to="/users"> Back</Link>
    </div>
   
  );
}



