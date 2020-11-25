import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import GlobalContext from '../global-context.js'

import TopBar from './TopBar.jsx'
import Main from './main/Main.jsx'
import Settings from './settings/Settings.jsx'

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

export default function App() {
    const classes = useStyles()
    const { view } = React.useContext(GlobalContext)

    let content;
    if (view === 'main') {
        content = <Main />
    } else {
        content = <Settings />
    }

    return (
        <div className={classes.app}>
            <TopBar />
            {content}
        </div >
    )
}
