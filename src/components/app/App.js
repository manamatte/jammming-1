import React from 'react';
import './App.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import Playlist from '../playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        name: '',
        artist: '',
        album: '',
        id: '',
      ],
      playlistName: '',
      playlistTracks: [
        name: '',
        artist: '',
        album: '',
        id: '',
      ]
    };

    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } return track;
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
};

export default App;
