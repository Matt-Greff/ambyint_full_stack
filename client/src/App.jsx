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
    this.switchView = this.switchView.bind(this);
  }

  async componentDidMount() {
    this.setState({ addresses: ['fetching data from fake db'] });
    const response = await fetch('/api/addresses');
    const addresses = await response.json();
    this.setState({
      addresses,
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
