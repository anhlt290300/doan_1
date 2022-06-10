import React from 'react'
import Helmet from '../component/Helmet';
import Map from '../component/Map'
import ContactForm from '../component/ContactForm'
import {useLoadScript } from '@react-google-maps/api';
const Contact = () => {  
  const { isLoaded } = useLoadScript({    
    googleMapsApiKey: "AIzaSyAPLelXzhlr5p6xm6hdbypmeY8R7riOQaI"
  })
  console.log(isLoaded)
  if(isLoaded)    
      return (
        <Helmet title="liên hệ">
          <div className="contact">
              <div className="contact__map">
                <Map/>
              </div>
              {/* <div className="contact__line"/> */}
              <div className="contact__form">
                <ContactForm/>
              </div>
          </div>        
        </Helmet>
      );
  else return <div>LOADING....</div>
}

export default Contact