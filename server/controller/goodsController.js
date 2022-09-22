const asyncHandler = require('express-async-handler')

const Goods = require('../models/goodsModel')



const getGoods = asyncHandler(async (req, res) => {
  const goods = await Goods.find({ user: req.user.id })

  res.status(200).json(goods)
})


const AllGoods = asyncHandler(async (req, res) => {
    const goods = await Goods.find()
    res.status(200).json(goods)
})

const IdGoods = asyncHandler(async (req, res) => {
  const goods = await Goods.findById(req.params.id)

  res.status(200).json(goods)
})


const setGoods = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error('Please add a field')
  }

  const goods = await Goods.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    user: req.user.id,
   
  })
  
  res.status(200).json(goods)
})


const updateGoods = asyncHandler(async (req, res) => {
  const goods = await Goods.findById(req.params.id)
  if (!goods) {
    res.status(400)
    throw new Error('goods not found')
  }


  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (goods.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGood = await Goods.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGood)
})


const deleteGoods = asyncHandler(async (req, res) => {
  const goods = await Goods.findById(req.params.id)
  if (!goods) {
    res.status(400)
    throw new Error('Goal not found')
  }


  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }


  if (goods.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await goods.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoods,
  IdGoods,
  setGoods,
  updateGoods,
  deleteGoods,
  AllGoods
}