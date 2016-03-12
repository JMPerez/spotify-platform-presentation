import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/spotify";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

/* Examples */
import SearchExample from "./examples/search";
import UserLoginExample from "./examples/user-login";

preloader(images);

const theme = createTheme('aubergine');

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide>
            <Heading size={1}>The Spotify Platform</Heading>
          </Slide>
          <Slide>
              <Markdown>
                {`
  ## Our developer tools:
  * Web API
  * iOS SDK
  * Android SDK
  * The Echo Nest
                `}
              </Markdown>
          </Slide>
          <Slide>
              <Markdown>
                {`
  ## Spotify Web API
  Detailed catalog info + User info
                `}
              </Markdown>
          </Slide>
          <Slide>
            <Heading size={2} lineHeight={2}>
              Web API - Catalog Info
            </Heading>
  <Layout>
    <Fill>
      <Markdown>
        {`
#### Artists
* Related Artists
* Top tracks
* Follower count

#### Albums
* Cover art
* New releases
        `}
        </Markdown>
      </Fill>
      <Fill>
        <Markdown>
          {`
#### Tracks
* 30 second MP3 previews

#### Playlists
* Featured playlists
* Playlists per genre
          `}
      </Markdown>
    </Fill>
  </Layout>
          </Slide>
          <Slide>
            <Heading size={2} lineHeight={2}>
              Web API - User Info
            </Heading>
          <Layout>
          <Fill>
          <Markdown>
{`
#### Authentication
* OAuth 2.0

#### Saved tracks
* Manage saved tracks
`}
          </Markdown>
          </Fill>
          <Fill>
          <Markdown>
{`
#### Playlists
* Create playlists
* Subscribe to playlists

#### Follow
* Follow users
* Follow artists
`}
          </Markdown>
          </Fill>
          </Layout>
          </Slide>
          <Slide>
            <Heading size={2}>Examples</Heading>
          </Slide>
          <Slide>
            <Heading size={3}>Search</Heading>
            <SearchExample />
          </Slide>
          <Slide>
            <Heading size={3}>User Login</Heading>
            <UserLoginExample />
          </Slide>
          <Slide>
            <Heading size={1}>Audio streaming on mobile</Heading>
          </Slide>
          <Slide>
            <Heading size={2} lineHeight={2}>
              Mobile SDKs
            </Heading>
          <Layout>
          <Fill>
            <Markdown>
  {`
#### iOS SDK
* User authentication
* Playback
* Web API functionality (search, playlisting, saved tracks…)
  `}
            </Markdown>
          </Fill>
          <Fill>
            <Markdown>
  {`
#### Android SDK
* User authentication
* Playback
* Web API functionality (search, playlisting, saved tracks…) through Android wrapper
  `}
          </Markdown>
          </Fill>
          </Layout>
          </Slide>
          <Slide>
            <Heading size={2}>
              Useful Links to start hacking
            </Heading>
            <Layout>
              <Fill>
                <Heading size={4}>Android SDK</Heading>
                <Link href="https://developer.spotify.com/technologies/spotify-android-sdk/tutorial/">Beginners Tutorial</Link>
                <Heading size={4}>iOS SDK</Heading>
                <Link href="https://developer.spotify.com/technologies/spotify-ios-sdk/tutorial/">Beginners Tutorial</Link>
                <Heading size={4}>Java, JS, python, ruby...</Heading>
                <Link href="https://developer.spotify.com/web-api/code-examples/#wrappers">Web API wrappers</Link>
              </Fill>
              <Fill>
                <Heading size={4}>Stuck with OAuth?</Heading>
                <Link href="https://developer.spotify.com/web-api/authorization-guide/">Auth Guide</Link>
                <Heading size={4}>Want to try the endpoints?</Heading>
                <Link href="https://developer.spotify.com/web-api/console">API Console</Link>
                <Heading size={4}>Need inspiration?</Heading>
                <Link href="https://developer.spotify.com/showcase/">Application Showcase</Link>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1}>Any doubts?</Heading>
            <Link href="https://twitter.com/SpotifyPlatform">@SpotifyPlatform</Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
