import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, IconButton, TextField } from '@material-ui/core'
import { HighlightOff } from '@material-ui/icons'

import GlobalContext from '../../global-context.js'

const useStyles = makeStyles({
    field: {
        maxWidth: 500,
        marginTop: 5,
        padding: '0 5px 5px 5px',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        '&:last-child': {
            padding: 0
        }
    },
    left: {
        width: '100%',
    },
    textField: {
        marginTop: 10
    },
    delete: {
        color: 'red'
    }
})

export default function Field({ field }) {
    const classes = useStyles()
    const { id, name, match } = field
    const { deleteField, updateField } = React.useContext(GlobalContext)

    const onDelete = () => {
        deleteField(id)
    }

    const onChange = (key) => (e) => {
        updateField({
            ...field,
            [key]: e.target.value
        })
    }

    return (
        <Card className={classes.field}>
            <CardContent className={classes.content}>
                <div className={classes.left}>
                    <TextField
                        className={classes.textField}
                        label="Name"
                        value={name}
                        variant="outlined"
                        fullWidth
                        onChange={onChange('name')}
                    />
                    <TextField
                        className={classes.textField}
                        label="Match"
                        value={match}
                        variant="outlined"
                        fullWidth
                        onChange={onChange('match')}
                    />
                </div>
                <div>
                    <IconButton aria-label="delete" onClick={onDelete}>
                        <HighlightOff className={classes.delete} size="large" />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}