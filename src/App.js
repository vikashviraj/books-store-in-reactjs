import './App.css';
import Home from "./component/home";
import AddBook from "./component/add_book";
import ViewBook from "./component/view_book";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  render(){
  return (
    <div>
    <Router>
    <div id="alert">
        <img src='./img/success.gif' alt="alert"></img>
    </div>
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo" style={{margin:'0px 10px'}}>BooksWala</a>
      <ul id="nav-mobile" className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/view-book">Books</Link></li>
      </ul>
    </div>
  </nav>
  
    <Route exact path="/" render={(props)=> <Home ourState={this.state} />} />
    <Route path="/add-book" render={(props)=> <AddBook ourState={this.state} />}/>
    <Route path="/view-book" render={(props)=> <ViewBook ourState={this.state} />} />
  </Router>
  </div>
  );
}
}
export default App;
