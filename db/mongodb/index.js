const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Movie');

const movieSchema = mongoose.Schema({
  adult: String,
  backdrop_path: String,
  genre_ids: String,
  id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: String,
  poster_path: String,
  release_date: String,
  title: String,
  video: String,
  vote_average: String,
  vote_count: String,
});

var Movie = mongoose.model('movie', movieSchema);

let deleteRecord = (data) => {
  return Movie.findOneAndDelete({
    id: data.id,
  }).exec();
};

let save = (data) => {
  return Movie.findOneAndUpdate(
    {
      id: data.id,
    },
    {
      adult: data.adult,
      backdrop_path: data.backdrop_path,
      genre_ids: data.genre_ids,
      id: data.id,
      original_language: data.original_language,
      original_title: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      poster_path: data.poster_path,
      release_date: data.release_date,
      title: data.title,
      video: data.video,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    },
    {
      upsert: true,
    }
  ).exec();
};

// const db = mongoose.connection;
// db.on('error', console.log(' connection error'));
// db.once('open', () => {
//   console.log('connected to mongo');
//   //const movieSchema = new mongoose.Schema({ name: String });
//   //const movie = mongoose.model('movies', movieSchema);
// });

module.exports.deleteRecord = deleteRecord;
module.exports.save = save;
