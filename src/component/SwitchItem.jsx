import React from 'react'
import PropTypes from 'prop-types'
import Address from './Address'
import Order from './Order'
import HomeUser from './HomeUser'
import InfoUser from './InfoUser'
import AddressDelivery from './AddressDelivery'
import AddressPayment from './AddressPayment'
const SwitchItem = props => {
    const nameItem = props.match.params.item  
    
    const url = props.match.url
    const UserName = url.slice(6,url.lastIndexOf('/'))
    
    if(nameItem==="don-hang") {
        return (<Order/>)
    }
    else if(nameItem==="dia-chi"){
        return (<Address/>)
    }
    else if(nameItem==="thong-tin-tai-khoan"){
        return (<InfoUser/>)
    }
    else if(nameItem==="thanh-toan"){
        return (<AddressPayment/>)
    }
    else if(nameItem==="giao-hang"){
        return (<AddressDelivery/>)
    }
    else if(nameItem==="bang-dieu-khien"){
        return (
            <HomeUser nameUser={UserName}/>
        )
    }
    else{
        return (<HomeUser/>)
    }
    
  
}

SwitchItem.propTypes = {
    
}

export default SwitchItem