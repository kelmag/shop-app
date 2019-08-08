import React from 'react';
import Landing from './pages';
import { ThemeProvider } from 'styled-components'
import constants from 'data/constants'


export default () => (
    <ThemeProvider theme={constants}>
        <Landing />
    </ThemeProvider>


)