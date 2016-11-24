import $ from 'jquery';
import React from 'react';
import BarrageItem from './BarrageItem';
import BarrageSender from './BarrageSender';
import ReactInterval from 'react-interval';

class BarrageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barrageData: [],
      count: 0
    };
    this.onSend = this.onSend.bind(this);
  }

  onSend(barrageData) {
    this.setState({barrageData: barrageData});
  }

  addItem() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    const barrageItems = this.state.barrageData.map((item, index) => {
      if (index < this.state.count) {
        return <BarrageItem key={item.key} name={item.key}
                            text={item.value.text} roundFinished={this.roundFinished}
        />
      }
    });

    return (
      <div className="barrage-list__container">
        { barrageItems }
        <BarrageSender onSend={this.onSend}/>
        <ReactInterval timeout={2000} enabled={true} callback={() => this.addItem()}/>
      </div>
    )
  }
}

export default BarrageList;
