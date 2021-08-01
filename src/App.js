import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// Component as a class
class App extends Component{

  //  We declare our state here.
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }

  // Getting information from external API using promise.
  // We use 'componentDidMount' function and we setState with the retrieved data.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  //  Render function will return JSX code which looks like HTML code
  render(){
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters}></CardList>
      </div>
    );
  }
}

// exporting the Component
export default App;
