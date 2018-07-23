import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Home from './ui/pages/Home';

import store from './redux';

const App = () => (
    <Provider store={store}>
        <Home />
    </Provider>
);

render(<App />, document.getElementById('root'));
