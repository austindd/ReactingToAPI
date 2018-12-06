import React, { Component } from 'react';
import './App.css';
import ghibliLogo from './logo.png';
import FilmItem from './FilmItem';
import { Button } from 'reactstrap';
import PeopleItem from './PeopleItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmArr: [],
      filmKeys: [],
      peopleArr: [],
      peopleKeys: [],
    }
    this.getFilms = this.getFilms.bind(this);
    this.getPeople = this.getPeople.bind(this);
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then((obj) => {
        console.log(obj);
        let myKeys = obj.map((val, index) => index); // create array of keys for list items in React DOM
        this.setState({
          filmArr: obj,
          filmKeys: myKeys
        });
      });
  }

  getPeople() {
    fetch('https://ghibliapi.herokuapp.com/people/')
      .then(res => res.json())
      .then((obj) => {
        console.log(obj)
        let myKeys = obj.map((val, index) => index); // create array of keys for list items in React DOM
        this.setState({
          peopleArr: obj,
          peopleKeys: myKeys,
        });
      });
  }

  render() {
    // Test to see if getFilms done fetching API
    let filmElements;
    if (this.state.filmArr.length > 0) {
      filmElements = this.state.filmArr.map((item, index) => {
        return <FilmItem key={this.state.filmKeys[index]} filmObj={item} filmIndex={index} />;
      });
    }
    // Test to see if getPeople done fetching API
    let peopleElements;
    if (this.state.peopleArr.length > 0) {
      peopleElements = this.state.peopleArr.map((item, index) => {
        return <PeopleItem key={this.state.peopleKeys[index]} peopleObj={item} peopleIndex={index} />;
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img className='App-logo' src={ghibliLogo} />
        </header>
        <div id='body' className='row d-flex justify-content-center'>
          <div className='col-4 flex-item'>
            <Button onClick={this.getFilms} color='secondary' style={{margin: '2em'}}>Load Films</Button>
            <div id='film-list'>{filmElements}</div>
          </div>
          <div className='col-4 flex-item'>
            <Button onClick={this.getPeople} color='secondary' style={{margin: '2em'}}>Load People</Button>
            <div id='people-list'>{peopleElements}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
