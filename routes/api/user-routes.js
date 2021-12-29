const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up routes to GET all users and POST to create a user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up routes to GET one user, PUT to update a user, and DELETE a user
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up routes to POST add a friend and DELETE a friend
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
