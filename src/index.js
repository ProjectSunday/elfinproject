import React from 'react'
import { render } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core';

import TopBar from './components/TopBar.jsx'
import Form from './components/Form.jsx'
import Subject from './components/Subject.jsx'
import Body from './components/Body.jsx'

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



function App() {

    const classes = useStyles()

    const [fields, setFields] = React.useState({
        clientName: '',
        ticketNumber: '',
    })
    const [subject, setSubject] = React.useState(`This is the subject %ticket_number%`)
    const [body, setBody] = React.useState(`Hello %client_name%. This is the email body. This is the email body. This is the email body. This is the email body. This is the email body.`)
    const href = `mailto:someemail@blah.com?subject=${subject}&body=${body}`

    return (
        <div className={classes.root}>
            <TopBar />
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
        </div >
    )
}

render(<App />, document.getElementById('root'))