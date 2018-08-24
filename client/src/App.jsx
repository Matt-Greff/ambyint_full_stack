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
      filteredAddresses: [''],
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
      alert(addresses);
      addresses = [];
    }
    const loading = false;
    this.setState({
      addresses,
      loading,
      filteredAddresses: addresses,
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

  filterResults() {
    const { query, addresses } = this.state;
    const rgex = new RegExp(query, 'gi');
    const filteredAddresses = addresses.filter(({ formatted_address }) => (
      formatted_address.match(rgex)
    ));
    this.setState({
      filteredAddresses,
    });
  }

  render() {
    const { searchBarTyping, switchView } = this;
    const {
      listVisible,
      filteredAddresses,
      query,
      loading,
    } = this.state;
    return (
      <div id="view-port">
        <Menu
          loading={loading}
          switchView={switchView}
          searchBarTyping={searchBarTyping}
          query={query}
        />
        <Map addresses={filteredAddresses} />
        <List listVisible={listVisible} addresses={filteredAddresses} />
      </div>
    );
  }
}
