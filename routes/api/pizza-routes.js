const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

//Set up GET all and Post at/api pizzas

// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

router
.route('/')
.get(getAllUser)
.post(createUser);

// set up GET one, PUT, and DELETE at /api/pizzas/:id

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;