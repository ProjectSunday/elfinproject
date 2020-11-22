import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        // flexGrow: 1
        // alignItems: 'stretch'
    },
    textField: {
        maxWidth: 500,
        width: '100%',
        marginTop: 10,
    }
}))

export default function Form({ fields, setFields }) {
    const classes = useStyles();

    const onChange = (key) => (e) => {
        setFields({
            ...fields,
            [key]: e.target.value
        })
    }

    return (
        <div className={classes.root}>
            <TextField
                className={classes.textField}
                label="Ticket Number"
                variant="outlined"
                value={fields.ticketNumber}
                onChange={onChange('ticketNumber')}
            />
            <TextField
                className={classes.textField}
                label="Client Name"
                variant="outlined"
                value={fields.clientName}
                onChange={onChange('clientName')}
            />
        </div>
    )
}