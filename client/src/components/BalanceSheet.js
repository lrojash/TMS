import React, {useState} from 'react'
import TextInput from './TextInput'
import '../styles/BalanceSheet.css'

const BalanceSheet = () => {
    const [penny, setPenny] = useState('')
    const [nickel, setNickel] = useState('')
    const [dime, setDime] = useState('')
    const [quarter, setQuarter] = useState('')
    const [halfDollar, setHalfDollar]= useState('')
    const [ones, setOnes] = useState('')
    const [fives, setFives] = useState('')
    const [tens, setTens] = useState('')
    const [twenties, setTwenties] = useState('')
    const [fifties, setFifties] = useState('')
    const [hundreds, setHundreds] = useState('')
    
    const getTotal = () => {
        return (penny + nickel + dime + quarter + halfDollar + ones + fives + tens + twenties + fifties + hundreds)
    }


    const handleChange= (e, setFunction) => {
        e.preventDefault()
        setFunction(e.target.name * e.target.value)
    }
    return (

        <div className="balance-sheet-container">
            {console.log(getTotal())}
            <div className="denominations">
                <TextInput value="$100"/>
                <TextInput value="$50"/>
                <TextInput value="$20"/>
                <TextInput value="$10"/>
                <TextInput value="$5"/>
                <TextInput value="$1"/>
                <TextInput value="$.50"/>
                <TextInput value="$.25"/>
                <TextInput value="$.10"/>
                <TextInput value="$.05"/>
                <TextInput value="$.01"/>
            </div>
            <div className="bill-count">
                <TextInput name="100" type="text" onChange={(e) => handleChange(e, setHundreds)}/>
                <TextInput name="50" type="text" onChange={(e) => handleChange(e, setFifties)}/>
                <TextInput name="20" type="text" onChange={(e) => handleChange(e, setTwenties)}/>
                <TextInput name="10" type="text" onChange={(e) => handleChange(e, setTens)}/>
                <TextInput name="5" type="text" onChange={(e) => handleChange(e, setFives)}/>
                <TextInput name="1" type="text" onChange={(e) => handleChange(e, setOnes)}/>
                <TextInput name=".5" type="text" onChange={(e) => handleChange(e, setHalfDollar)}/>
                <TextInput name=".25" type="text" onChange={(e) => handleChange(e, setQuarter)}/>
                <TextInput name=".10" type="text" onChange={(e) => handleChange(e, setDime)}/>
                <TextInput name=".05" type="text" onChange={(e) => handleChange(e, setNickel)}/>
                <TextInput name=".01" type="text" onChange={(e) => handleChange(e, setPenny)}/>
            </div>
        </div>
    )
}

export default BalanceSheet