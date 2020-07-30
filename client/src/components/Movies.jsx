import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.updateFave = this.updateFave.bind(this);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  componentDidUpdate() {
    //console.log(this.props.movies);
  }

  updateFave(e) {
    //e.preventDefault();
    this.props.selectMovies(e);
  }

  render() {
    return (
      <ul className='movies'>
        {this.props.movies.map((movie) => {
          // console.log('Ouste the render');
          console.log(this.props.selectedFilter);
          if (this.props.selectedFilter !== '') {
            console.log('inside the render');
            if (movie.genre_ids.includes(Number(this.props.selectedFilter))) {
              return (
                <li
                  className='movie_item'
                  onClick={() => {
                    this.props.selectMovies(movie);
                  }}
                >
                  <img src='https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300' />
                  <div className='movie_description'>
                    <h2>{movie.title}</h2>
                    <section className='movie_details'>
                      <div className='movie_year'>
                        <span className='title'>Year</span>
                        <span>{movie.release_date}</span>
                      </div>
                      <div className='movie_rating'>
                        <span className='title'>Rating</span>
                        <span>{movie.vote_average}</span>
                      </div>
                    </section>
                  </div>
                </li>
              );
            }
          } else {
            return (
              <li
                className='movie_item'
                onClick={() => {
                  this.props.selectMovies(movie);
                }}
              >
                <img src='https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300' />
                <div className='movie_description'>
                  <h2>{movie.title}</h2>
                  <section className='movie_details'>
                    <div className='movie_year'>
                      <span className='title'>Year</span>
                      <span>{movie.release_date}</span>
                    </div>
                    <div className='movie_rating'>
                      <span className='title'>Rating</span>
                      <span>{movie.vote_average}</span>
                    </div>
                  </section>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default Movies;
