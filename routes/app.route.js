const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/app.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

//
router.post('/create', product_controller.product_create); // create a data record
router.get('/:id', product_controller.product_details); // read a data record
router.put('/:id/update', product_controller.product_update); //update a data record
router.delete('/:id/delete', product_controller.product_delete); //delete a data record