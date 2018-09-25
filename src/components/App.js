import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../styles/styles.scss'
import SearchMovie from './SearchMovie.js';
import Movies from './Movies.js';
const API_KEY = '4031d1078118f20540dcd52b761e2713';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }


  handleSearchMovie(movieName) {
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(movies => this.setState(() => ({ movies })))
  }



  render() {
    return (

      <Fragment>
        <div >
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit">
              
                TMDb
          </Typography>
              <div >
              </div>

            </Toolbar>
          </AppBar>
        </div>
        <div>
        <div className="styleSearch">
                <SearchMovie
                  handleSearchMovie={this.handleSearchMovie}
                />
        <div className="flex-container" >
        <Movies 
          movies={this.state.movies.results}
        />
        </div>
        </div>
      </div>
      </Fragment>

    );
  }
}
export default App;