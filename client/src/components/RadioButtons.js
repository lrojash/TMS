import React, { useState } from "react";
import PropTypes from "prop-types";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const theme = createMuiTheme({
    typography: {
        fontSize: 1
    }
})
const styles = (theme) => ({
    root: {
        display: "flex"
    },
    formControl: {
        margin: theme.spacing.unit * 3
    },
    group: {
        margin: `${theme.spacing.unit}px 0`
    },
});

class RadioButtonsGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            admin: ''
        }
    }


    handleChange = (event) => {
        this.setState({ admin: event.target.value });
        console.log(this.state)
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">ADMIN</FormLabel>
                    <RadioGroup
                        aria-label="admin"
                        name="admin"
                        className={classes.group}
                        value={this.state.value}
                        onChange={(e) => this.props.onChange(e)}
                    >
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="YES"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="primary" />}
                            label="NO"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtonsGroup);
