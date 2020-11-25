import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core';

import GlobalContext from '../../global-context.js'

import TopBar from '../TopBar.jsx'
import Form from './Form.jsx'
import Subject from './Subject.jsx'
import Body from './Body.jsx'

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

const createHref = (fields, subject, body) => {
    let s = subject
    let b = body
    for (const f of fields) {
        s = s.replaceAll(f.match, f.value)
        b = b.replaceAll(f.match, f.value)
    }
    return `mailto:someemail@blah.com?subject=${s}&body=${b}`
}

export default function Main() {
    const classes = useStyles()

    const { settings, updateSettings } = React.useContext(GlobalContext)
    const { subject, body } = settings

    const href = createHref(settings.fields, subject, body)

    return (
        <div className={classes.container}>
            <Form />
            <Subject subject={subject} />
            <Body body={body} />
            <Button
                className={classes.generate}
                fullWidth
                variant="contained"
                color="primary"
                href={href}
                size="large"
            >
                Generate
            </Button>
        </div>
    )
}
