import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import CustomerNavBar from '../components/CustomerNavBar'
import { __Update } from '../services/AccountServices'


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


import { SetAmount, SetAccountFrom, SetAccountTypeFrom } from '../store/actions/AccountActions'

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

const Deposit = (props) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const accounts = [props.accountState.accounts[0].checkingAccounts[0], props.accountState.accounts[0].savingsAccounts[0]]

    const getAccountInfo = (acctNum) => {
        let acctType = ''
        accounts.forEach(account => {
            if (acctNum === account.accountNumber) {
                acctType = account.accountType
            }
        })
        return acctType
    }


    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.name === 'amount') {
            props.setAmount(e.target.value)
        }
        else {
            let accountNumber = e.target.value
            let accountType = getAccountInfo(accountNumber)
            props.setType(accountType)
            props.setAcct(accountNumber)
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let accountNumber = props.accountState.accountFrom
        let accountType = props.accountState.accountTypeFrom
        let amount = props.accountState.amount
        let action = "deposit"
        try {
            let action = await __Update({ accountNumber, accountType, amount })
        } catch (error) {
            throw error
        }

    }





    return (
        <div>
            <CustomerNavBar {...props} />
            <Button className={classes.button} onClick={handleOpen}>
                Select Account
            </Button>
            <form className="withdraw-form" onSubmit={handleSubmit}>
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
                                <MenuItem key={index} value={account.accountNumber}>{account.accountType}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <TextInput
                    placeholder="AMOUNT"
                    name="amount"
                    type="amount"
                    onChange={handleChange}
                />
                <button className="withdraw-submit">
                    CONFIRM
                 </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        accountState: state.accountState,
        customerState: state.customerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setAmount: (amount) => dispatch(SetAmount(amount)),
        setAcct: (acctNum) => dispatch(SetAccountFrom(acctNum)),
        setType: (type) => dispatch(SetAccountTypeFrom(type))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Deposit)