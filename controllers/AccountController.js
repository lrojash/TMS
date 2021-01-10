const { Checking, Saving, AccountProfile, Customer, Tellers } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const UpdateAccountBalance = async (req, res) => {

    let customerNumber = req.body.customerNumber
    console.log(customerNumber)
    try {

        let customer = await AccountProfile.findAll({
            where:{
                customer_number: customerNumber
            },
            include: Checking
        })
        res.send(customer)
    } catch (error) {
        throw error
    }

    // try {
    //     let account = await Accounts.findOne({
    //         where: {
    //             customer_number: customerNumber,
    //         },
    //     })
    //     let accountBalance = account.balance

    //     if (acctionType = "withdraw") {
    //         accountBalance = accountBalance - amount
    //         let updatedAccount = await accountType.update({ balance: balance }, { where: { account_number: accountNumber }, returning: true })
    //         res.send(updatedAccount)
    //     }

    // if (action === "withdraw") {
    //     if (accountType === "checking") {
    //         let checkingAccount = await Checking.findOne({
    //             where: {
    //                 account_number: accountNumber
    //             }
    //         })
    //         let currentBalance = checkingAccount.balance
    //         let balance = currentBalance - amount

    //         let updatedCheckingAccount = await Checking.update({ balance: balance }, { where: { account_number: accountNumber }, returning: true })

    //         res.send(updatedCheckingAccount)
    //     }

    //     else {
    //         let savingAccount = await Saving.findOne({
    //             where: {
    //                 account_number: accountNumber
    //             }
    //         })
    //         let newBalance = savingAccount.balance - amount
    //         let updatedSavingAccount = await Saving.update({ balance: newBalance }, { where: { account_number: accountNumber }, returning: true })

    //         res.send(updatedSavingAccount)

    //     }
    // }
    // else {

    // }
    // } catch (error) {
    //     throw error
    // }
}

module.exports = {
    UpdateAccountBalance,
}