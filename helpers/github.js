const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (user) => {
  console.log('user', user);
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${user.name}/repos`,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
  .then(function (response) {
    console.log('response', response)
  })
    .catch(function (error) {
      console.log('error', error)
    })

}

module.exports = getReposByUsername;