import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./MoviesPage.module.css";
import searchAPI from "../../services/searchApi";
import Searchbar from "../SearchBar";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchWord: "",
  };

  componentDidMount() {
    const query = this.props.location.search.substr(7);
    if (query) {
      this.setState({ searchWord: query });
      if (this.state.searchWord) this.fetchMovie();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord !== this.state.searchWord) {
      this.fetchMovie();
    }
  }

  formSubmitHandler = (data) => {
    this.setState({ searchWord: data });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${data}`,
    });
  };

  fetchMovie = () => {
    const { searchWord } = this.state;

    searchAPI
      .searchMovie(searchWord)
      .then((res) => {
        this.setState({ movies: res.data.results });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { searchWord } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ul className={styles.searchList}>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/${movie.id}`,
                  state: { searchWord },
                }}
              >
                {movie.original_title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
