import logo from './logo.svg';
import './App.css';
import Book from './Book.js';
import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sort:'title',
      books: []
    }
  }

  sortButton(criteria) {
    this.setState({...this.state,sort:criteria})
  }
  
  

  async componentDidMount() {
    const response =  fetch('http://localhost:3001/api/books')
    .then (res => res.json())
    .then (data => this.setState({...this.state,books: data}))
  }
 
  render() {
    return(
      <div className="App">
       <div className="SortBar">
          <button onClick = {this.sortButton.bind(this,'title')}>Title</button>
          <button onClick = {this.sortButton.bind(this,'author')}>Author</button> 
          <button onClick = {this.sortButton.bind(this,'isbnNumber')}>ISBN</button>
      </div>
        <Book books={this.state.books} sort={this.state.sort}/>
      </div>
     
    )
  };
}

export default App;
