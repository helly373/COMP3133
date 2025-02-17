const Movie = require("./models/Movie");

const resolvers = {
  Query: {
    getAllMovies: async () => {
      return await Movie.find();
    },
    getMovieById: async (_, { id }) => {
      return await Movie.findById(id);
    },
  },
  Mutation: {
    addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = new Movie({ name, director_name, production_house, release_date, rating });
      await newMovie.save();
      return newMovie;
    },
    updateMovie: async (_, { id, name, director_name, production_house, release_date, rating }) => {
      return await Movie.findByIdAndUpdate(id, { name, director_name, production_house, release_date, rating }, { new: true });
    },
    deleteMovie: async (_, { id }) => {
      await Movie.findByIdAndDelete(id);
      return "Movie deleted successfully";
    }
  }
};

module.exports = resolvers;
