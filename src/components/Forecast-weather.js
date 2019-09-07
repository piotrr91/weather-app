import React, {Component} from 'react';
import Form from './Form';
import ResultForecast from './Result-forecast';
import {getForecastWheatherApi} from '../consts/api.consts'


class ForecastComponent extends Component {
  state = { 
    mappedForecast: []
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    fetch(getForecastWheatherApi(this.state.value))
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("fail")
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
     const {list} = data
     
     const mappedForecast = list.map( forecast => {
      const {dt, main, wind, clouds,rain} = forecast
      let myRain = 0
      if (rain && rain['3h']){
        myRain = rain['3h']
      }
      return {
        err: false,
        date: dt,
        city: this.state.value,
        temp: main.temp,
        pressure: main.pressure,
        speed: wind.speed,
        deg: wind.deg,
        clouds: clouds.all,
        humidity: main.humidity, 
        rain: myRain,
      }
     })
      
      this.setState({mappedForecast})
    })
    .catch(err => {
      console.log(err);
      this.setState(prevState =>({
        err: true,
        city: prevState.value
      }))
    })
  }
  render() {
    const results = this.state.mappedForecast.map( singleForecast => {
      return <div className="result">
        <ResultForecast weather={singleForecast} />
      </div>
    })

    return (
      <div className="container">
        <Form value = {this.state.value} 
                change = {this.handleInputChange}
                submit = {this.handleCitySubmit} 
        />
        {results}
        
      </div>
          );
  }
  }

export default ForecastComponent;