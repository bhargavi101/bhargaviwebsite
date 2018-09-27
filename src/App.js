import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeData:{},
      dataFetched: false,
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () =>{
    axios
    .get(`https://github.com/bhargavi101/bhargaviwebsite/blob/gh-pages/resume.json`)
    .then((response) => {
      this.setState({
        resumeData: response.data,
        dataFetched: true,
      })
    })
    .catch((error) => {

    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}



export default App;
