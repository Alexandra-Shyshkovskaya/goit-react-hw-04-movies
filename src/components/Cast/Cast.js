import { Component } from "react";
import searchAPI from "../../services/searchApi";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    searchAPI
      .movieCredits(this.props.match.params.moviesId)
      .then((res) => {
        this.setState({ cast: res.data.cast });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <h2 className={styles.cast}>Cast</h2>
        {this.state.cast && (
          <ul className={styles.castList}>
            {this.state.cast.map((cas) => (
              <li key={cas.cast_id}>
                <img
                  src={
                    cas.profile_path &&
                    `https://image.tmdb.org/t/p/original${cas.profile_path}`
                  }
                  alt={cas.name}
                  className=""
                  width="150"
                />
                <p>{cas.name} </p>
                <p>{cas.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
