import React from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'

import GlobalContext from '../../global-context.js'

import FieldList from './FieldList.jsx'
import ResetDialog from './ResetDialog.jsx'

const useStyles = makeStyles({
    settings: {
        padding: '0 3px'
    },
    hr: {
        margin: '20px 0'
    },
    subject: {
        marginTop: 5,
    },
    body: {
        marginTop: 10
    },
    reset: {
        marginBottom: 10
    }
})


export default function Settings() {
    const classes = useStyles()
    const { body, setBody, subject, setSubject } = React.useContext(GlobalContext)

    const [open, setOpen] = React.useState(false);

    return (
        <div className={classes.settings}>
            <FieldList />
            <hr className={classes.hr} />
            <TextField
                className={classes.subject}
                label="Subject"
                multiline
                variant="outlined"
                value={subject}
                fullWidth
                onChange={e => setSubject(e.target.value)}
            />
            <TextField
                className={classes.body}
                label="Body"
                multiline
                variant="outlined"
                value={body}
                fullWidth
                onChange={e => setBody(e.target.value)}
            />
            <hr className={classes.hr} />
            <Button
                className={classes.reset}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => setOpen(true)}
            >
                RESET EVERYTHING
            </Button>
            <ResetDialog open={open} onClose={() => setOpen(false)} />
        </div>
    )
}