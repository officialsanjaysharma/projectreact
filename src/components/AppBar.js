import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../styles/styles.scss'
import { Button } from '@material-ui/core';

const AppBar = () => {
  return (
    <div >
      <NavLink class="routerStyle" to="/trending-movies" activeClassName="is-active"><Button>Trending Movies</Button></NavLink>
      <NavLink class="routerStyle" to="/collections" activeClassName="is-active"><Button>My Collections</Button></NavLink>
    </div>
  );
}
  
export default AppBar;