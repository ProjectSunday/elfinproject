import React from 'react'
import styled from 'styled-components'
import { AppBar, IconButton, Typography, Toolbar, makeStyles } from '@material-ui/core'
import { ArrowBack, SettingsOutlined } from '@material-ui/icons';
import GlobalContext from '../global-context'


const useStyles = makeStyles(() => ({
    toolbar: {
        paddingLeft: state => state.view === 'main' ? '16px' : '5px'
    },
    title: {
        flexGrow: 1
    },
    settingsIcon: {
        color: '#fff'
    }
}))

export default function TopBar() {
    const { state, setState } = React.useContext(GlobalContext)
    const { view } = state
    const classes = useStyles(state);

    const settingsClick = () => {
        setState({
            ...state,
            view: 'settings'
        })
    }

    const backClick = () => {
        setState({
            ...state,
            view: 'main'
        })
    }

    const backArrow = view === 'main' ? null : (
        <IconButton aria-label="delete" size="medium" onClick={backClick} >
            <ArrowBack className={classes.settingsIcon} />
        </IconButton>
    )

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {backArrow}
                <Typography variant="h6" className={classes.title}>Email Generator</Typography>
                <IconButton aria-label="delete" size="medium" onClick={settingsClick} >
                    <SettingsOutlined className={classes.settingsIcon} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}