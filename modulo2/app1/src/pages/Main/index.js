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

    this.handleChildDelete = this.handleChildDelete.bind(this);
    this.handleChildRefresh = this.handleChildRefresh.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('repositories') !== null) {
      this.setState({
        repositories: JSON.parse(localStorage.getItem('repositories')),
      });
    }
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

      const array = [];
      if ((localStorage.getItem('repositories')) !== null) {
        JSON.parse(localStorage.getItem('repositories')).map((aux) => (
          array.push(aux)
        ));
      }
      array.push(repository);
      localStorage.setItem('repositories', JSON.stringify(array));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleChildDelete = (input) => {
    const array = JSON.parse(localStorage.getItem('repositories'));
    const index = array.findIndex((obj) => obj.full_name === input);
    array.splice(index, 1);
    localStorage.setItem('repositories', JSON.stringify(array));
    this.setState({ repositories: array });
  }

  handleChildRefresh = async (input) => {
    const array = JSON.parse(localStorage.getItem('repositories'));
    const index = array.findIndex((obj) => obj.full_name === input);
    // this.setState({ loadingItem: true });
    try {
      const { data: repository } = await api.get(`repos/${input}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      array[index] = repository;
      localStorage.setItem('repositories', JSON.stringify(array));
      this.setState({ repositories: array });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      // this.setState({ loadingItem: false });
    }
  }

  render() {
    const {
      repositories,
      repositoryInput,
      repositoryError,
      loading,
      loadingItem,
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
        <CompareList
          repositories={repositories}
          loadingItem={loadingItem}
          handleDelete={this.handleChildDelete}
          handleRefresh={this.handleChildRefresh}
        />
      </Container>
    );
  }
}
