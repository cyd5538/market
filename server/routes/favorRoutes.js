const express = require('express')
const router = express.Router()
const {
   addFavor,
   getFavor,
   DeleteFavor
  } = require('../controller/favorController')

const { protect } = require('../middlewear/authMiddlewear')

router.route('/').post(protect, addFavor).get(protect, getFavor)
router.route('/id').delete(protect, DeleteFavor)

module.exports = router