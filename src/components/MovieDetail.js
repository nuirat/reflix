import React, { Component } from "react";


class MovieDetail extends Component {
  render() {
    console.log(this.props);
    let movieId = this.props.match.params.id;
    const movie = this.props.movies[movieId];
    return (
      <div className="movieDetails">
        <div id="title">{movie.title}</div>
        <div id="year">({movie.year})</div>
        <br></br>
        <img  id="image" src={movie.img}/>
        <div>{movie.descrShort}</div>
      </div>
    );
  }
}

export default MovieDetail;
