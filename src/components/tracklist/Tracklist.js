import React from 'react';
import './Tracklist.css'
import Track from '../track/Track';

class Tracklist extends React.Component {
  render() {
    return(
      <div className="Tracklist">
        {this.props.tracks.map(track => {
          return <Track key={track.id}
                        track={track}/>
          })
        }
      </div>
    )
  }
};

export default Tracklist;
