import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ProductViewModel from './ProductViewModel'
import Router from '../routers/Router'

const Layout = () => {  
    
  return (
    <BrowserRouter>
        <Route render={props =>(
            <div>
                <Header {...props}/>
                <div className='container'>                    
                    <div className='main'>
                        <Router/>
                    </div>
                </div>
                <Footer/>
                <ProductViewModel/>
            </div>
        )}/>
    </BrowserRouter>
  )
}

export default Layout