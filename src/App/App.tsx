import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import ErrorPage from '../ErrorPage/ErrorPage';
import Users from '../Users/Users';
import UserPage from '../UserPage/UserPage';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/'element={<Layout/>}/>
      {/* TODO */}
      {/* <Route index element={<Home/>}/> */}
      {/* <Route path='products'element={<Shop/>}/> */}
      <Route path='products/:productId' element={<Shop/>}/>
      <Route path='products' element={<Shop/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='users/:userId' element={<UserPage/>}/>
      <Route path='*'element={<ErrorPage/>}/>
 
      
    </Routes>
  );
}

export default App;