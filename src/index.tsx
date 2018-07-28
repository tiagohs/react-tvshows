import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@app/config/styled/theme';
import store from '@app/redux';

import '@app/assets/css/styles.css';
import Root from '@app/ui/pages/Root';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <Root />
        </ThemeProvider>
    </Provider>
);

render(<App />, document.getElementById('root'));
