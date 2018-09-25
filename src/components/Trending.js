import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Trending = (props) => {
  return (
    <div>
    <img class='imageStyle' src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}/><br/>
      Movie name: {props.movie.title}<br/>
      Movie popularity:{props.movie.popularity}<br/>
      Movie Year:{props.movie.release_date}<br/>
      <Button><Link className="routerStyle" to={`movies/${props.movie.id}`}>Movie detail page</Link></Button>
    </div>
  );
};

export default Trending;