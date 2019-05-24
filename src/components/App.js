import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
const APIKey = '89a828a6427dbfe875625255fc1014e1';

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
    er: '',
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
    .then(data => console.log(data))
    .catch(er => console.log(er))



  }
  render() {
  return (
    <div className="App">
      Pogoda w twoim mieście
      <Form value = {this.state.value} 
            change = {this.handleInputChange}
            submit = {this.handleCitySubmit} 
      />
      <Result />
    </div>
  );
}
}

export default App;
