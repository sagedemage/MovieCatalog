const MovieService = require('../service/movie.service');

class MovieController {
    async findByID(req, res) {
        const data = await MovieService.findByID(req.params.MovieID)

        res.json(data)
    }

    async create(req, res) {
        const data = await MovieService.create(req.body)

        res.json(data)
    }

    async update(req, res) {
        const data = await MovieService.update(req.params.MovieID, req.body)

        res.json(data)
    }

    async deleteByID(req, res) {
        await MovieService.deleteByID(req.params.MovieID)

        res.json(`Success`)
    }
}

module.exports = new MovieController()