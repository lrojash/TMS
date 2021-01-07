import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import CustomerNavBar from '../components/CustomerNavBar'
import TextField from '@material-ui/core/TextField';

import { NewAmountFrom, NewAmountTo, WithdrawAccount } from '../store/actions/AccountActions'

const Withdraw = (props) => {
    console.log('inside withdraw', props)

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     props.newAmountFrom(e.target.value)

    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('after setting: ', props.accountState)
    // }
 
    return (
        <div className="withdraw-page">
            {/* <CustomerNavBar {...props} />
            <h5 className="withdraw-title">Widthraw</h5>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className='to-account'>
                    <TextField
                        id="checking account"
                        select
                        label="select"
                        value="checking account 1"
                        helperText="Select An Account"
                    >

                    </TextField>
                    <TextInput
                        placeholder="Amount"
                        name="amountTo"
                        type="amountTo"
                        onChange={handleChange}
                    />
                </div>
                <button className="confirm">
                    CONFIRM
                </button>
            </form> */}
            <div>
                <h1>works</h1>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        accountState: state.accountState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        newAmountFrom: (amount) => dispatch(NewAmountFrom(amount)),
        newAmountTo: (amount) => dispatch(NewAmountTo(amount))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Withdraw)