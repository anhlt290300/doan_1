import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import accessoriesData from '../assets/fake-data/bags'
import Helmet from '../component/Helmet'
import numberWithCommas from '../utils/numberWithCommas'
import Button from '../component/Button'
import { Link } from 'react-router-dom'
import CartItem from '../component/CartItem'
const Cart = () => {
  const cartItems = useSelector((state)=>state.cartItems.value)
  console.log(cartItems)

  const [cartProduct,setCartProduct] = useState(productData.getCartItemsDetail(cartItems))
  
  const [totalProducs, setTotalProducts] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect(()=>{
    setCartProduct(productData.getCartItemsDetail(cartItems))
    setTotalProducts(cartItems.reduce((total,item)=> total + Number(item.quantity),0))
    setTotalPrice(cartItems.reduce((total,item)=> total + Number(item.quantity)*Number(item.price),0))
  },[cartItems])
  //console.log(cartProduct);
  return (
    <Helmet title='giỏ hàng'>
        <div className="cart">
            <div className="cart__info">
                <div className="cart__info__txt">
                    <p>
                        Ban dang co {totalProducs} san pham trong gio hang
                    </p>
                    <div className="cart__info__txt__price">
                        <span>Thanh tien</span>
                        <span>{numberWithCommas(totalPrice)}</span>
                    </div>
                </div>
                <div className="cart__info__btn">
                  <Button size='block'>
                    dat hang
                  </Button>
                  <Link to="/catalog">
                      <Button size='block'>
                        Tiep tuc mua hang
                      </Button>
                  </Link>
                </div>
            </div>
            <div className="cart__list">
              {
                cartProduct.map((item,index)=>(
                  <CartItem item ={item} key={index}>
                      
                  </CartItem  >
                  ))
              }
            </div>
        </div>
    </Helmet>
  )
}

export default Cart