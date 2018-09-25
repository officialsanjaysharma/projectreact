import React, { Component } from 'react';
import '../styles/styles.scss'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'; 
const API_KEY = '4031d1078118f20540dcd52b761e2713';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(movies => {
        this.setState(() => ({ movies }))
      });
  }
  render() {
    const movies = this.state.movies;
    return (
      <div class="card" id="card">
        <img class="imageStyle"src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} />
        <div class="container">
        <h4><b>{movies.title}</b></h4>
        <p>{movies.overview}</p>
        <NavLink class="routerStyle" to="/" activeClassName="is-active"><Button id='close'onClick={function () { close() }}>x</Button></NavLink>
        </div>
      </div>
    )
  }
}
function close(){
  var closeMe=document.getElementById('card');
  closeMe.innerHTML='';
};

export default MovieDetail;