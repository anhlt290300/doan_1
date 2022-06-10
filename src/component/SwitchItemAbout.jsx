import React from 'react'
import PropTypes from 'prop-types'
import News from '../component/News'
import Recruit from '../component/Recruit'
import Stores from '../component/Stores'
import Introduce from '../component/Introduce'
import Insurance from './Insurance'
import Refund from './Refund'
import ChangeProduct from './ChangeProduct'
const SwitchItemAbout = props => {
    
    if(props.keyword==="about"){
        if(props.name==='news')
            return (<News/>)
        else if(props.name==='recruit')
            return (<Recruit/>)
        else if(props.name==='stores')
            return (<Stores/>)
        else if(props.name==='introduce')
            return (<Introduce/>)            
    }else if(props.keyword==="help"){
        if(props.name==='chinh-sach-doi-tra')
            return (<ChangeProduct/>)
        else if(props.name==='chinh-sach-bao-hanh')
            return (<Insurance/>)
        else if(props.name==='chinh-sach-hoan-tien')
            return (<Refund/>)        
    }
    
}

SwitchItemAbout.propTypes = {
    name: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired
}

export default SwitchItemAbout