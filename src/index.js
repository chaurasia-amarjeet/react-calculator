import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const element = () => {
    ReactDOM.hydrate(
        <App />,
        document.getElementById('root'),
      );
}

setInterval(element, 1000);
