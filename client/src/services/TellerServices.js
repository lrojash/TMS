import ApiClient from './ApiClient'

export const __LoginTeller = async (userData) => {
    try{
        console.log('inside teller services', userData)
        const res = await ApiClient.post('/teller/login', userData)
        return res.data
    } catch(error) {
        throw error 
    }
}

export const __CreateTeller = async (userData) => {
    console.log('inside create: ', userData)
    try{
        const res = await ApiClient.post('/teller/create', userData)
        return res.data
    } catch(error) {
        throw error 
    }
}

