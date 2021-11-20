import React from 'react';
import {render} from 'react-dom';
import { App } from './components/app';
import './index.css';


module.hot && module.hot.accept(() => location.reload());

render(<App/>, document.getElementById('root'));
