import ApiClient from './ApiClient'

export const __LoginTeller = async (userData) => {
    try{
      
        const res = await ApiClient.post('/teller/login', userData)
        return res.data
    } catch(error) {
        throw error 
    }
}

export const __CreateTeller = async (userData) => {
    try{
        const res = await ApiClient.post('/teller/create', userData)
        return res.data
    } catch(error) {
        throw error 
    }
}

export const __BalanceTeller = async (userData) => {
    try {
        const res = await ApiClient.post('/teller/balance', userData)
        return res.data
    } catch(error) {
        throw error
    }
}
