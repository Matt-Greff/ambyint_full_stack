import React, { Component } from 'react';
import Menu from './Menu';
import Map from './Map';
import List from './List';
import Notification from './Notification';
import 'bootstrap/dist/css/bootstrap.css';

require('./styles/app.sass');
require('./styles/map.sass');
require('./styles/leftPane.sass');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      addresses: null,
      filteredAddresses: null,
      notification: { message: 'Loading...', type: 'primary' },
    };
    this.switchView = this.switchView.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.searchBarTyping = this.searchBarTyping.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('/api/addresses');
    const { addresses, status, err } = await response.json();
    if (status === 'OK') {
      const message = null;
      this.setState({
        notification: { message },
        addresses,
        filteredAddresses: addresses,
      });
    } else {
      this.setState({ notification: { message: err, type: 'danger' } });
    }
  }

  switchView() {
    const { listVisible } = this.state;
    this.setState({
      listVisible: !listVisible,
    });
  }

  searchBarTyping(e) {
    const { value } = e.target;
    this.filterResults(value);
  }

  filterResults(query) {
    const { addresses } = this.state;
    const rgex = new RegExp(query, 'gi');
    const filteredAddresses = addresses.filter(({ formatted_address }) => (
      formatted_address.match(rgex)
    ));
    let notification = { message: null };
    let listVisible = true;
    if (filteredAddresses < 1) {
      notification = { message: 'No Results Found...', type: 'warning' };
      listVisible = false;
    }
    this.setState({
      filteredAddresses,
      notification,
      listVisible,
    });
  }

  render() {
    const { searchBarTyping, switchView } = this;
    const {
      listVisible,
      filteredAddresses,
      query,
      notification,
    } = this.state;
    return (
      <div id="view-port">
        <Menu
          switchView={switchView}
          searchBarTyping={searchBarTyping}
          query={query}
        />
        <List listVisible={listVisible} addresses={filteredAddresses} />
        <Notification notification={notification} />
        <Map addresses={filteredAddresses} />
      </div>
    );
  }
}
