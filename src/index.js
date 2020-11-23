import React from 'react'
import { render } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core';

import { GlobalContextProvider } from './global-context.js'

import App from './components/App.jsx'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
    },
    container: {
        padding: 10
    },
    generate: {
        marginTop: 10,
        maxWidth: 500,
    }
})



function Root() {
    return (
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    )
}

render(<Root />, document.getElementById('root'))