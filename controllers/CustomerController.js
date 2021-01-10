const { Customer, Checking, Saving, AccountProfile } = require('../models')

const { Op, literal, fn, col } = require('sequelize')


const GetCustomer = async (req, res) => {

    console.log('inside controller', req.body)
    try {
        if (req.body.customerId) {
            let customerId = req.body.customerId
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
            console.log('after deconstruction: ', firstName)
            let customer = await Customer.findOne({
                where: {
                    // first_name: firstName,
                    // last_name: lastName,
                    date_of_birth: dob
                }
            })
            console.log('after setting it', customer)
            return res.send(customer)
        }
    } catch (error) {
        throw error
    }
}

const GetCustomerAccount = async (req, res) => {
    console.log('inside get customer controller', req.body)

    try {
        let customerNumber = req.body.customerId
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