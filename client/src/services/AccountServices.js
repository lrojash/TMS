import ApiClient from './ApiClient'

export const __Update = async (customerData) => {
    console.log('inside services', customerData)
    try {
        const res = await ApiClient.put('/account/action', customerData)
        console.log('after put in services: ', res)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __Deposit = async (customerData) => {
    try {
        const res = await ApiClient.put('/account/deposit', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAccount = async(account) => {
    console.log('inside the services', account)
    try{
        const res = await ApiClient.post('/account/type', account)
        return res.data
    } catch(error) {
        throw error 
    }
}