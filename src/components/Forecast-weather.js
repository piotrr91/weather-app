import React, {Component} from 'react';
import Form from './Form';
import ResultForecast from './Result-forecast';
import {getForecastWheatherApi} from '../consts/api.consts'


class ForecastComponent extends Component {
  state = {
    value: '',
    temp: '',
    city: '',
    date: '',
    pressure: '',
    speed: '',
    deg: '',
    sunrise: '',
    sunset: '',
    clouds: '',
    rain: '',
    humidity: '',
    line: '',
    err: false,
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
      
     
      
      this.setState(state =>({
        err: false,
        date: data.list.dt,
        city: this.state.value,
        temp: data.list.main.temp,
        pressure: data.list.main.pressure,
        speed: data.list.wind.speed,
        deg: data.list.wind.deg,
        clouds: data.list.clouds.all,
        humidity: data.list.main.humidity,
        
      }))
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
    return (
      <div className="container">
        <Form value = {this.state.value} 
                change = {this.handleInputChange}
                submit = {this.handleCitySubmit} 
        />
        <div className="result">
        <ResultForecast weather={this.state} />
        </div>
      </div>
          );
  }
  }

export default ForecastComponent;