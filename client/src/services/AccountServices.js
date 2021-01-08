import ApiClient from './ApiClient'

export const __Withdraw = async (customerData) => {
    console.log('inside services', customerData)
    try {
        const res = ApiClient.put('/account/withdraw', customerData)
        return res.data
    } catch (error) {
        throw error
    }
}