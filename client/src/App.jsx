import React, { Component } from 'react';
import Menu from './Menu';
import Map from './Map';

require('./styles/app.sass');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'press button to make api call',
    };
    this.apiCall = this.apiCall.bind(this);
  }

  async apiCall() {
    this.setState({ data: 'fetching data from fake db' });
    const response = await fetch('/api/example');
    const { data } = await response.json();
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="view-port">
        <Menu apiCall={this.apiCall} />
        <Map />
      </div>);
  }
}
