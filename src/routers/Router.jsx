import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login'
import User from '../pages/User';
import  About from '../pages/About';
import HelpCustomer from '../pages/HelpCustomer';
function Router() {
  return (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/catalog/:slug'  component={Product}/>
        <Route path='/accessories/:slug'  component={Product}/>
        <Route path='/catalog' exact component={Catalog}/>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/accessories' exact component={Accessories}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/user-:name'  component={User}/>  
        <Route path='/about-:name' component={About}/>
        <Route path='/ho-tro-khach-hang/:name' component={HelpCustomer}/>
    </Switch>
  )
}

export default Router