
import React, { Component } from 'react';

const urlformovie = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88985b422d7e5666e517e6f7f09919dd&with_genres=27&with_original_language=en&page=1';







class RowFour extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
   fetch(urlformovie)
   .then(results => {
        return results.json();
      }).then(data => {
          let movies = data.results.map((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

            return(
              <div className="column">
              <img alt="poster" className="posterimg" src={movie.poster_src} />
              </div>

            )
          })
      this.setState({movies: movies});
      console.log("state",this.state.movies);
        })
  }

  render() {
    return (
      <div className="firstrowone">
        <p> Top Horror <a href="#">See more</a></p>

      <div className="wrapper">
        <div className="row">
              {this.state.movies}
        </div>
      </div>
      </div>
       
    );
  }
  
  
  
}

export default RowFour;
