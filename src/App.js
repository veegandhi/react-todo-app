import React, { Component } from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './styles/App.css'; 

class App extends Component {
	render() {
	    return ( 
	    	<div>
		        	<Header />
			<Main />
			<Footer />
	        	</div>
	    ); 
	}
}
export default App;
