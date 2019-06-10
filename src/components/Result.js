import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Result = props => {

    const { temp, city, date, pressure, speed, deg, sunrise, sunset, rain, clouds, err} = props.weather;

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(); 
        const directions = [
            "N", "NNE", "NE", "ENE", "E", "ESE", "SE",
            "SSE", "S", "SSW", "SW", "WSW", "W", "WNW",
            "NW", "NNW"
        ];

        content = (
            <Card className= "result">
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Pogoda: {city}
                </Typography>
                <Typography variant="h5" component="h2">
                    Dane dla dnia i godziny: {date}
                </Typography>
                <Typography color="textSecondary">
                Temperatura: {temp} &#176;C
                </Typography>
                <Typography variant="body2" component="p">
                    Ciśnienie: {pressure} hPA<br />
                    Zachmurzenie: {clouds} % <br />
                    Opady: {rain} <br />
                    Siła i kierunek wiatru: {speed} m/s {directions} <br />
                    Wschód słońca o {sunriseTime}<br />
                    Zachód słońca o {sunsetTime}
                </Typography>
                
                </CardContent>
             </Card>
        )
    }
    
      
       

    return ( 
      
      <Card className= "result">
          {err ? `Nie ma w bazie takiego miasta: ${city} `: content}
      </Card>
      

     
     );
}
 
export default Result;