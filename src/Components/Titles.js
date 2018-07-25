import React, { Component } from 'react';

class Titles extends React.Component {


	render() {
		return <div className="title">
	 
	 	<div id='nav'>
			<a href="#"><img atl="app icon" src="images/primevideo.svg" className="logo" id="logo"/></a>
		</div>
		   
		<ul  className="nav">
			<li	className="left"><a href="#">Home</a></li>
			<li	className="left"><a href="#">TV Shows</a></li>
			<li	className="left"><a href="#">Movies</a></li>
			<li className="right left"><a href="#"><img atl="app icon" src="images/down-arrow.svg" className="logo-right"/></a></li>
			<li className="right left"><a href="#"><img atl="app icon" src="images/user.svg" className="logo-right"/></a></li>
			<li className="right left"><a href="#"><img atl="app icon" src="images/search.svg" className="logo-right"/></a></li>
		</ul> 			
		
		<div class="clear"></div>


		 
	</div> 


}
  
}


export default Titles;
