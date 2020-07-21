import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Title, Form, Repository, Error } from './style';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@github_explorer:repositories',
    );

    if (storagedRepositories) return JSON.parse(storagedRepositories);

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@github_explorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function AddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repositoryName) {
      setInputError('Preencher o autor/nome do repositório.');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${repositoryName}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setRepositoryName('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao pesquisar o repositório.');
    }
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={AddRepository}>
        <input
          value={repositoryName}
          onChange={e => setRepositoryName(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map(repository => (
          <a key={repository.full_name} href="item1">
            <img
              alt={repository.owner.login}
              src={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={35} color="cbcbd6" />
          </a>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
