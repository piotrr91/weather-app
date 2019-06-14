import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ResultForecast = props => {

    const { temp, city, date, pressure, speed, deg, rain, clouds, humidity, err} = props.weather;

    let content = null;
   

    if(!err && city ) {

       
        const directions = [
            "N", "NNE", "NE", "ENE", "E", "ESE", "SE",
            "SSE", "S", "SSW", "SW", "WSW", "W", "WNW",
            "NW", "NNW"
        ];
        let directionName = "W"
        if(deg > 315 && deg <45) {
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
                    
                </Typography>
                <Typography color="textSecondary">
                
                </Typography>
                <Typography variant="body2" component="p">
                   
                   
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
 
export default ResultForecast;