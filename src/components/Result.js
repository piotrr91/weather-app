import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Result = props => {

    const { temp, city, date, pressure, rain, speed, deg, sunrise, sunset, clouds, humidity, err} = props.weather;

    let content = null;
   

    if(!err && city ) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(); 
        const myTemp = Math.round(temp)
        let directionName = "W"
        if(deg >= 315 || deg <45) {
            directionName = "N"
        } else if (deg >=45 && deg <135){
            directionName = "E"
        } else if (deg >=135 && deg <225){
            directionName = "S"
        } 
       

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
                Temperatura: {myTemp} &#176;C
                </Typography>
                <Typography variant="body2" component="p">
                    Ciśnienie: {pressure} hPA<br />
                    Wilgotność: {humidity} % <br />
                    Zachmurzenie: {clouds} % <br />
                    Siła i kierunek wiatru: {speed} m/s {directionName} <br />
                    Wschód słońca o {sunriseTime}<br />
                    Zachód słońca o {sunsetTime}
                </Typography>
                
                </CardContent>
             </Card>
        )
    }
    
      
       

    return ( 
      
      <Card className= "result">
          {err ? `Nie ma w bazie takiego miasta: ${city} `: content }
          
      </Card>
      

     
     );
}
 
export default Result;