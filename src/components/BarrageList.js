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

  render() {
    const barrageItems = this.state.barrageData.map((item) => {
      return <BarrageItem key={item.key} name={item.key} text={item.value.text} />
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
