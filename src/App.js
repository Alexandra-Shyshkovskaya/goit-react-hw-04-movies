import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";
//import NotFoundPage from "./components/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";

const HomePage = lazy(() =>
  import("./components/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./components/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:moviesId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
