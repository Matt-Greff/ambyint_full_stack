import React, { Component } from 'react';
import Menu from './Menu';
import Map from './Map';
import List from './List';
import 'bootstrap/dist/css/bootstrap.css';

require('./styles/app.sass');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapVisible: true,
      addresses: ['one', 'two'],
    };
    this.apiCall = this.apiCall.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  async apiCall() {
    this.setState({ data: 'fetching data from fake db' });
    const response = await fetch('/api/example');
    const { data } = await response.json();
    this.setState({
      data,
    });
  }

  switchView() {
    const { mapVisible } = this.state;
    this.setState({
      mapVisible: !mapVisible,
    });
  }

  render() {
    const { apiCall, switchView } = this;
    const { mapVisible, addresses } = this.state;
    return (
      <div id="view-port">
        <Menu switchView={switchView} apiCall={apiCall} />
        {mapVisible ? (
          <Map />
        ) : (
          <List addresses={addresses} />
        )}
      </div>);
  }
}
