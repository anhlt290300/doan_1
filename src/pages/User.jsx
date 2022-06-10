import React from 'react'
import category_user from '../assets/fake-data/category_user'
import Helmet from '../component/Helmet'
import { Link,Switch } from 'react-router-dom'
import Router from '../routers/Router'
import { BrowserRouter, Route } from 'react-router-dom'
import SwitchItem from '../component/SwitchItem'
import Order from '../component/Order'
import Catalog from './Catalog'
import HomeUser from '../component/HomeUser'
const User = props => {
  const name  =  props.history.location.pathname.slice(props.history.location.pathname.indexOf("component")+10)
  const [nameItem,setNameItem] = React.useState('/')
  const url = "user-"+name
  const active = React.useRef('a.user__item__one__category__0')  
  
  console.log()
  console.log()
  /* {console.log(props.match.url)} */
  /* console.log(props.history.location.pathname) */
  return (
    <Helmet title={name}  >
    <div className='user'>
        
        <div className="user__item__one">
            {
              category_user.map((item,index)=>(
                <Link className={`user__item__one__category ${item.categorySlug === name ? 'active' : ''}`}  key={index} to={`component-${item.categorySlug}`}
                 
                >               
                    {item.display}
                    
                </Link>  
              ))
            }
        </div>
        <div className="user__item__two">
          <Switch>
              <Route
                path={`${props.match.url}/component-:item`}                
                component={SwitchItem} >                 
                </Route>
              <Route
                exact
                path={props.match.url}
                component={HomeUser}                
              />
            </Switch>
        </div>
        
    </div>
    </Helmet>
  )
}



export default User