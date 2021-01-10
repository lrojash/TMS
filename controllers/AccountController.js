const { Checking, Saving, AccountProfile, Customer, Tellers } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const UpdateAccountBalance = async (req, res) => {

    let customerNumber = req.body.customerNumber
    let accountNumber = req.body.accountNumber
    let action = req.body.action
    let accountType = req.body.accountType
    let amount = parseFloat(req.body.amount)

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
            if (accountType === "Checking") {
                let checkingBalance = customer[0].dataValues.Checkings[0].dataValues.balance
                let newBalance = parseFloat(checkingBalance) + amount
                let accountUpdate = await Checking.update({ balance: newBalance }, {
                    where: {
                        checking_number: accountNumber
                    },
                    returning: true
                })
                return res.send(accountUpdate)

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
                return res.send(accountUpdate2)
            }
        }
        else {
            if (accountType === "Checking") {
                let checkingBalance = customer[0].dataValues.Checkings[0].dataValues.balance
                let newBalance = parseFloat(checkingBalance) - amount
                let accountUpdate = await Checking.update({ balance: newBalance }, {
                    where: {
                        checking_number: accountNumber
                    },
                    returning: true
                })
                return res.send(accountUpdate)

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
                return res.send(accountUpdate2)
            }
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    UpdateAccountBalance,
}