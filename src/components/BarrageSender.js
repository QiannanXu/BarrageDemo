import React from 'react';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';
import ReactFireMixin from 'reactfire';

const BarrageSender = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      barrages: []
    }
  },

  componentDidMount: function () {
    const items = [];

    this.firebaseRef = firebase.database().ref("items");
    this.firebaseRef.on("child_added", function (dataSnapshot) {
      items.push(dataSnapshot.val());
      this.setState({
        barrages: items
      });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.firebaseRef.off();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    const barrageContent = this.refs.barrageContent.value;
    if (barrageContent) {
      this.firebaseRef.push({
        text: barrageContent
      });
    }
  },

  render: function () {
    return (
      <div>
        <input ref="barrageContent" className="barrage__input" placeholder="Please input barrage"/>
        <Button bsStyle='primary' onClick={this.handleSubmit}>Send</Button>
      </div>
    )
  }
});
export default BarrageSender;
