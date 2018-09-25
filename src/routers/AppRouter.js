import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App.js';
import MovieCollection from '../components/MovieCollection.js';
import MovieDetail from '../components/MovieDetail.js';
import AppBar from '../components/AppBar.js';
import NotFound from '../components/NotFound.js';
import TrendingMovies from '../components/TrendingMovies.js';
import AddtoCollection from '../components/AddtoCollection.js'
import savedCollections from '../components/savedCollections.js'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppBar />
      <Switch>
        <Route  path="/" component={App} exact={true} />
        <Route  path="/collections/" component={MovieCollection} />
        <Route  path="/addtoCollections/:id" component={AddtoCollection} />
        <Route  path="/movies/:id" component={MovieDetail} />
        <Route  path="/savedCollections/" component={savedCollections} />
        <Route  path="/trending-movies" component={TrendingMovies} />
        <Route  component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;