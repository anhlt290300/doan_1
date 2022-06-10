import React from 'react'
import Button from './Button'
const InfoUser = () => {
  return (
    <form action="" className="infoUser">
        <div className="infoUser__name">
            <div className="infoUser__name__item">
                <span>Ho va Ten *</span>
                <input type="text" />
            </div>
            <div className="infoUser__name__item">
                <span>Ho *</span>
                <input type="text" />
            </div>
        </div>
        <div className="infoUser__nameUse">
            <span>Ten hien thi *</span>
            <input type="text" name="" id="" />
            <div className='note'>
              <span> Đây sẽ là cách mà tên của bạn sẽ được hiển thị trong phần tài khoản và trong phần đánh giá</span>
            </div>            
        </div>
        <div className="infoUser__email">
            <span>Dia chi Email *</span>
            <input type="email" name="" id="" />
        </div>
        <div className='infoUser__title'>
          <span >Thay doi mat khau</span>
        </div>
        <div className="infoUser__passnow">
            <span>Mat khau hien tai (bo trong neu khong doi)</span>
            <input type="password" name="" id="" />
        </div>
        <div className="infoUser__passnew">
            <span>Mat khau moi (bo trong neu khong doi)</span>
            <input type="password" name="" id="" />
        </div>
        <div className="infoUser__repassnew">
            <span>Xac nhan mat khau moi</span>
            <input type="password" name="" id="" />
        </div>
        <div className="infoUser__button">
          <Button size='sm'>Luu thay doi</Button>
        </div>
    </form>
  )
}

export default InfoUser