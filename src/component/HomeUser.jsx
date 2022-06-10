import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import Button from './Button'
const HomeUser = props => {
  const name = props.nameUser
  const dataPath= [
    {
      name: "Đơn hàng",
      path: "component-don-hang"
    },
    {
      name: "Địa chỉ",
      path: "component-don-hang"
    },
    {
      name: "Thông tin tài khoản",
      path: "component-don-hang"
    }
  ]
  return (
    <div className="homeuser">
        <div className="homeuser__item">
            Xin chào <span>{name}</span> (Không phải <span>{name}</span>? <Link to={"/register"}><span className='link'>Đăng xuất</span></Link>)
        </div>
        <div className="homeuser__item">
            Từ trang quản lí tài khoản bạn có thể xem <Link to={`component-don-hang`}><span className='link'>Đơn hàng mới</span></Link> , quản lý <Link to={`component-dia-chi`}><span className='link'>Địa chỉ giao hàng và thanh toán</span></Link>, và <Link to={`component-thong-tin-tai-khoan`}><span className='link'>sửa mật khẩu và thông tin tài khoản.</span></Link> 
        </div>
        <div className="homeuser__item button">
            <Grid
                 col={3}
                 mdCol={2}
                 smCol={1}
                 gap={40}
            >
                {dataPath.map((item,index)=>(
                    <Link to={item.path} key={index} >
                      <Button size='sm' >
                          {item.name}
                      </Button>
                    </Link>   
                ))                                                            
                }
            </Grid>
        </div>
    </div>
  )
}

HomeUser.propTypes = {
      nameUser : PropTypes.string

}

export default HomeUser