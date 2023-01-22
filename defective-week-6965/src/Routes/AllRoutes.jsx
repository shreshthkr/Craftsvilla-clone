import React from 'react';
import {Routes,Route} from "react-router-dom";
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import HomeDecor from '../Pages/HomeDecor';
import ProductDetail from '../Pages/ProductDetail';
import ProductsNearMe from '../Pages/ProductsNearMe';
import WishList from '../Pages/WishList';
import NearMeProductDetail from '../Pages/NearMeProductDetail';
import Checkout from '../Pages/Checkout';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home-decor" element={<HomeDecor />} />
        <Route path="/products-near-me" element={<ProductsNearMe />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/home-decor/:id" element={<ProductDetail />} />
        <Route path="/products-near-me/:id" element={<NearMeProductDetail />} />
    </Routes>
  )
}

export default AllRoutes