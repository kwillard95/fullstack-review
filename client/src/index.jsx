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
  // onComponentDidMount() {
  //   axios.get('/repos')
  //   .then(function(response) {
  //     console.log(response)
  //   })
  //   .catch(function(err) {
  //     console.log('get error')
  //   })
  // }

  search(term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      username: term
    })
      .then(function (response) {
        // console.log(response)
        axios.get('/repos')
          .then(function (response) {
            console.log(response.data)
          })
          .catch(function (err) {
            console.log('get error')
          })
      })
      .catch(function (error) {
        console.log("error")
      })
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));