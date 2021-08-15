import { Component } from "react";
import searchAPI from "../../services/searchApi";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    searchAPI
      .movieReview(this.props.match.params.moviesId)
      .then((res) => {
        this.setState({ reviews: res.data.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const text = "We don't have any reviews for this movie";
    return (
      <>
        <h2 className={styles.title}>Reviews</h2>
        {this.state.reviews.length > 0 ? (
          <ul className={styles.list}>
            {this.state.reviews.map((rev) => (
              <li key={rev.id}>
                <p className={styles.author}>Author: {rev.author} </p>
                <p>{rev.content} </p>
              </li>
            ))}
          </ul>
        ) : (
          text
        )}
      </>
    );
  }
}

export default Reviews;
