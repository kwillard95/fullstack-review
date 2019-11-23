import React from 'react';

const RepoList = (props) => {
  return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      <ul>
      {props.repos.map((repo) => {
        return (
        <li> <div><b>Name:</b> {repo.full_name}</div> <div><b>Desciption:</b> {repo.description}</div>  <div><b>URL:</b> {repo.url}</div><div><b># of Times Forked:</b> {repo.forks_count}</div></li>
        )
      })}
      </ul>
    </div>
  </div>
  )
}

export default RepoList;