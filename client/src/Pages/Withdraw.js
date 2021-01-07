import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import CustomerNavBar from '../components/CustomerNavBar'


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


import { NewAmountFrom, NewAmountTo, WithdrawAccount } from '../store/actions/AccountActions'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Withdraw = (props) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        console.log('changin: ', e.target)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const accounts = [props.accountState.accounts[0].checkingAccounts[0], props.accountState.accounts[0].savingsAccounts[0]]


    return (
        <div>
            <Button className={classes.button} onClick={handleOpen}>
                Select Account
        </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    // value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        accounts.map((account, index) => (
                            <MenuItem key={index} value={account.accountType}>{account.accountType}</MenuItem>
                        ))
                    }
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        accountState: state.accountState,
        customerState: state.customerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        newAmountFrom: (amount) => dispatch(NewAmountFrom(amount)),
        newAmountTo: (amount) => dispatch(NewAmountTo(amount))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Withdraw)