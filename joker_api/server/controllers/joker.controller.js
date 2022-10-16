const Joker = require("../models/joker.model");

const getAllJoker = (req, res) => {
	Joker.find()
		.then((allJoker) => res.json(allJoker))
		.catch((err) => console.log(err));
};

const getJokerById = (req, res) => {
	const { params } = req;
	Joker.findOne({ _id: params._id })
		.then((joker) => res.json(joker))
		.catch((err) => console.log(err));
};

const createNewJoke = (req, res) => {
	const { body } = req;
	Joker.create(body)
		.then((newJoker) => res.json(newJoker))
		.catch((err) => console.log(err));
};

const updateJoker = (req, res) => {
	Joker.findOneAndUpdate({ _id: req.params._id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedJoker) => res.json(updatedJoker))
		.catch((err) => console.log(err));
};

const deleteJoker = (req, res) => {
	Joker.deleteOne({ _id: req.params._id })
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
};

module.exports = {
	getAllJoker,
	getJokerById,
	createNewJoke,
	updateJoker,
	deleteJoker,
};
