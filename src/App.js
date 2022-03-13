import './App.css';

import React, { Component } from 'react'
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <div className="conatiner text-center">
        <h1 className="main-heading">COVID-19 Dashboard</h1>
        <Card/>
      </div>
    )
  }
}
