const { Customer, Checking, Saving } = require('../models')

const { Op, literal, fn, col } = require('sequelize')


const GetCustomer = async (req, res) => {

    console.log('inside controller', req.body.customerInfo)
    try {
        if (req.body.customerInfo) {
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
    try {
        let customerId = req.body.customerInfo.customerId
        let checkingAccounts = await Checking.findAll({
            where: {
                customer_number: customerId
            }
        })
        let savingsAccounts = await Saving.findAll({
            where: {
                customer_number: customerId
            }
        })

        let accounts = {
            checkingAccounts,
            savingsAccounts
        }
        console.log(savingsAccounts)
        res.send(accounts)

    } catch (error) {
        throw error
    }
}
module.exports = {
    GetCustomer,
    GetCustomerAccount,
}