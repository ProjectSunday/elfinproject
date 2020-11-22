import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core';

import TopBar from './components/TopBar.jsx'
import Form from './components/Form.jsx'
import Subject from './components/Subject.jsx'
import Body from './components/Body.jsx'

const AppRoot = styled.div`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;


const CreateButton = styled.a`
    background-color: #90caf9;
    color: #000000de;
    font-size: 1rem;
    padding: 10px 26px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        background-color: #648dae;
    }
`

const useStyles = makeStyles({
    container: {
        padding: 10
    },
    generate: {
        // flexGrow: 1,
        marginTop: 10,
        maxWidth: 500,
        // width: '100%',
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
    // const [body, setBody] = React.useState('')
    // const onChange = (e) => {

    //     setBody(e.target.value)
    // }

    // console.log('<index.js:57> fields', fields)

    // const subject = 'sjubeject'
    // const body = 'body'
    const href = `mailto:someemail@blah.com?subject=${subject}&body=${body}`
    return (
        <AppRoot>
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
        </AppRoot >
    )
}

render(<App />, document.getElementById('root'))