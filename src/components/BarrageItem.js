import $ from 'jquery';
import React from 'react';
import ReactInterval from 'react-interval';

class BarrageItem extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = this.calculateBottom();
    this.state = {marginRight: 0};
    this.move = this.move.bind(this);
  }

  calculateBottom() {
    const window_height = $(window).height() - 100;
    return Math.floor(Math.random() * window_height + 40);
  }

  move() {
    const window_width = $(window).width() + 500;
    let i = this.state.marginRight;

    if (i < window_width) {
      this.setState({marginRight: this.state.marginRight + 1})
    } else {
      this.setState({marginRight: 0});
    }
  }

  render() {
    const {name, text} = this.props;

    const className = `barrage-item ${name}`;

    return (
      <div className={className} style={{bottom: this.bottom, marginRight: this.state.marginRight}}>
        <span className="barrage-item__content">{text}</span>

        <ReactInterval timeout={6} enabled={true} callback={() => this.move()}/>
      </div>
    )
  }
}

export default BarrageItem;
