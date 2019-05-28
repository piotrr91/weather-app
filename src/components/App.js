import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
const APIKey = '89a828a6427dbfe875625255fc1014e1'; //klucz do api

class App extends Component {

  state = {
    value: '',
    temp: '',
    city: '',
    date: '',
    pressure: '',
    wind: '',
    sunrise: '',
    sunset: '',
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
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
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
      Pogoda w twoim mieście
      <Form value = {this.state.value} 
            change = {this.handleInputChange}
            submit = {this.handleCitySubmit} 
      />
      <Result weather={this.state} />
    </div>
  );
}
}

export default App;
