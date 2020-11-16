import React from 'react';
import ListBeer from './components/ListBeer';
import logo from './beer-logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beerList: [],
    }
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => {
        let beerList = data.map(beer => beer);
        this.setState({
          beerList
        }, () => { console.log(this.state) })
      })
      .catch(error => console.log(`Error, ${error}`))
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <img id="beer-logo" src={logo} alt="logo" />
          <h1 className="white-font">World of Punk Beer</h1>
        </header>
        <div className="layout">
          <ListBeer beerList={this.state.beerList} />
        </div>
      </div>
    )
  }
}

export default App;