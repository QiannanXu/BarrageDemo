import $ from 'jquery';
import React from 'react';
import ReactInterval from 'react-interval';

class BarrageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {marginRight: 0};
    this.move = this.move.bind(this);
  }

  move() {
    const window_width = $(window).width() + 500;
    let i = this.state.marginRight;

    if (i < window_width) {
      this.setState({marginRight: this.state.marginRight + 1})
    }
  }

  render() {
    const {name, text} = this.props;

    const className = `barrage-item ${name}`;

    return (
      <div className={className} style={{bottom: this.props.bottom, marginRight: this.state.marginRight}}>
        <span className="barrage-item__content">Hello {text}</span>

        <ReactInterval timeout={6} enabled={true} callback={() => this.move()}/>
      </div>
    )
  }
}

export default BarrageItem;
