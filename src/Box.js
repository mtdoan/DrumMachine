import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked() {
    const { text, onClick } = this.props;
    this.audio.play();
    onClick(text);
  }

  componentDidMount() {
    const { text } = this.props;
    const allAudioTags = document.getElementsByClassName("clip");
    for (let i = 0; i < allAudioTags.length; i++) {
      if (allAudioTags[i].id === text) {
        this.audio = allAudioTags[i];
        break;
      }
    }
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.audio.play();
    }
  }

  render() {
    const { text, mp3, active } = this.props;
    let clazzName = "drum-pad";
    if (active) {
      clazzName = "drum-pad active";
    }
    return (
      <div className={clazzName} id={text} onClick={this.handleClicked}>
        {text}
        <audio id={text} src={mp3} className="clip"/>
      </div>
    )
  };
}

export default Box;