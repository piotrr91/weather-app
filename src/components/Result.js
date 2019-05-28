import React from 'react';

const Result = props => {

    const { temp, city, date, pressure, wind, sunrise, sunset, err} = props.weather;

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(); 
        content = (
            <div>
                <h2>Informacje pogodowe dla: {city}</h2>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Temperatura: {temp} &#176;C</h4>
                <h4>Ciśnienie: {pressure} hPA</h4>
                <h4>Siła wiatru: {wind} m/s</h4>
                <h4>Wschód słońca o {sunriseTime}</h4>
                <h4>Zachód słońca o {sunsetTime}</h4>

             </div>
        )
    }


    return ( 
      
      <div className= "result">
          {err ? `Nie ma w bazie takiego miasta${city} `: content}
      </div>

     
     );
}
 
export default Result;