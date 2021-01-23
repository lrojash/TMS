import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import '../styles/CustomerInfo.css'

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
        // <div className={classes.root}>
        //     <Grid container spacing={2} style={{ width: 350, whiteSpace: 'nowrap' }}>
        //         <Grid item xs={12} md={6}>
        //             <Typography variant="h2" className={classes.title}>
        //                 {`${customerData.firstName} ${customerData.lastName}`}
        //             </Typography>
        //             <div className={classes.demo}>
        //                 <List>
        //                     <ListItemText
        //                         primary={customerData.dateOfBirth} />
        //                     <ListItemText
        //                         primary="Active" />
        //                 </List>
        //             </div>
        //         </Grid>
        //     </Grid>
        // </div>
        <div className="customer-info">
            <section className="headers">
                <h2>Name:</h2>
                <h2>Date of Birth:</h2>
                <h2>Phone Number:</h2>
                <h2>Address:</h2>
                <h2>City, State:</h2>
            </section>
            <section className="customer-details">
                <h2>{customerData.firstName} {customerData.lastName}</h2>
                <h2>{customerData.dateOfBirth}</h2>
                <h2>1-800-123-123</h2>
                <h2>123 Main St</h2>
                <h2>Springfield, Il</h2>
            </section>
        </div>
    );
}


