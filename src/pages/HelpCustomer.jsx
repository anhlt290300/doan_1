import React from 'react'
import PropTypes from 'prop-types'
import SwitchItemAbout from '../component/SwitchItemAbout'
import AnotherBox from '../component/AnotherBox'
const HelpCustomer = props => {
    const namepath = props.history.location.pathname.slice(props.history.location.pathname.lastIndexOf("/")+1)
    console.log(namepath)
    const data_ =[
      {
          title:"CHÍNH SÁCH ĐỔI TRẢ",
          link: "chinh-sach-doi-tra"
      },
      {
          title:"CHÍNH SÁCH BẢO HÀNH",
          link: "chinh-sach-bao-hanh"
      },
      {
          title:"CHÍNH SÁCH HOÀN TIỀN",
          link: "chinh-sach-hoan-tien"
      },   
    ]
  
    const newData = () =>{
          
      const data2 = []
      let i = data_.filter(object=>object.link !==namepath)
      data2.push(i)    
      return data2
    }
  return (
    <div className='about'>
        <SwitchItemAbout name={namepath} keyword='help'/>
        <AnotherBox arr={newData()} nameChose={namepath} keyword="help"/> 
    </div>)
}

HelpCustomer.propTypes = {}

export default HelpCustomer