import './App.css';
import React from 'react';
import soundsJs from './Sounds';
import Box from './Box';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clickedKey: '', activatedKey: '' };
    this.handleBoxClicked = this.handleBoxClicked.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
    this.handleKeyReleased = this.handleKeyReleased.bind(this);
    this.keyMap = {};
    for (let i = 0; i < soundsJs.length; i++) {
      this.keyMap[soundsJs[i].key] = soundsJs[i].key + " is playing";
    }
  }

  handleBoxClicked(text) {
    this.setState({ clickedKey: this.keyMap[text] });
  }

  handleKeyPressed(event) {
    const key = event.key.toUpperCase();
    if (this.state.activatedKey !== key && this.keyMap[key] !== undefined) {
      this.setState({ clickedKey: this.keyMap[key], activatedKey: key});
    }
  }

  handleKeyReleased() {
    this.setState({ activatedKey: '' })
  }
  render() {
    const { activatedKey } = this.state;
    return (
      <div className='outer-container' tabIndex='0' onKeyDown={this.handleKeyPressed} onKeyUp={this.handleKeyReleased}>
        <div  className='inner-container' id="drum-machine" >
          <div id="display">
            {this.state.clickedKey}
          </div>
          <div id="pad-bank">
            {soundsJs.map(sound =>
              <Box
                key={sound.key}
                active={sound.key === activatedKey}
                text={sound.key}
                mp3={sound.mp3}
                onClick={this.handleBoxClicked} />)}
          </div>
        </div>
      </div>
      );
  }
}

export default App;
