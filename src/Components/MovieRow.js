import React, { Component } from 'react';



class MovieRow extends React.Component {

    viewMovie(){
      //console.log(this.props.movie.title)  

      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = "http://wwwcom"
    }

  render() {
    return <img alt="poster" width="120" src={ this.props.movie.poster_src}/>
     
}
  
}

export default MovieRow;

{/*

{this.props.movie.id}

   <h3> { this.props.movie.title} </h3>
         <p>  { this.props.movie.overview} </p>
       <input className="btn" type="button" onClick={this.viewMovie.bind(this)} value="View"/>


*/}