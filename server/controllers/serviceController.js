const {Type} = require ("../models/models")
const ApiError = require('../error/ApiError')

class ServiceController{

    async create (req, res) {
        const {name} = req.body
        const type = await  Type.create({name})
        return res.json(type)
    }

    async getAll (req, res) {

    }

    async getOne (req, res) {

    }

}

module.exports = new ServiceController()