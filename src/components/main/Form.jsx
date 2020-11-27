import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField } from '@material-ui/core'
import { Assignment } from '@material-ui/icons'

import GlobalContext from '../../global-context.js'

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    toEmail: {
        maxWidth: 500,
        marginTop: 10,
    },
    textField: {
        maxWidth: 500,
        marginTop: 10,
    }
}))

export const useFields = (blankFields) => {
    const [fields, _setFields] = React.useState(() => {
        return blankFields.map(f => ({ ...f, value: '' }))
    })

    const updateField = (field) => {
        const newFields = fields.map(f => f.id === field.id ? field : f)
        console.log('<Form.jsx:31> field', field)
        _setFields(newFields)
    }

    return [fields, updateField]
}

export default function Form() {
    const classes = useStyles();

    const { fields, updateField, toEmail, setToEmail } = React.useContext(GlobalContext)

    const onChange = (field) => (e) => {
        updateField({
            ...field,
            value: e.target.value
        })
    }

    const onPaste = (field) => async () => {
        const value = await navigator.clipboard.readText()
        updateField({
            ...field,
            value: value
        })
    }

    const onEmailPaste = async () => {
        const value = await navigator.clipboard.readText()
        setToEmail(value)
    }

    return (
        <form className={classes.form}>
            <FormControl className={classes.toEmail} variant="outlined">
                <InputLabel htmlFor="to-email">To Email</InputLabel>
                <OutlinedInput
                    id="to-email"
                    value={toEmail}
                    onChange={e => setToEmail(e.target.value)}
                    label="To Email"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={onEmailPaste}>
                                <Assignment />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            {fields.map(f => (
                <FormControl
                    className={classes.textField}
                    key={f.id}
                    variant="outlined"
                >
                    <InputLabel htmlFor={`field${f.id}`}>{f.name}</InputLabel>
                    <OutlinedInput
                        id={`field${f.id}`}
                        value={f.value}
                        onChange={onChange(f)}
                        label={f.name}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={onPaste(f)}>
                                    <Assignment />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

            ))}
        </form>
    )
}
