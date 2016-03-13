import React from "react";
import { default as SpotifyWebApi} from "spotify-web-api-js";
const { Component } = React;

const spotifyWebApi = new SpotifyWebApi();

class UserLoginExample extends Component {
  constructor(props) {
     super(props);
     this.state = {
       loggedIn: false
     }
   }

  handleClick() {
    var self = this;

    function login(callback) {
      var CLIENT_ID = '6b284830006843e7ae7b170725715aed';
      var REDIRECT_URI = 'https://jmperezperez.com/spotify-oauth-jsfiddle-proxy/proxy.html';

      function getLoginURL(scopes) {
          return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
      }

      var url = getLoginURL([
          'user-read-email'
      ]);

      var width = 450,
          height = 730,
          left = (screen.width / 2) - (width / 2),
          top = (screen.height / 2) - (height / 2);

      window.addEventListener("message", function(event) {
          var hash = JSON.parse(event.data);
          if (hash.type == 'access_token') {
              callback && callback(hash.access_token);
          }
      }, false);

      var w = window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
       );
     }

     login(accessToken => {
       spotifyWebApi.setAccessToken(accessToken);
       spotifyWebApi.getMe(accessToken)
           .then( response => self.setState({loggedIn: true, userData: response}))
     })

  }

  render() {
    if (this.state.loggedIn) {
      var data = this.state.userData;
      return (
        <dl>
          <img src={data.images[0].url} />
          <dt>User Name</dt>
          <dd>{data.id}</dd>
          <dt>Display Name</dt>
          <dd>{data.display_name}</dd>
          <dt>Country</dt>
          <dd>{data.country}</dd>
          <dt>Followers</dt>
          <dd>{data.followers.total}</dd>
          <dt>Profile</dt>
          <dd><a href={data.external_urls.spotify} target="_blank">{data.external_urls.spotify}</a></dd>
          <dt>Email</dt>
          <dd>{data.email}</dd>
          <dt>Product</dt>
          <dd>{data.product}</dd>
        </dl>
      )
    } else {
      return (
        <div>
          Log in with your Spotify account and this demo will display information about you fetched using the Spotify Web API
          <button style={{backgroundColor:'green',border:0,display:'block',margin:'1em 0'}} onClick={this.handleClick.bind(this)}>Login</button>
        </div>
      )
    }
  }
}

export default UserLoginExample
