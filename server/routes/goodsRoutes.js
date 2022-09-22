const express = require('express')
const router = express.Router()
const {
  getGoods,
  setGoods,
  updateGoods,
  IdGoods,
  deleteGoods,
  AllGoods
} = require('../controller/goodsController')

const { protect } = require('../middlewear/authMiddlewear')

router.route('/').get(protect, getGoods).post(protect, setGoods)
router.route('/all').get(AllGoods)
router.route('/:id').delete(protect, deleteGoods).patch(protect, updateGoods).get(protect, IdGoods)

module.exports = router