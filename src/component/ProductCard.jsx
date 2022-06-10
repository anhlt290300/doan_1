import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import { useDispatch } from 'react-redux'
import { set} from '../redux/product-modal/productModalSlice'
import numberWithCommas from '../utils/numberWithCommas.js'
const ProductCard = props => {
    const dispatch = useDispatch()
    /* console.log("abc" + props.catalog) */
    
  return (
    <div className="product-card">
        <Link to={props.catalog ===true ? `/catalog/${props.slug}` : `/accessories/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt=""/>
                    <img src={props.img02} alt=""/>
                </div>
                <h3 className="product-card__name">
                    {props.name}    
                </h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price)}
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}</del>
                    </span>    
                </div>
        </Link>  
        <div className="product-card__btn">
            <Button
                size='sm'
                icon='bx bx-cart'
                animate={true}
                onClick={()=>dispatch(set(props.slug))}
            >
                chọn mua   
            </Button>    
        </div>  
    </div>
  )
}

ProductCard.propTypes = {
    img01:PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    catalog: PropTypes.bool
}

export default ProductCard