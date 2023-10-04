const MovieController = require('../helpers/modules/movie/controller/movie.controller');

var express = require('express');
var router = express.Router();

router.get(`/v1/movies/:MovieID`, MovieController.findByID);
router.post(`/v1/movies`, MovieController.create);
router.patch(`/v1/movies/:MovieID`, MovieController.update);
router.delete(`/v1/movies/:MovieID`, MovieController.deleteByID);

module.exports = router;