import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Employees from './container/employees/employees';

const App = props => (
  <div>
    <Header />
    <div className="App">
      <Employees />
    </div>
  </div>
);

export default App;
