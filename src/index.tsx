import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@app/config/styled/theme';
import store from '@app/redux';
import Home from '@app/ui/pages/Home';

import '@app/assets/css/styles.css';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <Home />
        </ThemeProvider>
    </Provider>
);

render(<App />, document.getElementById('root'));
