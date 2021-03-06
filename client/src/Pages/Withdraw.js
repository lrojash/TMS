import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import CustomerNavBar from '../components/CustomerNavBar'
import { __Update, __GetAccount } from '../services/AccountServices'


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { SetAmount, SetAccountFrom, SetAccountTypeFrom, UpdateBalance } from '../store/actions/AccountActions'


import '../styles/Action.css'


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

    
    let checkingAccounts = props.accountState.accounts[0].checking
    let savingAccounts = props.accountState.accounts[0].saving
    let accounts = [...checkingAccounts, ...savingAccounts]


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.name === 'amount') {
            props.setAmount(e.target.value)
        }
        else {
            let accountNumber = e.target.value
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
        let amount = props.accountState.amount
        let accountNumber = props.accountState.accountFrom
        let action = "withdraw"
        let customerNumber = props.customerState.searchTerm

        try {
            let account = await __GetAccount({ accountNumber, customerNumber })
            let accountType = props.setType(account)
            let accountAction = await __Update({ amount, accountNumber, action, customerNumber, accountType })
            if (accountAction) {
                alert("Withdraw Successful")
                props.updateAccount(accountNumber, accountAction[1][0].balance, accountType.payload)
                props.history.push('/customerInfo')
            }
        } catch (error) {
            throw error
        }

    }





    return (
        <div>
            <CustomerNavBar {...props} />
            {/* <Button className={classes.button} onClick={handleOpen}>
                Select Account
            </Button> */}
            <div className="action-form">
                <h3 className="action-title">Select Account</h3>
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
                                checkingAccounts.map((account, index) => (
                                    <MenuItem key={index} value={account.checking_number}>{account.type}-{account.balance}</MenuItem>
                                ))
                            }
                            {
                                savingAccounts.map((account, index) => (
                                    <MenuItem key={index} value={account.saving_number}>{account.type}-{account.balance}</MenuItem>
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
        setType: (type) => dispatch(SetAccountTypeFrom(type)),
        updateAccount: (account, balance, type) => dispatch(UpdateBalance(account, balance, type))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Withdraw)