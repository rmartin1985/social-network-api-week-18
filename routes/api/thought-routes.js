const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// set up route to GET all thoughts
router
    .route('/')
    .get(getAllThoughts);

// set up route to POST create a new thought
router
    .route('/:userId')
    .post(createThought);

// set up route to GET one thought, PUT to update a thought, DELETE to remove a thought
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up route to POST to add a reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// set up route to DELETE a reaction
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;

