import ApiClient from './ApiClient'

export const __LoginTeller = async (userData) => {
    console.log('inside services: ', userData)
    try{
        const res = await ApiClient.post('/teller/login', userData)
        console.log(res)
        return res.data
    } catch(error) {
        throw error 
    }
}