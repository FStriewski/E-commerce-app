import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'

export default class App extends Component {
  render() {
    return (
      <div>
        <ProductsList  />
        <ProductDetails />
      </div>
    )
  }
}
