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
      listVisible: true,
      addresses: ['Loading...'],
      query: '',
    };
    this.switchView = this.switchView.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.searchBarTyping = this.searchBarTyping.bind(this);
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
    const { listVisible } = this.state;
    this.setState({
      listVisible: !listVisible,
    });
  }

  async searchBarTyping(e) {
    const { value } = e.target;
    await this.setState({ query: value });
    this.filterResults();
  }

  async filterResults() {
    const { query } = this.state;
    const response = await fetch(`/api/addresses?query=${query}`);
    const addresses = await response.json();
    this.setState({
      addresses,
    });
  }

  render() {
    const { searchBarTyping, switchView } = this;
    const { listVisible, addresses, query } = this.state;
    return (
      <div id="view-port">
        <Menu switchView={switchView} searchBarTyping={searchBarTyping} query={query} />
        <Map />
        <List listVisible={listVisible} addresses={addresses} />
      </div>);
  }
}
