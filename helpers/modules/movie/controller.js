const MovieService = require('./service');

class MovieController {
    async getByID(req, res) {
        const data = await MovieService.getByID(req.params.MovieID)

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

    async getAll(req, res) {
        const data = await MovieService.getAll();

        res.json(data);
    }
}

module.exports = new MovieController()