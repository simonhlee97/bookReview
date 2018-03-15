import React, { Component } from "react";
import '../styles/Home.css';
import Login from './Login';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">

          <h1>BookReviewer</h1>
          <p>Review your favorite books</p>
          <br />
          <br />
          
          <Login />
          
        </div>
      </div>
    );
  }
}