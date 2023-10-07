const MovieRepository = require('./repository');

class UserService {
    async getByID(MovieID) {
        const data = await MovieRepository.getByID(MovieID);

        if (data) {
            return data.Item;
        }

        return data;
    }

    async create(data) {
        return await MovieRepository.create({
            Name: data.Name,
            Length: data.Length,
            Maturity_Rating: data.Maturity_Rating,
            Rating: data.Rating,
            Year: data.Year
        })
    }

    async update(MovieID, data) {
        return await MovieRepository.update(MovieID, {
            Name: data.Name,
            Length: data.Length,
            Maturity_Rating: data.Maturity_Rating,
            Rating: data.Rating,
            Year: data.Year
        })
    }

    async deleteByID(MovieID) {
        return await MovieRepository.deleteByID(MovieID);
    }

    async getAll() {
        return await MovieRepository.getAll();
    }
}

module.exports = new UserService()