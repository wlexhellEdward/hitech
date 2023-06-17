import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoute, authRoutes } from '../routes'
import AuthRoute from './AuthRoute'
import Favorites from '../pages/Favorites'
import BasketRoute from '../pages/BasketRoute'
import Confirm from './Basket/Confirm'
import ProductsBasket from './Basket/ProductsBasket'
import MakingAnOrder from './Basket/MakingAnOrder'
import PagesNotFound from '../pages/PagesNotFound'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Index from '../pages/Index'








function AppRouter({ HandlePlusCountProduct,
    productsBasket, HandleMinusCountProduct,
    totalPrice, FavoriteItems,
    handleAddToBasketFromFavorites,
    handleDeleteFromFavorites ,
    HandleDeleteProduct, AllProducts,
    handleToBasket, handleToFavorite, }) {

    return (


        <Routes>
            {PublicRoute.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/basket" element={<BasketRoute />}> 
                <Route path='ProductsBasket' element={<ProductsBasket
                    productsBasket={productsBasket}
                    HandleMinusCountProduct={HandleMinusCountProduct}
                    HandlePlusCountProduct={HandlePlusCountProduct}
                    HandleDeleteProduct={HandleDeleteProduct}
                    totalPrice={totalPrice} />} />
                <Route path='MakingAnOrder' element={<MakingAnOrder productBasket={productsBasket} />} />
                <Route path='Confirm' element={<Confirm productBasket={productsBasket}  />} />
            </Route>
            <Route path='/' element={<Index hitsProduct={AllProducts.slice(0,4)} handleToBasket={handleToBasket} handleToFavorite={handleToFavorite} />} />
            <Route path='/favorites/:id' element={<Favorites FavoriteItems={FavoriteItems} handleAddToBasketFromFavorites={handleAddToBasketFromFavorites} handleDeleteFromFavorites={handleDeleteFromFavorites} />} />
            <Route path='/catalog' element={<Catalog AllProducts={AllProducts} handleToBasket={handleToBasket} handleToFavorite={handleToFavorite} />} />


            <Route path="/product/:id" element={<Product hitsProduct={AllProducts.slice(0,4)} handleToBasket={handleToBasket} handleToFavorite={handleToFavorite} allProduct={AllProducts} />} />

            <Route element={<AuthRoute />}>
                {authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>

            <Route path='*' element={<PagesNotFound />} />
        </Routes>

    )
}

export default AppRouter