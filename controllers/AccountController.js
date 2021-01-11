const { Checking, Saving, AccountProfile, Customer, Tellers } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const UpdateAccountBalance = async (req, res) => {

    let customerNumber = req.body.customerNumber
    let accountNumber = req.body.accountNumber
    let action = req.body.action
    let accountType = req.body.accountType.payload
    let amount = parseFloat(req.body.amount)
    console.log('pre test: ', accountType)
    try {
        let customer = await AccountProfile.findAll({
            where: {
                customer_number: customerNumber
            },
            include: [
                {
                    model: Checking,
                    attributes: ['balance', 'checking_number'],
                    where: {
                        checking_number: accountNumber
                    },
                    required: false
                },
                {
                    model: Saving,
                    attributes: ['balance', 'saving_number'],
                    where: {
                        saving_number: accountNumber
                    },
                    required: false
                }
            ],
        })

        if (action === "deposit") {
            if (accountType === "CHECKING") {
                let checkingBalance = customer[0].dataValues.Checkings[0].dataValues.balance
                let newBalance = parseFloat(checkingBalance) + amount
                let accountUpdate = await Checking.update({ balance: newBalance }, {
                    where: {
                        checking_number: accountNumber
                    },
                    returning: true
                })
                return res.send(true)

            }
            else {
                let savingBalance = customer[0].dataValues.Savings[0].dataValues.balance
                let newBalance2 = parseFloat(savingBalance) + amount
                let accountUpdate2 = await Saving.update({ balance: newBalance2 }, {
                    where: {
                        saving_number: accountNumber
                    },
                    returning: true
                })
                return res.send(true)
            }
        }
        else {
            if (accountType === "CHECKINGS") {
                let checkingBalance = customer[0].dataValues.Checkings[0].dataValues.balance
                let newBalance = parseFloat(checkingBalance) - amount
                let accountUpdate = await Checking.update({ balance: newBalance }, {
                    where: {
                        checking_number: accountNumber
                    },
                    returning: true
                })
                res.send(accountUpdate)

            }
            else {
                let savingBalance = customer[0].dataValues.Savings[0].dataValues.balance
                let newBalance2 = parseFloat(savingBalance) - amount
                let accountUpdate2 = await Saving.update({ balance: newBalance2 }, {
                    where: {
                        saving_number: accountNumber
                    },
                    returning: true
                })
                // console.log('after update: ', accountUpdate2[1][0])
                res.send(true)
            }
        }
    } catch (error) {
        throw error
    }
}

const GetAccount = async (req, res) => {
    let accountNumber = req.body.accountNumber
    let customerNumber = req.body.customerNumber
    try {
        let account = await AccountProfile.findAll({
            where: {
                customer_number: customerNumber
            },
            include: [
                {
                    model: Checking,
                    attributes: ['type'],
                    where: {
                        checking_number: accountNumber
                    },
                    required: false
                },
                {
                    model: Saving,
                    attributes: ['type'],
                    where: {
                        saving_number: accountNumber
                    },
                    required: false
                }
            ],
        })
        console.log('after search: ', account[0].dataValues.Savings)
        let type = account[0].dataValues.Savings
        if (type.length === 0) {
            return res.send('CHECKINGS')
        }
        else {
            return res.send('SAVINGS')
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    UpdateAccountBalance,
    GetAccount
}