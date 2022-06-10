import React, { useEffect, useState } from 'react'
import productData from '../assets/fake-data/products'
import ProductView from './ProductView'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/product-modal/productModalSlice'
const ProductViewModel = props => {
  
    //const product = productData.getProductsBySlug('quan-jean-phong-cach-18');
    
    const productSlug = useSelector((state)=>state.productModal.value)
    /* console.log(productSlug) */
    const dispatch = useDispatch()

    const [product,setProduct] = useState(undefined)

    useEffect(()=>{
        setProduct(productData.getProductsBySlug(productSlug))
    },[productSlug])
    
    
    return (
      
    <div className={`product-view__modal ${product===undefined ? '' :'active'}`}>
        <div className="product-view__modal__content">
            <ProductView product={product}>

            </ProductView>
            <div className="product-view__modal__content__close">
                <Button size='sm'
                   onClick={() => dispatch(remove())}
                >Dong</Button>
            </div>
        </div>
    </div>
  )
}



export default ProductViewModel