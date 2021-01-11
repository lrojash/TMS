import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import TextInput from './TextInput'
import '../styles/BalanceSheet.css'
import { setTellerDrawer } from '../store/actions/TellerActions'

const BalanceSheet = (props) => {
    const [penny, setPenny] = useState(0)
    const [nickel, setNickel] = useState(0)
    const [dime, setDime] = useState(0)
    const [quarter, setQuarter] = useState(0)
    const [halfDollar, setHalfDollar] = useState(0)
    const [ones, setOnes] = useState(0)
    const [fives, setFives] = useState(0)
    const [tens, setTens] = useState(0)
    const [twenties, setTwenties] = useState(0)
    const [fifties, setFifties] = useState(0)
    const [hundreds, setHundreds] = useState(0)
    const [total, setTotal] = useState(0)


    // const getTotal = () => {
    //     // return (parseFloat(penny) + parseFloat(nickel) + parseFloat(dime) + parseFloat(quarter) + parseFloat(halfDollar) + parseFloat(ones) + parseFloat(fives) + parseFloat(tens) + parseFloat(twenties) + parseFloat(fifties) + parseFloat(hundreds))
    //     console.log('inside total function', hundreds)
    //     // setTotal(parseFloat(penny) + parseFloat(nickel) + parseFloat(dime) + parseFloat(quarter) + parseFloat(halfDollar) + parseFloat(ones) + parseFloat(fives) + parseFloat(tens) + parseFloat(twenties) + parseFloat(fifties) + parseFloat(hundreds))
    //     return
    // }
    useEffect(() => {
        setTotal((parseFloat(penny) + parseFloat(nickel) + parseFloat(dime) + parseFloat(quarter) + parseFloat(halfDollar) + parseFloat(ones) + parseFloat(fives) + parseFloat(tens) + parseFloat(twenties) + parseFloat(fifties) + parseFloat(hundreds)).toFixed(2))
    }, )

    const handleChange = (e, setFunction) => {
        e.preventDefault()
        console.log('inside change', e.target.name)
        setFunction(parseFloat(e.target.name) * parseFloat(e.target.value))
        console.log('after setting it: ', hundreds)
        // getTotal()
    }

    const handleClick = (e) => {
        console.log('worked', props)
        props.createDrawer(total)
    }

    return (
        <div className="balance-sheet-container">
            {console.log('inside return', hundreds)}
            <h3 className="balance-title">Drawer</h3>
            <div className="table">
                <div className="denominations">
                    <input className="balance-values" value="$100" />
                    <input className="balance-values" value="$50" />
                    <input className="balance-values" value="$20" />
                    <input value="$10" className="balance-values" />
                    <input value="$5" className="balance-values" />
                    <input value="$1" className="balance-values" />
                    <input value="$.50" className="balance-values" />
                    <input value="$.25" className="balance-values" />
                    <input value="$.10" className="balance-values" />
                    <input value="$.05" className="balance-values" />
                    <input value="$.01" className="balance-values" />
                </div>
                <div className="count">
                    <input name="100" type="number" onChange={(e) => handleChange(e, setHundreds)} className="balance-values" />
                    <input name="50" type="number" onChange={(e) => handleChange(e, setFifties)} className="balance-values" />
                    <input name="20" type="number" onChange={(e) => handleChange(e, setTwenties)} className="balance-values" />
                    <input name="10" type="number" onChange={(e) => handleChange(e, setTens)} className="balance-values" />
                    <input name="5" type="number" onChange={(e) => handleChange(e, setFives)} className="balance-values" />
                    <input name="1" type="number" onChange={(e) => handleChange(e, setOnes)} className="balance-values" />
                    <input name=".5" type="number" onChange={(e) => handleChange(e, setHalfDollar)} className="balance-values" />
                    <input name=".25" type="number" onChange={(e) => handleChange(e, setQuarter)} className="balance-values" />
                    <input name=".10" type="number" onChange={(e) => handleChange(e, setDime)} className="balance-values" />
                    <input name=".05" type="number" onChange={(e) => handleChange(e, setNickel)} className="balance-values" />
                    <input name=".01" type="number" onChange={(e) => handleChange(e, setPenny)} className="balance-values" />
                </div>
            </div>
            <div className="total">
                <h3>total: ${total}</h3>
            </div>
            <button className="submit-balance" onClick={handleClick}>
                SUBMIT
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tellerSate: state.tellerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        createDrawer: (amount) => dispatch(setTellerDrawer(amount))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(BalanceSheet)

