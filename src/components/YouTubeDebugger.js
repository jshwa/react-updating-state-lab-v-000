import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor (){
    super();
    this.state = {
      js: {
        errors: [],
        user: null,
        settings: {
          bitrate:8,
          video: {
            resolution: '1080p'}
        }
      }
    };
  }

  handleBitClick = () => {
    this.setState({
      bitrate: {
        ..this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      resolution: {
        ..this.state.video,
        resolution: '720p'
      }
    })
  }

  render(){
    return(
      <button className="bitrate" onClick={handleBitClick} />
      <button className='resolution' onClick={handleResClick} />
    )
  }
}

export default YouTubeDebugger
