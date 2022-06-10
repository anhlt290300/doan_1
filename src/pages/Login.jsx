import React from 'react'
import Button from '../component/Button'
import Helmet from '../component/Helmet'
const Register = props => {
  const Check =()=>{
    props.history.push('/user-admin')
  }
  return (
    <Helmet title= "Đăng kí">
    <div className='register'>
        <div className="register__form">
            {/* <div className="register__form__item">
                  <p className="register__form__item__title">
                      đăng nhập
                  </p>
                  <div className="register__form__item__list">
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            tên tài khoản hoặc địa chỉ email *
                        </p>
                        <input type="text" className="register__form__item__list__item__input" />
                      </div>
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            mật khẩu *
                        </p>
                        <input type="password" className="register__form__item__list__item__input" />
                      </div>
                  </div>
                  <div className="register__form__item__btn">
                    <Button
                      size='sm'
                    >Đăng nhập </Button>
                  </div>
                  <div className="register__link">                      
                      <Link to="/" className="register__link__forgetPassword">Quên mật khẩu?</Link>
                      <Link to="/" className="register__link__registerAcc">Đăng kí</Link>                      
                  </div>
            </div> */}
            <div className="register__form__item">
                  <p className="register__form__item__title">
                      Đăng kí
                  </p>
                  <div className="register__form__item__list">
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            Tên tài khoản *
                        </p>
                        <input type="text" className="register__form__item__list__item__input" />
                      </div>
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            Địa chỉ email *
                        </p>
                        <input type="email" className="register__form__item__list__item__input" />
                      </div>
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            Mật khẩu *
                        </p>
                        <input type="password" className="register__form__item__list__item__input" />
                      </div>
                  </div>
                  <div className="register__form__item__btn">
                    <Button
                      size='sm'
                      onClick={Check}
                    >Đăng kí</Button>
                  </div>
            </div>
        </div>
    </div>
    </Helmet>
  )
}



export default Register