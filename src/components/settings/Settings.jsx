import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

import GlobalContext from '../../global-context.js'

import FieldList from './FieldList.jsx'

const useStyles = makeStyles({
    settings: {
        padding: '0 3px'
    },
    textField: {
        marginTop: 10
    }
})

export default function Settings() {
    const classes = useStyles()
    const { settings } = React.useContext(GlobalContext)
    const { body, subject } = settings
    return (
        <div className={classes.settings}>
            <FieldList />
            <hr />
            <TextField
                className={classes.textField}
                label="Subject"
                multiline
                variant="outlined"
                value={subject}
                fullWidth
            />
            <TextField
                className={classes.textField}
                label="Body"
                multiline
                variant="outlined"
                value={body}
                fullWidth
            />
        </div>
    )
}