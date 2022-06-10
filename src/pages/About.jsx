import React from 'react'
import PropTypes from 'prop-types'
import SwitchItemAbout from '../component/SwitchItemAbout'
import AnotherBox from '../component/AnotherBox'
const About = props => {
    const namepath = props.history.location.pathname.slice(props.history.location.pathname.indexOf("-")+1)
    console.log(namepath)
    const data_ =[
      {
          title:"VỀ DUMA",
          link: "introduce"
      },
      {
          title:"HỆ THỐNG CỬA HÀNG",
          link: "stores"
      },
      {
          title:"TUYỂN DỤNG",
          link: "recruit"
      },
      {
          title:"TIN TỨC",
          link: "news"
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
        <SwitchItemAbout name={namepath} keyword="about"/>
        <AnotherBox arr={newData()} nameChose={namepath} keyword="about"/>
    </div>
  )
}



export default About