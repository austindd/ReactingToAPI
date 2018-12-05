import React, { Component } from 'react';
import './App.css';
import FilmItem from './FilmItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmArr: [],
      filmKeys: [],
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then((obj) => {
        console.log(obj);
        let myKeys = obj.map((val, index) => index);
        this.setState({
          filmArr: obj,
          filmKeys: myKeys
        });
      });
  }

  render() {
    let filmElements;

    if (this.state.filmArr.length > 0) {
      filmElements = this.state.filmArr.map((item, index) => {
        return <FilmItem key={this.state.filmKeys[index]} filmObj={item} filmIndex={index} />;
      });
    }

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div id='body' className='row d-flex justify-content-center'>
          <div className='col-6 flex-item'>
            <div id='filmlist'>{filmElements}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
