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
    const { settings } = React.useContext(GlobalContext)
    const { fields } = settings

    return (
        <div>
            {fields.map((f, i) => <Field key={f.name} field={f} />)}
            <Button
                className={classes.add}
                variant="outlined"
                color="primary"
                size="large"
            >
                Add Custom Field
            </Button>
        </div>
    )
}