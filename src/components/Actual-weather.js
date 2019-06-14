import React, {Component} from 'react';
import Form from './Form';
import Result from './Result';
import {getCurrentWheatherApi} from '../consts/api.consts'


class AccComponent extends Component {
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
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    fetch(getCurrentWheatherApi(this.state.value))
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("fail")
    })
    .then(response => response.json())
    .then(data => {
      
      const time = new Date().toLocaleString()
      
      
      this.setState(state =>({
        err: false,
        temp: data.main.temp,
        city: this.state.value,
        date: time,
        pressure: data.main.pressure,
        speed: data.wind.speed,
        deg: data.wind.deg,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        clouds: data.clouds.all,
        humidity: data.main.humidity,
        
        
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
        <Result weather={this.state} />
        </div>
      </div>
          );
  }
  }

export default AccComponent;