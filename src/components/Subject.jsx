import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 10,
    },
    content: {
        '&:last-child': {
            paddingBottom: 16,
        }
    },
    subject: {
        // marginBottom: 12,
    },
});

export default function Subject({ subject }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                    Subject
                </Typography>
                <Typography className={classes.subject} color="textSecondary">{subject}</Typography>
            </CardContent>
        </Card>
    );
}
