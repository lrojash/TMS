const { Tellers } = require('../models')

const { Op, literal, fn, col } = require('sequelize')

const LoginTeller = async (req, res) => {
    console.log('inside login controller', req.body)
    try {
        let userId = req.body.userId
        let password = req.body.password

        let teller = await Tellers.findOne({
            where: {
                user_id: userId
            },
            returning: true
        })
        if(teller !== null && teller.password_digest === password){
            res.send(teller)
        }



    } catch (error) {
        throw error
    }
}

const CreateTeller = async(req, res) => {
    console.log(req.body)
    let drawer = parseFloat(req.body.drawer)
    try{
        const userExists = await Tellers.findOne({
            where: {
                user_id: req.body.userId,
            }
        })

        if (userExists){
            res.send({
                message: 'account already exists',
            })
        }
        let body = {drawer, ...req.body}
        console.log('body: ', body)
        let teller = await Tellers.create(req.body)

        res.send(teller)

    } catch(error) {
        throw error 
    }
}
const BalanceTeller = async(req,res) => {
    let drawer = parseFloat(req.body.drawer).toFixed(2)
    try {
        const teller = await Tellers.findOne({
            where: {
                user_id: req.body.userId
            }
        })
        console.log('after; ', teller.drawer)
        console.log('data sent; ', drawer)
        if (teller.drawer){
            if(drawer === teller.drawer) {
                res.send(true)
            }
            else {
                res.send(false)
            }
        }
    } catch(error) {
        throw error 
    }
}

module.exports = {
    LoginTeller,
    CreateTeller,
    BalanceTeller
}