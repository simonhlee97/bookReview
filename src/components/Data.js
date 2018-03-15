import React, { Component } from "react";
import "../styles/Home.css";
import data from '../data/sendgrid.json';


export default class Data extends Component {
  render() {
    return (

      <div className="Home">
        <div className="lander">
        <h1>Data Table</h1>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>date</th>
          <th>provider</th>
          <th>opens</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map(function(mail){
            return <tr><td>{mail.date}</td><td>{mail.provider}</td><td>{mail.opens}</td></tr>;
          })
        }
        </tbody>
        </Table>
        </div>
      </div>
    );
  }
}