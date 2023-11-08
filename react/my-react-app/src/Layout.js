// Create `src/App.js`: Complete app content component
// And copy/paste content to App.js

import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        {this.props.children}     
        <Footer />       
      </div>
    );
  }
}

export default Layout;
