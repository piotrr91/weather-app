import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import AppBar from './AppBar';
const APIKey = '89a828a6427dbfe875625255fc1014e1'; //klucz do api

class App extends Component {

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
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    const API = 
    `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
    fetch(API)
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
        rain: data.rain.1h,
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
    <div className="App">
      <AppBar/> 
      <div className="container">
      <Form value = {this.state.value} 
            change = {this.handleInputChange}
            submit = {this.handleCitySubmit} 
      />
      </div>
      <div className="result">
      <Result weather={this.state} />
      </div>
    </div>
  );
}
}

export default App;
