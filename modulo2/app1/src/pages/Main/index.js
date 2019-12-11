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
      repositories: [
        {
          id: 11730342,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==',
          name: 'vue',
          full_name: 'vuejs/vue',
          private: false,
          owner: {
            login: 'vuejs',
            id: 6128107,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/vuejs',
            html_url: 'https://github.com/vuejs',
            followers_url: 'https://api.github.com/users/vuejs/followers',
            following_url:
              'https://api.github.com/users/vuejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/vuejs/subscriptions',
            organizations_url: 'https://api.github.com/users/vuejs/orgs',
            repos_url: 'https://api.github.com/users/vuejs/repos',
            events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/vuejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          html_url: 'https://github.com/vuejs/vue',
          description:
            '🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          fork: false,
          url: 'https://api.github.com/repos/vuejs/vue',
          forks_url: 'https://api.github.com/repos/vuejs/vue/forks',
          keys_url: 'https://api.github.com/repos/vuejs/vue/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/vuejs/vue/teams',
          hooks_url: 'https://api.github.com/repos/vuejs/vue/hooks',
          issue_events_url:
            'https://api.github.com/repos/vuejs/vue/issues/events{/number}',
          events_url: 'https://api.github.com/repos/vuejs/vue/events',
          assignees_url:
            'https://api.github.com/repos/vuejs/vue/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/vuejs/vue/branches{/branch}',
          tags_url: 'https://api.github.com/repos/vuejs/vue/tags',
          blobs_url: 'https://api.github.com/repos/vuejs/vue/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/vuejs/vue/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/vuejs/vue/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/vuejs/vue/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/vuejs/vue/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/vuejs/vue/languages',
          stargazers_url: 'https://api.github.com/repos/vuejs/vue/stargazers',
          contributors_url:
            'https://api.github.com/repos/vuejs/vue/contributors',
          subscribers_url: 'https://api.github.com/repos/vuejs/vue/subscribers',
          subscription_url:
            'https://api.github.com/repos/vuejs/vue/subscription',
          commits_url: 'https://api.github.com/repos/vuejs/vue/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/vuejs/vue/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/vuejs/vue/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/vuejs/vue/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/vuejs/vue/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/vuejs/vue/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/vuejs/vue/merges',
          archive_url:
            'https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/vuejs/vue/downloads',
          issues_url: 'https://api.github.com/repos/vuejs/vue/issues{/number}',
          pulls_url: 'https://api.github.com/repos/vuejs/vue/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/vuejs/vue/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/vuejs/vue/labels{/name}',
          releases_url: 'https://api.github.com/repos/vuejs/vue/releases{/id}',
          deployments_url: 'https://api.github.com/repos/vuejs/vue/deployments',
          created_at: '2013-07-29T03:24:51Z',
          updated_at: '2019-12-07T12:00:48Z',
          pushed_at: '2019-12-07T07:36:38Z',
          git_url: 'git://github.com/vuejs/vue.git',
          ssh_url: 'git@github.com:vuejs/vue.git',
          clone_url: 'https://github.com/vuejs/vue.git',
          svn_url: 'https://github.com/vuejs/vue',
          homepage: 'http://vuejs.org',
          size: 27977,
          stargazers_count: 153542,
          watchers_count: 153542,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 22937,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 410,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          forks: 22937,
          open_issues: 410,
          watchers: 153542,
          default_branch: 'dev',
          temp_clone_token: null,
          organization: {
            login: 'vuejs',
            id: 6128107,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/vuejs',
            html_url: 'https://github.com/vuejs',
            followers_url: 'https://api.github.com/users/vuejs/followers',
            following_url:
              'https://api.github.com/users/vuejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/vuejs/subscriptions',
            organizations_url: 'https://api.github.com/users/vuejs/orgs',
            repos_url: 'https://api.github.com/users/vuejs/repos',
            events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/vuejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          network_count: 22937,
          subscribers_count: 6014,
        },
      ],
    };
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    try {
      const response = await api.get(`repos/${repositoryInput}`);
      console.log(response);
    } catch (err) {
      console.log('erro');
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
