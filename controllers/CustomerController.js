const { Customer } = require('../models')

const { Op, literal, fn, col } = require('sequelize')


const GetCustomer = async (req, res) => {

    console.log('inside controller', req.body)
    try {
        if (req.body.customerID) {
            let customerId = req.body.customerId
            console.log('after seeting it', customerId)
            let customer = await Customer.findOne({
                where: {
                    id: customerId
                }
            })
            res.send(customer)
        }
        let { body } = req
        const { firstName, lastName, dob } = body
        let customer = await Customer.findOne({
            where: {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dob
            }
        })
        res.send(customer)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCustomer,
}