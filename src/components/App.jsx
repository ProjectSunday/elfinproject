import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core';

import GlobalContext from '../global-context.js'

import Settings from './settings/Settings.jsx'

import TopBar from './TopBar.jsx'
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

export default function App() {
    const classes = useStyles()

    const [fields, setFields] = React.useState({
        clientName: '',
        ticketNumber: '',
    })
    const [subject, setSubject] = React.useState(`This is the subject %ticket_number%`)
    const [body, setBody] = React.useState(`Hello %client_name%. This is the email body. This is the email body. This is the email body. This is the email body. This is the email body.`)
    const href = `mailto:someemail@blah.com?subject=${subject}&body=${body}`


    const { state } = React.useContext(GlobalContext)
    const { view } = state

    let content;
    if (view === 'main') {
        content = (
            <div className={classes.container}>
                <Form fields={fields} setFields={setFields} />
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
