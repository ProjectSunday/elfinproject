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
        maxWidth: 500,
    }
})

const createHref = (to, subject, body, fields) => {
    let s = subject
    let b = body
    let formattedSubject = subject
    let formattedBody = body
    for (const f of fields) {
        s = s.replaceAll(f.match, f.value)
        b = b.replaceAll(f.match, f.value)
        formattedSubject = formattedSubject.replaceAll(f.match, `<b>${f.value || f.match}</b>`)
        formattedBody = formattedBody.replaceAll(f.match, `<b>${f.value || f.match}</b>`)
    }
    b = encodeURIComponent(b)
    return [`mailto:${to}?subject=${s}&body=${b}`, formattedSubject, formattedBody]
}

export default function Main() {
    const classes = useStyles()

    const { toEmail, subject, body, fields } = React.useContext(GlobalContext)

    const [href, formattedSubject, formattedBody] = createHref(toEmail, subject, body, fields)

    return (
        <div className={classes.container}>
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

            <Form />
            <Subject subject={formattedSubject} />
            <Body body={formattedBody} />

        </div>
    )
}
