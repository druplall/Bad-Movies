//Select one db to work with:

//For Mongo
const mongoDb = require('../../db/mongodb');

module.exports = {
  saveData: (data, cb) => {
    mongoDb
      .save(data)
      .then((res) => {
        cb(null, res);
      })
      .catch((err) => {
        cb(err);
      });
  },

  deleteData: (data, cb) => {
    mongoDb
      .deleteRecord(data)
      .then((res) => {
        cb(null, res);
      })
      .catch((err) => {
        cb(err);
      });
  },
};

//For SQL
//const sqlDb = require('../../db/sql');
// module.exports = {
//   saveData: (data, cb) => {
//     sqlDb
//       .queryAsync(
//         `INSERT INTO movies (adult , backdrop_path , genre_ids , idMovie , original_language , original_title , overview , popularity , poster_path , release_date , title , video , vote_average , vote_count ) VALUES(?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?,
//           ?)`,
//         [
//           data.adult,
//           data.backdrop_path,
//           data.genre_ids.toString(),
//           data.id,
//           data.original_language,
//           data.original_title,
//           data.overview.substring(0, 250),
//           data.popularity,
//           data.poster_path,
//           data.release_date,
//           data.title,
//           data.video,
//           data.vote_average,
//           data.vote_count,
//         ]
//       )
//       .then((res) => {
//         console.log(res);
//         cb(null, res);
//       })
//       .catch((err) => {
//         console.log(err);
//         cb(err);
//       });
//   },

//   deleteData: (data, cb) => {
//     //console.log(data.body);
//     //console.log(data.id, 'insde delete');
//     sqlDb
//       .queryAsync(`DELETE FROM movies WHERE idMovie = ?`, data.id)
//       .then((res) => {
//         console.log(res);
//         cb(null, res);
//       })
//       .catch((err) => {
//         console.log(err);
//         cb(err);
//       });
//   },
// };
