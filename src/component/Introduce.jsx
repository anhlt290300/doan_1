import React from 'react'
import Helmet from '../component/Helmet'
import logo from '../assets/images/Logo-2.png'
import Img__ from '../assets/images/about-img.jpg'
import { useLocation } from 'react-router-dom';
export const Introduce = props => {
  const link = useLocation().pathname
  const name =  link.slice(link.indexOf("-")+1)
  

  return (
    <Helmet title='giới thiệu'>
        <div className="introduce">
            <span className="introduce__item__title">Về DUMA</span>
            <span className='introduce__item__about'>DUMA là một thương hiệu thời trang nam của Việt Nam ra đời với sứ mệnh đem lại cho phái mạnh nhiều sự lựa chọn chất lượng từ thiết kế cho đến chất liệu.</span>
            <div className="introduce__item__img">
                <img src={Img__}/>
            </div>
            <div className="introduce__item__logo">
                <img src={logo}/>
            </div>
        </div>
    </Helmet>
  )
}
export default Introduce