import React, { Component } from 'react';

export class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    }
    this.play = this.play.bind(this);
  };

  play() {
    this.setState({ play: true });
  }

  render() {
    const { src, currentIndex, isVideoPlaying, onPlay } = this.props;

    const videoSrc = 'https://www.youtube.com/embed/' + src[currentIndex].videoId + '?autoplay=1'
    const thumb = 'http://img.youtube.com/vi/' + src[currentIndex].videoId + '/0.jpg'


    return (
      <div className="full-width stripe_6">
        <div className="watch-youtube-block">
          <div className="watch-vid-container watch-vid-preview" onClick={onPlay} style={{ backgroundImage: `url(${thumb})` }}>

            <div className="player-content">

              {(isVideoPlaying === true)
                ? <div className="embed-container">
                  <iframe
                    src={videoSrc}
                    width="560"
                    height="315"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                  />
                </div>
                : <span className={"play-button " + ((isVideoPlaying === true) ? 'is-hidden' : 'is-visible')}>PLAY</span>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

VideoPlayer.defaultProps = {
  playerSize: 'default',
};

