import React from "react";
import { default as SpotifyWebApi} from "spotify-web-api-js";
const { Component } = React;

const spotifyWebApi = new SpotifyWebApi();

class SearchResults extends Component {
  render() {
    const self = this;
    return (<ul>
      {self.props.results.map(result =>
        <li key={result.id}>
          {result.name}
        </li>)}
      </ul>)
  }
}

class SearchExample extends Component {
  constructor(props) {
     super(props);
     this.state = {
       results: []
     }
     this.previousRequest = null;
   }

  handleKeyUp() {
    if (this.previousRequest !== null) {
      this.previousRequest.abort();
    }
    this.previousRequest = spotifyWebApi.searchTracks(this.refs.query.value, {limit: 10});
    this.previousRequest.then((response) => {
        this.setState({results: response.tracks.items})
        this.previousRequest = null
      }
    ).catch(() => {})
  }

  render() {
    return (
      <div>
        <input ref="query" style={{color:"black"}} onKeyUp={this.handleKeyUp.bind(this)} />
        <SearchResults results={this.state.results} />
      </div>
    )
  }
}

export default SearchExample
