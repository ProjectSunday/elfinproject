import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginTop: 5,
        padding: '0 5px 5px 5px',
    },
    content: {
        padding: 0,
        '&:last-child': {
            padding: 0
        }
    },
    textField: {
        marginTop: 10
    }
})

export default function Field({ field }) {
    const classes = useStyles()
    const { name, match } = field
    return (
        <Card className={classes.field}>
            <CardContent className={classes.content}>
                <TextField
                    className={classes.textField}
                    label="Name"
                    value={name}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.textField}
                    label="Match"
                    value={match}
                    variant="outlined"
                    fullWidth
                />
            </CardContent>
        </Card>
    )
}