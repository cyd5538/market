const asyncHandler = require("express-async-handler");

const Favor = require("../models/favorModel");

const getFavor = asyncHandler(async (req, res) => {
  const favors = await Favor.find({ user: req.user.id });

  res.status(200).json(favors);
});

const addFavor = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a field");
  }

const Favors = await Favor.create({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    id: req.body.id
});
console.log(Favors);
res.status(200).json(Favors);
});

const DeleteFavor = asyncHandler(async (req, res) => {
    const Favors = await Favor.findById(req.params.id);
    if (!Favors) {
    res.status(400);
    throw new Error("Goal not found");
}

if (!req.user) {
    res.status(401);
    throw new Error("User not found");
}

if (Favors.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
}

  await Favors.remove();

  res.status(200).json({ id: req.params.id });
});
module.exports = {
  addFavor,
  getFavor,
  DeleteFavor,
};
