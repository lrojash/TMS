import ApiClient from './ApiClient'

export const __Update = async (customerData) => {
    console.log('inside services', customerData)
    try {
        const res = ApiClient.put('/account/action', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __Deposit = async (customerData) => {
    try {
        const res = ApiClient.put('/accounst/deposit', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}