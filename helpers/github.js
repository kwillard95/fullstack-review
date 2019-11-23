const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (user) => {
  console.log('user', user);
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options)

}

module.exports = getReposByUsername;