import ApiClient from './ApiClient'

export const __Update = async (customerData) => {
    
    try {
        const res = await ApiClient.put('/account/action', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __Deposit = async (customerData) => {
    try {
        const res = await ApiClient.put('/account/action', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAccount = async(account) => {
    try{
        const res = await ApiClient.post('/account/type', account)
        return res.data
    } catch(error) {
        throw error 
    }
}