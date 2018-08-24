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
      addresses: [''],
      filteredAddresses: [''],
      query: '',
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
      const message = '';
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
    const notification = filteredAddresses < 1
      ? { message: 'No Results Found...', type: 'warning' }
      : { message: '' };
    this.setState({
      filteredAddresses,
      notification,
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
        {
          notification.message
            ? <Notification notification={notification} />
            : <List listVisible={listVisible} addresses={filteredAddresses} />
        }
        <Map addresses={filteredAddresses} />
      </div>
    );
  }
}
