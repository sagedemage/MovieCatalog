const UserRepository = require('../repository/movie.repository');

class UserService {
    async findByID(MovieID) {
        const data = await UserRepository.findByID(MovieID);

        if (data) {
            return data.Item;
        }

        return data;
    }

    async create(data) {
        return await UserRepository.create(MovieID, {
            Name: data.Name,
            Length: data.Length,
            Maturity_Rating: data.Maturity_Rating,
            Rating: data.Rating,
            Year: data.Year
        })
    }

    async update(data) {
        return await UserRepository.update(MovieID, {
            Name: data.Name,
            Length: data.Length,
            Maturity_Rating: data.Maturity_Rating,
            Rating: data.Rating,
            Year: data.Year
        })
    }

    async deleteByID(MovieID) {
        return await UserRepository.deleteByID(MovieID);
    }
}

module.exports = new UserService()