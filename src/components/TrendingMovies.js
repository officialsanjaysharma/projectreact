import React, { Fragment } from 'react';
import '../styles/styles.scss'
import TrendingMovie from './TrendingMovie'
import { AppBar } from '@material-ui/core';
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


class TrendingMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
       
    

    componentDidMount(){
        // code will get executed whenever the component is rendered.
        console.log('called componentDidMount()');
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(movies => this.setState(() => ({ movies })))
    };
    


  render() {
    return (

      <Fragment>
        <div className="flex-container" >
        <TrendingMovie
          movies={this.state.movies.results}
        />
        </div>
      </Fragment>

    );
  }
}

export default TrendingMovies;