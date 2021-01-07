const { Checking, Saving } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const UpdateAccountBalance = async (req, res) => {

    let accountType = req.body.accountType
    let accountNumber = req.body.accountNumber
    let amount = req.body.amount

    try {
        if (accountType === "checking") {
            let checkingAccount = await Checking.findOne({
                where: {
                    account_number: accountNumber
                }
            })
            let currentBalance = checkingAccount.balance
            let balance = currentBalance - amount

            let updatedCheckingAccount = await Checking.update({balance:balance},{where:{account_number:accountNumber}, returning:true})

            res.send(updatedCheckingAccount)
        }

        else {
            let savingAccount = await Saving.findOne({
                where: {
                    account_number: accountNumber
                }
            })
            let newBalance = savingAccount.balance - amount
            let updatedSavingAccount = await Saving.update({balance:newBalance},{where:{account_number:accountNumber}, returning:true})
            
            res.send(updatedSavingAccount)
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    UpdateAccountBalance,
}