import React from 'react'
import PropTypes from 'prop-types'
import AddressItem from './AddressItem'
const Address = props => {
  
  const object = {name : "Le Tuan Anh",company :"UIT",addressHome:"ktx khu b",city:"HCM city"}
  return (
    <div className="address">
        <div className="address__title">
            <span>Các địa chỉ bên dưới mặc định sẽ được sử dụng ở trang thanh toán sản phẩm.</span>
        </div>
        <div className="address__list">
            
                <div className="address__list__item">
                    <AddressItem
                        name='thanh toán'
                        link="component-thanh-toan"
                        Item= {object}
                    />
                </div>
                <div className="address__list__item">
                    <AddressItem
                      name='giao hàng'
                      link="component-giao-hang"
                      Item= {object}
                    />
                </div>
            
        </div>        
    </div>
    )
}

Address.propTypes = {}

export default Address