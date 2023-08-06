import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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

export default function Users():JSX.Element {

    const[users,setUsers] = useState<User[]>([])

    async function loadUsers():Promise<void> {
        const res = await fetch('https://fakestoreapi.com/users');
        const arr = await res.json();
        setUsers(arr);
        console.log(arr);
    }

    useEffect(()=>{loadUsers()},[]);
    
    function handleUsers(){
    return users.map((user)=>(
    <li> User {user.username} <Link to={String(user.id)}> Show users information</Link></li>

    ))
    }



  return (
    <div>
    <h2>Users</h2>

    <ul>
     {handleUsers()}

    </ul>



    </div>



  );
  }