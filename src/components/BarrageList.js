import $ from 'jquery';
import React from 'react';
import BarrageItem from './BarrageItem';
import BarrageSender from './BarrageSender';

class BarrageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barrageData: []
    };
    this.onSend = this.onSend.bind(this);
  }

  onSend(barrageData) {
    this.setState({barrageData: barrageData});
  }

  calculateBottom() {
    const window_height = $(window).height() - 100;
    return Math.floor(Math.random() * window_height + 40);
  }

  render() {
    const bottom = this.calculateBottom();

    const barrageItems = this.state.barrageData.map((item) => {
      return <BarrageItem key={item.key} name={item.key} text={item.value.text} bottom={bottom} />
    });

    return (
      <div>
        { barrageItems }
        <BarrageSender onSend={this.onSend}/>
      </div>
    )
  }
}

export default BarrageList;
