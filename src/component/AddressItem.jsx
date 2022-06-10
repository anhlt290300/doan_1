import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const AddressItem = props => {
    const nameItem = props.name
    const Item = props.Item
    const link = props.link
    //const path = props.match.url
    //console.log(path)
    //console.log(Item)
  return (
    <div className="addressItem">
        <div className="addressItem__title">Địa chỉ {nameItem}</div>
        <span className="addressItem__link">
            <Link to={`${link}`} >Sửa</Link>
        </span>
        <div className="addressItem__object">            
            {(Item.name!="") ? <span className="addressItem__object__item">{Item.name}</span> : ``  }          
            {    (Item.company!="") ? <span className="addressItem__object__item">{Item.company}</span> : ``}
            {    (Item.addressHome!="") ? <span className="addressItem__object__item">{Item.addressHome}</span> : ``}
            {    (Item.city!="") ? <span className="addressItem__object__item">{Item.city}</span> : ``          } 
        </div>
        
    </div>
  )
}

AddressItem.propTypes = {
    name: PropTypes.string, 
    link: PropTypes.string,
    Item: PropTypes.object
}

export default AddressItem