import React from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Helmet from '../component/Helmet'
const Register = props => {
  const [email,setEmail] = React.useState('')
  const [pass,setPass] = React.useState('')
  const Check = () =>{     
    
      if(email !=="admin"){
        alert("ten dang nhap khong ton tai");
       
      }else{
        if(pass !=="123"){
          alert("mat khau sai");
          
        }
        else {          
          props.history.push(`/user-${email}/component-bang-dieu-khien`)
          }
      }
  }

  return (
    <Helmet title= "Đăng nhập">
       <div className='register'>
        <div className="register__form">
            <div className="register__form__item">
                  <p className="register__form__item__title">
                      đăng nhập
                  </p>
                  <div className="register__form__item__list">
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            tên tài khoản hoặc địa chỉ email *
                        </p>
                        <input type="text"  className="register__form__item__list__item__input" 
                            value={email} onInput={e=> setEmail(e.target.value)}
                        />
                      </div>
                      <div className="register__form__item__list__item">
                        <p className="register__form__item__list__item__title">
                            mật khẩu *
                        </p>
                        <input type="password"  className="register__form__item__list__item__input" 
                           value={pass} onInput={e=> setPass(e.target.value)}
                        />
                      </div>
                  </div>
                  <div className="register__form__item__btn">
                    <Button
                      size='sm'
                      onClick={ (Check)}
                    >Đăng nhập </Button>
                  </div>
                  <div className="register__link">                      
                      <Link to="/" className="register__link__forgetPassword">Quên mật khẩu?</Link>
                      <Link to="/login" className="register__link__registerAcc">Đăng kí</Link>                      
                  </div>
            </div>
            
          </div>
      </div>
    </Helmet>
  )
}


export default Register