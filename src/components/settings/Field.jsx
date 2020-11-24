import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, IconButton, TextField } from '@material-ui/core'
import { HighlightOff } from '@material-ui/icons'

const useStyles = makeStyles({
    field: {
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
    textField: {
        marginTop: 10
    },
    delete: {
        color: 'red'
    }
})

export default function Field({ field }) {
    const classes = useStyles()
    const { name, match } = field

    const onDelete = () => {
        console.log('<Field.jsx:32> delete')
    }

    return (
        <Card className={classes.field}>
            <CardContent className={classes.content}>
                <div>
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
                </div>
                <div>
                    <IconButton aria-label="delete" size="medium" onClick={onDelete}>
                        <HighlightOff className={classes.delete} />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}