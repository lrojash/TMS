import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    },
}));


export default function CustomerCard(props) {
    const classes = useStyles();

    let customerData = props.customerState.customer[0]

    return (
        <div className={classes.root}>
            <Grid container spacing={2} style={{ width: 750, whiteSpace: 'nowrap' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" className={classes.title}>
                        {`${customerData.firstName} ${customerData.lastName}`}
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                            <ListItemText
                                primary={customerData.dateOfBirth} />
                            <ListItemText
                                primary="Active" />
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}


