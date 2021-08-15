import { Component } from "react";
import { Link, Route } from "react-router-dom";
import styles from "./MovieDatailsPage.module.css";
import searchAPI from "../../services/searchApi";
import Cast from "../Cast";
import Reviews from "../Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    searchAPI
      .movieDetail(this.props.match.params.moviesId)
      .then((res) => {
        this.setState({ movie: res.data });
      })
      .catch((error) => console.log(error));
  }

  handleButtonGoBack = () => {
    if (!this.props.location.state) {
      this.props.history.push({
        pathname: "/",
      });
      return;
    }

    this.props.history.push({
      pathname: "/movies",
      search: `query=${this.props.location.state.searchWord}`,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleButtonGoBack} className={styles.btn}>
          Go Back
        </button>

        {this.state.movie && (
          <div className={styles.imgWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
              alt=""
              className=""
              width="200"
            />
            <div>
              <h3 className={styles.title}>
                {this.state.movie.original_title}{" "}
              </h3>
              <p>User Score {+this.state.movie.vote_average * 10 + "%"} </p>
              <p className={styles.overview}>Overview</p>
              <p>{this.state.movie.overview} </p>
              <p className={styles.genre}>Genres</p>
              <p>{this.state.movie.genres.map((genre) => genre.name + "  ")}</p>
            </div>
          </div>
        )}
        <div>
          <p className={styles.addInfo}>Additional Information</p>

          <ul className={styles.list}>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: this.props.location.state,
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: this.props.location.state,
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/Reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
