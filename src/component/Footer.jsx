import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLink = [
  {
    display:"Giới thiệu",
    path:"/about-introduce"
  },
  {
    display:"Liên hệ",
    path:"/contact"
  },
  {
    display:"Tin tức",
    path:"/about-news"
  },
  {
    display:"Hệ thống cửa hàng",
    path:"/about-stores"
  },
  {
    display:"Tuyển dụng",
    path:"/about-recruit"
  }
]

const footerCustomerLink = [
  {
    display:"Chính sách đổi trả",
    path:"/ho-tro-khach-hang/chinh-sach-doi-tra"
  },
  {
    display:"Chính sách bảo hành",
    path:"/ho-tro-khach-hang/chinh-sach-bao-hanh"
  },
  {
    display:"Chính sách hoàn tiền",
    path:"/ho-tro-khach-hang/chinh-sach-hoan-tien"
  },
]

const Footer = () => {
  const pathname = useLocation().pathname.slice(1,5)
  const gotoHeader = ()=>{
    window.scrollTo(0,0)
  }
  if(pathname==='user'||pathname==="abou"||pathname==="ho-t"){
    return null
  }
  else{
  return (
    <footer>                     
        <div className="container">
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={10}
            >
                <div>
                    <div className="footer__title">
                        Tổng đài hỗ trợ
                    </div>
                    <div className="footer__content">
                        <p>
                            Liên hệ đặt hàng <strong>0866903551</strong>  
                        </p>     
                        <p>
                            Thắc mắc đơn hàng <strong>0866903551</strong>  
                        </p>   
                        <p>
                            Góp ý, khiếu nại <strong>0866903551</strong>  
                        </p>    
                    </div>
                </div>
                <div>
                    <div className="footer__title">
                        Về DUMA
                    </div>
                    <div className="footer__content">
                        {
                          footerAboutLink.map((item,index)=>(
                            <p key={index}>
                                <Link to={item.path}>
                                  {item.display}
                                </Link>
                            </p>
                          ))
                        }  
                        
                    </div>
                </div>

                <div>
                    <div className="footer__title">
                        Chăm sóc khách hàng
                    </div>
                    <div className="footer__content">
                        {
                          footerCustomerLink.map((item,index)=>(
                            <p key={index}>
                                <Link to={item.path}>
                                  {item.display}
                                </Link>
                            </p>
                          ))
                        }                        
                    </div>
                </div>
                <div className='footer__about'>
                        <p className='footer__about__logo'>
                            <Link to="/" onClick={gotoHeader()}>
                                <img src={logo} className="footer__logo" alt=""/>
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu bán 1 tỷ gói mè cho toàn thế giới, giải cứu nga khỏi ách cai trị của bọn thực dân Nato 
                        </p>
                </div>
            </Grid>
        </div>
    </footer>
  )
}}

export default Footer