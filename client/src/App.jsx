import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import Menu from './Menu';
import Map from './Map';
import List from './List';
import 'bootstrap/dist/css/bootstrap.css';

require('./styles/app.sass');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      addresses: [''],
      query: '',
      loading: true,
    };
    this.switchView = this.switchView.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.searchBarTyping = this.searchBarTyping.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('/api/addresses');
    let addresses = await response.json();
    if (!Array.isArray(addresses)) {
      addresses = [];
    }
    const loading = false;
    this.setState({
      addresses,
      loading,
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
    const response = await fetch(`/api/addresses/?query=${query}`);
    let addresses = await response.json();
    if (!Array.isArray(addresses)) {
      addresses = [];
    }
    this.setState({
      addresses,
    });
  }

  render() {
    const { searchBarTyping, switchView } = this;
    const {
      listVisible,
      addresses,
      query,
      loading,
    } = this.state;
    return (
      <div id="view-port">
        <Menu loading={loading} switchView={switchView} searchBarTyping={searchBarTyping} query={query} />
        <Map addresses={addresses} />
        <List listVisible={listVisible} addresses={addresses} />
      </div>);
  }
}
