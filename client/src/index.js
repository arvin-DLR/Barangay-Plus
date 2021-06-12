<<<<<<< HEAD
<<<<<<< HEAD
 import React from 'react';
=======
import React from 'react';
>>>>>>> parent of 3a7199c (part 2 update)
=======
  
import React from 'react';
>>>>>>> parent of 459b382 (files update)
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, document.getElementById('root'));