import React from 'react';
import firebase from 'firebase';

class BarrageSender extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const items = [];

    this.firebaseRef = firebase.database().ref("items");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      items.push({
        key: dataSnapshot.key,
        value: dataSnapshot.val(),
        finished: false
      });
      this.props.onSend(items);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const barrageContent = this.refs.barrageContent.value;
    if (barrageContent) {
      this.firebaseRef.push({
        text: barrageContent
      });
      this.refs.barrageContent.value = '';
    }
  }

  render() {
    return (
      <div className="barrage-sender">
        <h2 className="barrage-sender__link">Send your barrage!</h2>

        <div className="barrage-sender__content">
          <input ref="barrageContent" className="barrage-sender__input" placeholder="Please input barrage"/>
          <button className="barrage-sender__button" onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    )
  }
}

export default BarrageSender;
