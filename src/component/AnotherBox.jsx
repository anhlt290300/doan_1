import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
const AnotherBox = props => {
    const name = props.nameChose
    const data = props.arr    

    return (
        <div className='anotherbox'>
            <div className="anotherbox__item">
                <p>CÁC BÀI VIẾT KHÁC</p>
            </div>
            <div className="anotherbox__item">
                {
                    data[0].map((item,index)=>(
                        <div className="anotherbox__item__content" key={index}>
                            <Link to={(props.keyword==="about") ? `about-${item.link}` : `${item.link}`}>
                                 <i class='bx bx-chevrons-right'></i>
                                {item.title}                                
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

AnotherBox.prototype ={
    nameChose : PropTypes.string.isRequired,
    arr : PropTypes.array.isRequired,
    keyword: PropTypes.string.isRequired
}

export default AnotherBox