const { Thought, User } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => {
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findByIdAndUpdate({ _id: params.userId }, {$push: { thoughts: _id } }, { new: true });
            })
            .then(dbThoughtData => {
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
}