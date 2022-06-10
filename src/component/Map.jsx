import React from 'react'

import { GoogleMap, Marker } from '@react-google-maps/api';


const Map = () => {
    const center =  {lat: 10.884219529022044,lng: 106.781670673792}
       
      return (
        
            <div className='map'>

            <GoogleMap
                mapContainerStyle={{width :'100vh',height:'100vh'}}
                center={
                  center
                }
                zoom={16}
                
              >
                <Marker position={ center}/>
            </GoogleMap>
            </div>
            
      )
        
  };

  export default Map;
