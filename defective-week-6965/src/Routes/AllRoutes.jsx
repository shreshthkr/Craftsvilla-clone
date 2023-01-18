import React from 'react';
import {Routes,Route} from "react-router-dom";
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import HomeDecor from '../Pages/HomeDecor';
import ProductsNearMe from '../Pages/ProductsNearMe';
import WishList from '../Pages/WishList';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home-decor" element={<HomeDecor />} />
        <Route path="/products-near-me" element={<ProductsNearMe />} />

    </Routes>
  )
}

export default AllRoutes