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
    this.roundFinished = this.roundFinished.bind(this);
  }

  onSend(barrageData) {
    this.setState({barrageData: barrageData});
  }

  roundFinished(name) {
    const filteredBarrageData = this.state.barrageData.map((item) => {
      return {
        key: item.key,
        value: item.value,
        finished: item.key === name
      }
    });

    this.state = {barrageData: filteredBarrageData};
  }

  render() {
    const barrageItems = this.state.barrageData.map((item) => {
      if (!item.finished) {
        return <BarrageItem key={item.key} name={item.key}
                            text={item.value.text} roundFinished={this.roundFinished}
        />
      }
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
