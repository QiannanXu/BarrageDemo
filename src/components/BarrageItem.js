import React from 'react';

class BarrageItem extends React.Component {
  render() {
    const {name, text} = this.props;

    const className = `barrage-item ${name}`;
    return (
      <div className={className}>
        <span className="barrage-item__content">Hello {text}</span>
      </div>
    )
  }
}

export default BarrageItem;
