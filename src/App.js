import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

// Component as a class
class App extends Component{

  //  We declare our state here. We have the list of monsters 
  // and the searchField value for filtering the monsters
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  // Getting information from external API using promise.
  // We use 'componentDidMount' function and we setState with the retrieved data.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  //  Render function will return JSX code which looks like HTML code
  render(){

    // We make a constant copy of our state which can be used later
    const {monsters, searchField} = this.state

    // This is the final set of monsters that will be rendered.
    // It is called everytime the dom is rendered,
    // which is whenever the search bar value is changed.

    // We take the constant copy of our state and filter based on the search value.
    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        {/* Title */}
        <h1 className='title'>Monster Rolodex</h1>

        {/* This line will call change the state and 
        calls the render function with new searchField value*/}
        <SearchBox placeholder='Monster Search' handleChange= {this.handleChange}/>
         
         {/* We render the filtered Monsters which has the 
         copy of monsters from original state.*/}
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }
}

// exporting the Component
export default App;
