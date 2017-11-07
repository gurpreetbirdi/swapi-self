import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const middleware = [ thunk ]


const store = createStore(
	reducer,applyMiddleware(...middleware)
	);

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
