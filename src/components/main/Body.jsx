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
    body: {
        height: '100%',
        minHeight: 500,
        padding: '10px 2px',
    },
});

export default function Body({ body }) {
    const classes = useStyles();
    const b = body.replaceAll(/(\r\n|\n|\r)/gm, '<br />')

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                    Body
                </Typography>
                <Typography className={classes.body} color="textSecondary" component="div" dangerouslySetInnerHTML={{ __html: b }}></Typography>
            </CardContent>
        </Card>
    );
}
