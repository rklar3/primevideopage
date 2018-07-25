import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./Components/Titles";
import Slider from "./Components/Slider";
import RowOne from "./Components/RowOne";
import RowTwo from "./Components/RowTwo";
import RowThree from "./Components/RowThree";
import RowFour from "./Components/RowFour";
import RowFive from "./Components/RowFive";


import Footer from "./Components/Footer";
import MovieRow from './Components/MovieRow.js'
//import Logo from './Logo.js';



class App extends Component {
  render() {
    return (
      <div className="App">       
        <Titles/> 
        <div className="container">
        <Slider/> 
        <RowOne/>
        <RowTwo/>
        <RowThree/>
        <RowFour/>
        <RowFive/>

        <Footer/>
        </div>

      </div>
    );
  }
}
export default App;
