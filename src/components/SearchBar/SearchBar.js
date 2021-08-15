import { Component } from "react";
import styles from "./SearchBar.module.css";

class Searchbar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;

    this.setState({ search: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.search);
    this.reset();
  };

  reset = () => {
    this.setState({
      search: "",
    });
  };
  render() {
    return (
      <header>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;
