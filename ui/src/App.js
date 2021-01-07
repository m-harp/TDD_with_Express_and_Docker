import logo from './logo.svg';
import './App.css';
import Book from './Book.js';
import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  
  

  async componentDidMount() {
    const response = await fetch('http://library:3001/api/books')
    const json = await response.json()
    this.setState({books: json})
    console.log(this.state)
  }

  render() {
    return(
      <div className="App">
        <Book books={this.state.books}/>
      </div>
    )
  };
}

export default App;
