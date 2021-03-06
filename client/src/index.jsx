import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      selectGenre: '0',
      showFaves: false,
    };

    // you might have to do something important here!
    this.swapFavorites = this.swapFavorites.bind(this);
    this.addFavorites = this.addFavorites.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    //console.log(this.state);
  }
  addFavorites(e) {
    console.log('addMovie', e);
    if (this.state.showFaves !== true) {
      this.saveMovie(e);
      let tempState = this.state.favorites.slice();
      tempState.push(e);
      this.setState({
        favorites: tempState,
      });
    }

    if (this.state.showFaves === true) {
      this.deleteMovie(e);
    }
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    axios
      .get('/movies/search')
      .then((data) => {
        //console.log(data);
        this.setState({
          movies: data.data,
        });
        //console.log(this.setState);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveMovie(saveItem) {
    // same as above but do something diff
    axios
      .post('/movies/save', saveItem)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  deleteMovie(item) {
    //console.log('Calling delete ', item);
    // same as above but do something diff
    axios
      .delete('movies/delete', { data: item })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  setSearchFilter(filter) {
    console.log(filter, ' Filtered Value');
    this.setState({
      selectGenre: filter,
    });
  }

  render() {
    return (
      <div className='app'>
        <header className='navbar'>
          <h1>Bad Movies</h1>
        </header>
        <div className='main'>
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            filterValue={this.setSearchFilter}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            selectMovies={this.addFavorites}
            selectedFilter={this.state.selectGenre}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
