import React, { Component } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryInput: '',
      repositories: [],
    };
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    try {
      const response = await api.get(`repos/${repositoryInput}`);
      this.setState((previousState) => ({
        repositoryInput: '',
        repositories: [...previousState.repositories, response.data],
      }));
    } catch (err) {
      console.log('erro', err);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Digite um usuário do Github"
            value={repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
