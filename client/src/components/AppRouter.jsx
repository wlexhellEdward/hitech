import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoute, authRoutes } from '../routes'
import AuthRoute from './AuthRoute'
import { MAIN_ROUTE } from '../utils/const'
import BasketRoute from '../pages/BasketRoute'
import Confirm from './Basket/Confirm'
import ProductsBasket from './Basket/ProductsBasket'
import MakingAnOrder from './Basket/MakingAnOrder'
import PagesNotFound from '../pages/PagesNotFound'
import Product from '../pages/Product'



function AppRouter() {
    const [count, setCount] = useState(0)
    return (
        <Routes>
            { PublicRoute.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} />
            ) }

            <Route path="/basket" Component={BasketRoute}>
                <Route path='ProductsBasket' Component={ProductsBasket} />
                <Route path='MakingAnOrder' Component={MakingAnOrder} />
                <Route path='Confirm' Component={Confirm} />
            </Route>

           <Route path="/product/:id" Component={Product}/>

            <Route element={<AuthRoute/>}>
                { authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} Component={Component} />
                ) } 
            </Route>
            
            <Route path='*' Component={PagesNotFound} />
        </Routes>        
    )
  }
  
  export default AppRouter