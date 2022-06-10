import React from 'react'
import img1_ from '../assets/images/stores1.jpg'
import img2_ from '../assets/images/stores2.jpg'
import img3_ from '../assets/images/stores3.jpg'
export const Stores = () => {
  return (
    <div className='stores'>
        <div className="stores__item">
            <div className="stores__item__title">HỆ THỐNG CỬA HÀNG</div>
        </div>
        <div className="stores__item">
            <span>THÀNH PHỐ HỒ CHÍ MINH.</span>
        </div>
        <div className="stores__item">
            <div className="stores__item__listitem">
              <span>SƯ VẠN HẠNH STORE:</span>
            </div>
            <div className="stores__item__listitem">
              <span>ĐỊA CHỈ </span>
              <p>: 421/8 Sư Vạn Hạnh (NỐI DÀI), PHƯỜNG 12, QUẬN 10, THÀNH PHỐ HỒ CHÍ MINH.</p>
            </div>
            <div className="stores__item__listitem">
              <span>PHONE</span>
              <p> : 086 6903 551</p>
            </div>
            <div className="stores__item__listitem">
              <span>KHIẾU NẠI</span>
              <p>: 0902 79 12 32 </p>
            </div>
        </div>
        <div className="stores__item">
            <img src={img1_}/>
        </div>
        <div className="stores__item">
            <img src={img2_}/>
        </div>
        <div className="stores__item">
            <img src={img3_}/>
        </div>
    </div>
  )
}
export default Stores