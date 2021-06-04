import React from 'react'

const Weather = (props)=>{
    return(
        <div className="info">
            {
                props.temp && <p className="info-key"> Temperature :
                <span className="info-value">
                {props.temp} 
                    </span> 
                 </p>     
            }
          {
                props.city &&   <p className="info-key"
                > City :
                <span className="info-value">
                {props.city}   
                </span>
                </p>
                   
            }
            {
                props.Contry &&  <p className="info-key" >Country : 
                <span  className="info-value" >
                {props.Contry}
                    </span> </p>     
            }
            {
                props.pressure &&  <p className="info-key" > Pressure :
                <span  className="info-value" >
             
                    </span>{props.pressure} </p>    
            }
            {  
                props.feels_like &&  <p className="info-key"> Feel Like :
                <span  className="info-value" >
                {props.feels_like}
                    </span>  </p>      
            }

        </div>

    )
    
}
export default Weather ;