import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      repositoryError: false,
      repositoryInput: '',
      repositories: [],
    };
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState((previousState) => ({
        repositoryInput: '',
        repositories: [...previousState.repositories, repository],
        repositoryError: false,
      }));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories,
      repositoryInput,
      repositoryError,
      loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Digite um usuário do Github"
            value={repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
