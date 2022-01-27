const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const serviceRouter = require('./serviceRouter')
const pricelistRouter = require('./pricelistRouter')
const doctorRouter = require('./doctorRouter')
const commentRouter = require('./commentRouter')
const appointmentRouter = require('./appointmentRouter')


router.use('/user', userRouter)
router.use('/service', serviceRouter)
router.use('/pricelist', pricelistRouter)
router.use('/doctor', doctorRouter)
router.use('/comment', commentRouter)
router.use('/appointment',appointmentRouter)

module.exports = router