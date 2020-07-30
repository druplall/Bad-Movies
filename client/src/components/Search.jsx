import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selected: '0',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }
  componentDidUpdate() {
    console.log('update in search, ', this.state);
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios
      .get('/movies/genres')
      .then((data) => {
        let tempData = data.data.genres;
        tempData.push({ id: 0, name: 'All' });
        this.setState({
          genres: tempData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeHandler(e) {
    this.setState({ selected: e.target.value });
  }

  render() {
    return (
      <div className='search'>
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.onChangeHandler}>
          {this.state.genres.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>

        <br />
        <br />

        <button
          onClick={() => {
            this.props.filterValue(
              this.state.selected !== '' ? this.state.selected : ''
            );
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
