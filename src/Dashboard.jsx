import React from 'react';
import $ from 'jquery';
import './Dashboard.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "10:00",
      equity: 0.00,
      balance: 0.00,
    }
  }

  componentDidMount() {
setInterval(() => {
  this.fetch();

}, 500);
};
    // setInterval(function () {
    fetch() {
      var context = this;

      $.ajax({
        url: 'https://mtback.herokuapp.com/',
        method: 'GET',
        mode : "no-cors",
        headers: {
          // 'Access-Control-Request-Headers': 'Authorization',
          'Content-Type': 'application/json',
          // 'Origin': ''
    },
        success: function(response) {
          context.setState({
            time: response.time,
            equity: response.equity,
            balance: response.balance
          });
       }
     });
   }

  render() {
    return (
      <div className="trading-div">
      <div className="header">
          <h1> MT4 Trade Data </h1>
        </div>
      <div className="container">
        <div className="card">
        <h2>Watch Time</h2>
          <h3>{this.state.time}</h3>
        </div>
        <div className="card">
        <h2>Balance</h2>
          <h3 >{this.state.balance}</h3>
        </div>
        <div className="card">
        <h2>Equity</h2>
          <h3 >{this.state.equity}</h3>
        </div>
      </div>
        </div>
    );
  }
}
