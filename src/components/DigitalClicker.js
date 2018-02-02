import React from 'react';

class DigitalClicker extends React.Component{

  this.state = {
    timesClicked: 0
  }

  addOne = () => {
    this.setState({timesClicked: num++});
  }
  
  render(){
    return(
      <button value={this.state.timesClicked} onClick={addOne}/>
    )
  }
}

export default DigitalClicker
