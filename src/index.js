import React from 'react';
import ReactDOM from 'react-dom';
import {initFirebase} from './service/firebase';
import BarrageList from './components/BarrageList';

initFirebase();

ReactDOM.render(<BarrageList />, document.getElementById('app'));
