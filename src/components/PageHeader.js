import React from 'react'
import { Card, Paper, Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles (theme =>({

    root: {
        backgroundColor: '#fdfdff'
    },
    PageHeader:{
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageicon:{
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pagetitel:{
        paddingLeft: theme.spacing(4),
    }

}))


export default function PageHeader({ title, subtitle, status, icon}) {
    const classes = useStyles();
    return (
        
        <Paper elevation={0}  square className={classes.root}>
            <div className={classes.PageHeader}>
                <Card className={classes.pageicon}>
                {icon}
                </Card>
                <div className={classes.pagetitel}>
                    <Typography variant="h6" component="div">{title}</Typography>
                        <Typography variant="subtitle1" component="div">{subtitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}




