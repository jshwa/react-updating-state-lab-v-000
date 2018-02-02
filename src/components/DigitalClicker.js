import React from 'react';

class DigitalClicker extends React.Component{
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(prevState, props) => ({timesClicked: prevState.timesClicked++});
  }

  render(){
    return(
      <button value={this.state.timesClicked} onClick={handleClick}/>
    )
  }
}

export default DigitalClicker
