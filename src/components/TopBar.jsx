import React from 'react'
import styled from 'styled-components'
import { AppBar, IconButton, Typography, Toolbar, makeStyles } from '@material-ui/core'
import { SettingsOutlined } from '@material-ui/icons';
import GlobalContext from '../global-context'


const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1
    },
    settingsIcon: {
        color: '#fff'
    }
}))

export default function TopBar() {
    const classes = useStyles();
    const { state, setState } = React.useContext(GlobalContext)

    const onClick = () => {
        setState({
            ...state,
            view: 'settings'
        })
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Email Generator</Typography>
                <IconButton aria-label="delete" size="medium" onClick={onClick} >
                    <SettingsOutlined className={classes.settingsIcon} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}