const Router = require('express')
const router = new Router()
const pricelistController = require ("../controllers/pricelistController")

router.post('/', pricelistController.create)
router.get('/',pricelistController.getAll)

module.exports = router