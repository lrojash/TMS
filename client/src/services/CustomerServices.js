import ApiClient from './ApiClient'

export const __GetCustomer = async (userData) => {
    try{
        const res = await ApiClient.post('/customer', userData)
        return res.data
    } catch(error) {
        throw error 
    }
}