var express = require('express');
var router = express.Router();
const MovieService = require("../helpers/modules/movie/service")

/* GET About page. */
router.get('/', async function(req, res, next) {
    const movies = await MovieService.getAll();
    console.log(movies);
    res.render('movies', {title: 'Movies', movies: movies});
});

module.exports = router;