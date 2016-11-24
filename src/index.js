import React from 'react';
import ReactDOM from 'react-dom';
import {initFirebase} from './service/firebase';
import BarrageSender from './components/BarrageSender';

initFirebase();

ReactDOM.render(<BarrageSender />, document.getElementById('app'));
