import React from 'react'
import Landing from './pages';
import { ThemeProvider } from 'styled-components'
import constants from 'data/constants'
import ModalContext from 'context/ModalContext'

export default () =>
    <ModalContext >
        {(props) =>
            <ThemeProvider theme={constants}>
                <Landing />
            </ThemeProvider>
        }
    </ModalContext>

