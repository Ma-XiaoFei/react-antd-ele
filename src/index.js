import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker';

import Container from './component/Layout'
console.log(ReactDOM)
ReactDOM.render(
    <Container/>,
  document.getElementById('root'),
);
serviceWorker.unregister();
