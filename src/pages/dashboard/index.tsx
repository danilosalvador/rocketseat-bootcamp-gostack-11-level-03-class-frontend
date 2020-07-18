import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Title, Form, Repository } from './style';

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
  const [repositoryName, setRepositoryName] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function AddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${repositoryName}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setRepositoryName('');
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form onSubmit={AddRepository}>
        <input
          value={repositoryName}
          onChange={e => setRepositoryName(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

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
