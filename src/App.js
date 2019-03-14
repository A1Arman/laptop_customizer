import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ItemList from './Components/ItemList';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <ItemList features={this.props.features} />
        </main>     
      </div>
    );
  }
}

export default App;  
