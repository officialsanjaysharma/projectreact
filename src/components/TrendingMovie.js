import React from 'react';
import Trending from './Trending'

const TrendingMovie = (props) => {
  if (props.movies) {
    return props.movies.map((movie, index) => <Trending key={index} movie={movie} />);
  } else {
    return null
  }
}

export default TrendingMovie;