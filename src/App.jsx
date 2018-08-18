import React, {Component} from 'react';
import Button from './ExampleButton.jsx';

require("./styles/first.css");
require("./styles/second.sass");
require("./styles/third.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.words = 'some third words';
    this.state = {
      data: 'press button to make api call'
    }
    this.apiCall = this.apiCall.bind(this)
  }

  async apiCall() {
    this.setState({data: "fetching data from fake db"})
    const response = await fetch('/api/example')
    const json = await response.json()
    this.setState({
      data: json["message"]
    })
  }

  render() {
    return(
      <div>
        <div className="third stuff">{this.words}</div>
        <Button apiCall={this.apiCall}/>
        <p>{this.state.data}</p>
      </div>);
  }
}


