const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API

    apiHelpers(' https://api.themoviedb.org/3/discover/movie', (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        let sortedByRating = data.data.results.slice('').sort(compare);
        res.send(sortedByRating);
      }
    });
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back

    apiHelpers('https://api.themoviedb.org/3/genre/movie/list', (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(data.data);
      }
    });
  },

  saveMovie: (req, res) => {
    //console.log('inControler');
    movieModel.saveData(req.body, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  },
  deleteMovie: (req, res) => {
    movieModel.deleteData(req.body, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },
};

function compare(a, b) {
  let comparison = 0;
  if (a.vote_average > b.vote_average) {
    comparison = 1;
  } else if (a.vote_average < b.vote_average) {
    comparison = -1;
  }

  return comparison;
}
