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
    content: {
        marginTop: 56
    },
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
            <div className={classes.content}>
                {content}
            </div>
        </div >
    )
}
