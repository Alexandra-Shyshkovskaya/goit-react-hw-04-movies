import { Component } from "react";
import { Link } from "react-router-dom";
import searchAPI from "../../services/searchApi";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    searchAPI.trending().then((res) => {
      this.setState({ movies: res.data.results });
    });
  }
  render() {
    return (
      <>
        <h2 className={styles.trend}>Trending Today</h2>
        <ul className={styles.trendList}>
          {this.state.movies.map((movie) => (
            <li key={movie.id} className={styles.trendItem}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
