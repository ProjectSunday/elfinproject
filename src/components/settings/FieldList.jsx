import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import GlobalContext from '../../global-context.js'

import Field from './Field.jsx'

const useStyles = makeStyles({
    add: {
        marginTop: 10
    }
})

export default function FieldList() {
    const classes = useStyles()
    const { fields, addField } = React.useContext(GlobalContext)

    return (
        <div>
            {fields.map(f => <Field key={f.id} field={f} />)}
            <Button
                className={classes.add}
                variant="outlined"
                color="primary"
                size="large"
                onClick={addField}
            >
                Add Custom Field
            </Button>
        </div>
    )
}