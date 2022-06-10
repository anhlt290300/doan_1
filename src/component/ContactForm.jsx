import React from 'react'
import Button from '../component/Button'
const ContactForm = () => {
  return (
    <div className='contactform'>
        <div className="contactform__title">
            <p>Liên hệ</p>
            <div className="contactform__title__line"/>
        </div>
        <div className="contactform__list">
            <div className="contactform__list__item">
                <div className="contactform__list__item__lineone">
                    <p>Địa chỉ của chúng tôi</p>
                </div>
                <div className="contactform__list__item__linetwo">
                    <p>Ktx khu B đại học quốc gia HCM</p>
                </div>
            </div>
            <div className="contactform__list__item">
                <div className="contactform__list__item__lineone">
                    <p>Email chúng tôi</p>
                </div>
                <div className="contactform__list__item__linetwo">
                    <p>18520451@gm.uit.edu.vn</p>
                </div>
            </div>
            <div className="contactform__list__item">
                <div className="contactform__list__item__lineone">
                    <p>Điện thoại</p>
                </div>
                <div className="contactform__list__item__linetwo">
                    <p>0866903551</p>
                </div>
            </div>
            <div className="contactform__list__item">
                <div className="contactform__list__item__lineone">
                    <p>Thời gian làm việc</p>
                </div>
                <div className="contactform__list__item__linetwo">
                    <p>24/7</p>
                </div>
            </div>
        </div>
        <div className="contactform__title">
            <p>Gửi thắc mắc cho chúng tôi</p>
            <div className="contactform__title__line"/>
        </div>
        <div className="contactform__input">
            <div className="contactform__input__item">
                <input type='text' placeholder='Tên của bạn' className="contactform__input__item__name"/>
            </div>
            <div className="contactform__input__item">
                <div  className="contactform__input__item__list" >
                    <input type="email" placeholder='Email của bạn' className="contactform__input__item__list__email"/>
                    <input type='tel' placeholder='Số điện thoại của bạn' className="contactform__input__item__list__phone"/>
                </div>
            </div>
            <div className="contactform__input__item">
                <input type='text' placeholder='Ghi chú' className="contactform__input__item__note"/>
            </div>                                
        </div>
        <div className="contactform__button">
            <Button size='sm'>
                Gửi cho chúng tôi
            </Button>
        </div>

    </div>
  )
}

export default ContactForm