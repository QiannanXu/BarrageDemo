import React from 'react';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';

class BarrageSender extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const items = [];

    this.firebaseRef = firebase.database().ref("items");
    this.firebaseRef.on("child_added", (dataSnapshot) =>  {
      items.push(dataSnapshot.val());
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
      <div>
        <input ref="barrageContent" className="barrage__input" placeholder="Please input barrage"/>
        <Button bsStyle='primary' onClick={this.handleSubmit}>Send</Button>
      </div>
    )
  }
}

export default BarrageSender;
