import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const FormAddress = props => {
    const name = props.name
  return (
        <form className='formAddress'>
            <div className="formAddress__title">Dia chi {name}</div>
            <div className="formAddress__name">
                <div className="formAddress__name__item">
                        <span>Ho & Ten *</span>
                        <input type="text" placeholder='Nhap ten vao'/>
                </div>
                <div className="formAddress__name__item">
                        <span>Ho *</span>
                        <input type="text" placeholder='Nhap ho vao'/>
                </div>
            </div>
            <div className="formAddress__company">
                <span>Ten cong ty (Tuy chon)</span>
                <input type="text" name="" id="" />
            </div>
            <div className="formAddress__country">
                <span>Quoc gia *</span>
                <input type="text" />
            </div>
            <div className="formAddress__address">
                <span>Dia chi *</span>
                <input type="text" name="" id="" />
            </div>
            <div className="formAddress__city">
                <span>Tinh/Thanh pho</span>
                <input type="text" name="" id="" />
            </div>
            <div className="formAddress__phone">
                <span>So dien thoai *</span>
                <input type="number" name="" id="" />
            </div>
            <div className="formAddress__email">
                <span>Dia chi Email (Tuy chon)</span>
                <input type="email" name="" id="" />
            </div>
            <div className="formAddress__button">
                <Button size='sm'>Luu dia chi</Button>
            </div>
        </form>
    
  )
}

FormAddress.propTypes = {
    name: PropTypes.string,

}

export default FormAddress