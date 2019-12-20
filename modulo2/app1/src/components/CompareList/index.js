import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

export default class CompareList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    const { repositories, handleDelete, handleRefresh } = this.props;
    return (
      <Container>
        {repositories.map((repository) => (
          <Repository key={repository.id}>
            <header>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <strong>{repository.name}</strong>
              <small>{repository.owner.login}</small>

              <ul>
                <li>
                  {repository.stargazers_count}
                  {' '}
                  <small>stars</small>
                </li>
                <li>
                  {repository.forks_count}
                  {' '}
                  <small>forks</small>
                </li>
                <li>
                  {repository.open_issues_count}
                  {' '}
                  <small>issues</small>
                </li>
                <li>
                  {repository.lastCommit}
                  {' '}
                  <small>last commit</small>
                </li>
              </ul>
              <div>
                <button type="button" onClick={handleDelete}>
                  <i className="fa fa-trash" />
                </button>
                <button type="button" onClick={handleRefresh(repository.full_name)}>
                  {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-refresh" />}
                </button>
              </div>
            </header>
          </Repository>
        ))}
      </Container>
    );
  }
}

CompareList.defaultProps = {
  // repositories: [],
};

CompareList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      full_name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
};
