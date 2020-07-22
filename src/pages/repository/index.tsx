import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    // // 1o. FORMA COM EXECUÇÃO DAS DUAS CHAMADAS EM PARALELO
    api.get<Repository>(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get<Issue[]>(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
    // // 2o. FORMA COM EXECUÇÃO DAS DUAS CHAMADAS EM SEQUENCIA
    // async function LoadData(): Promise<void> {
    //   const repository = await api.get(`repos/${params.repository}`);
    //   const issues = await api.get(`repos/${params.repository}/issues`);
    //   console.log(repository);
    //   console.log(issues);
    // }
    // LoadData();
    // // 3o. FORMA COM EXECUÇÃO DAS DUAS CHAMADAS EM PARALELO (IGUAL A PRIMEIRA, PORÉM, COM AWAIT)
    // async function LoadData(): Promise<void> {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);
    //   console.log(repository);
    //   console.log(issues);
    // }
    // LoadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Starts</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={35} color="#cbcbd6" />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
