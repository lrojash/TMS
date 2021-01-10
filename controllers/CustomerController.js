const { Customer, Checking, Saving, AccountProfile } = require('../models')

const { Op, literal, fn, col } = require('sequelize')


const GetCustomer = async (req, res) => {

    console.log('inside controller', req.body.customerInfo.customerId)
    try {
        if (req.body.customerInfo.customerId) {
            let customerId = req.body.customerInfo.customerId
            console.log('after seeting it', customerId)
            let customer = await Customer.findOne({
                where: {
                    id: customerId
                }
            })
            return res.send(customer)
        }
        else {
            let { body } = req
            const { firstName, lastName, dob } = body
            let customer = await Customer.findOne({
                where: {
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirth: dob
                }
            })
            return res.send(customer)
        }
    } catch (error) {
        throw error
    }
}

const GetCustomerAccount = async (req, res) => {
    console.log('inside get customer controller', req.body)
    let customerNumber = req.body.customerInfo.customerId
    try {
        let accounts = await AccountProfile.findAll({
            where: {
                customer_number: customerNumber
            },
            include: [
                {
                    model: Checking,
                    attributes: ['balance', 'checking_number'],
                    required: false
                },
                {
                    model: Saving,
                    attributes: ['balance', 'saving_number'],
                    required: false
                }
            ],
        })
        return res.send(accounts)
    } catch (error) {
        throw error
    }
}
module.exports = {
    GetCustomer,
    GetCustomerAccount,
}