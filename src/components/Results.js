import React from 'react'
import "./style/result.css"

function Results(props) {

    let value=(props.temp-273.15).toFixed(2) 
    return ( 
        <div className="result">
          
            <div className="name">
                <h1>{props.city}, </h1>
                <h2>{props.country}</h2>
            </div>

            <div className="temp">    
               <h1>{value} &deg; C</h1>
            </div>

            <div className="details row">
                <div className="col-xs-12 col-md-4 col-lg-4 col-sm-4 detail-div"> 
                    <p>Pressure : {props.pressure} </p> 
                    <p>Humidity : {props.humidity} </p>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-4 col-sm-4 detail-div">   
                    <p>latitude : {props.lat}</p>
                    <p>longitude : {props.lon}</p>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-4 col-sm-4 detail-div"> 
                    <p>Description : {props.description} </p>
                    <img src={"http://openweathermap.org/img/w/" + props.iconid + ".png"} alt="logo"/>
                </div>
            </div>     
        </div> 
    )
}

export default Results
