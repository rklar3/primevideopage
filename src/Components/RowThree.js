
import React, { Component } from 'react';

const urlformovie = 'https://api.themoviedb.org/3/discover/movie?api_key=88985b422d7e5666e517e6f7f09919dd&primary_release_date.gte=2017-11-19&primary_release_date.lte=2018-02-19&with_genres=28%7C35%7C878&&with_original_language=en&page=1';



class RowThree extends React.Component {

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
        <p> New movies <a href="#">See more</a></p>

      <div className="wrapper">
        <div className="row">
              {this.state.movies}
        </div>
      </div>
      </div>
       
    );
  }
  
  
  
}

export default RowThree;
