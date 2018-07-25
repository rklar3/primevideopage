
import React, { Component } from 'react';

const urlformovie = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=88985b422d7e5666e517e6f7f09919dd&page=1&';


class RowTwo extends React.Component {

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
        <p> Top Series <a href="#">See more</a></p>

      <div className="wrapper">
        <div className="row">
              {this.state.movies}
        </div>
      </div>
      </div>
       
    );
  }
  
  
  
}

export default RowTwo;
