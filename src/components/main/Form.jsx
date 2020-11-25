import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

import GlobalContext from '../../global-context.js'

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        maxWidth: 500,
        width: '100%',
        marginTop: 10,
    }
}))

export const useFields = (blankFields) => {
    const [fields, _setFields] = React.useState(() => {
        return blankFields.map(f => ({ ...f, value: '' }))
    })

    const updateField = (field) => {
        const newFields = fields.map(f => f.id === field.id ? field : f)
        _setFields(newFields)
    }

    return [fields, updateField]
}

export default function Form() {
    const classes = useStyles();

    const { settings, updateSettings } = React.useContext(GlobalContext)
    const [fields, updateField] = useFields(settings.fields)

    const onChange = (field) => (e) => {
        updateField({
            ...field,
            value: e.target.value
        })
    }


    return (
        <div className={classes.form}>
            {fields.map(f => (
                <TextField
                    className={classes.textField}
                    key={f.id}
                    label={f.name}
                    variant="outlined"
                    value={f.value}
                    onChange={onChange(f)}
                />
            ))}
        </div>
    )
}