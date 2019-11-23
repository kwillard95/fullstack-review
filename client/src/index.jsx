import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
  componentDidMount() {
    axios.get('/repos')
    .then((response) => {
      this.setState({repos: response.data});
    })
    .catch(function(err) {
      console.log('get error')
    })
  }

  search(term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      username: term
    })
      .then((response) => {
        // console.log(response)
        axios.get('/repos')
          .then( (response) => {
            this.setState({repos: response.data});
          })
          .catch( (err) => {
            console.log('gettt error')
          })
      })
      .catch(function (error) {
        console.log("error")
      })
  }

  delete(e) {
    e.preventDefault();
    axios.delete('/repos')
    .then((response) => {
      this.setState({repos: []})
    })
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)} onDelete={this.delete.bind(this)} />
      <RepoList repos={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));