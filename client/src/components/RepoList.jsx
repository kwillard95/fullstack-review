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
        <li>Name: {repo.full_name} Desciption: {repo.description} URL: {repo.url} # of Times Forked: {repo.fork_count}</li>
        )
      })}
      </ul>
    </div>
  </div>
  )
}

export default RepoList;