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
    try{
        const userExists = await Tellers.findOne({
            where: {
                user_id: req.body.userId,
            }
        })

        if (userExists){
            res.send({
                message: 'account already exists'
            })
        }

        let teller = await Tellers.create(req.body)

        res.send(teller)

    } catch(error) {
        throw error 
    }
}

module.exports = {
    LoginTeller,
    CreateTeller
}