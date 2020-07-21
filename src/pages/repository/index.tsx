import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="\">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/2145364?v=4"
            alt="Usuários"
          />
          <div>
            <strong>
              danilosalvador/rocketseat-bootcamp-gostack-11-level-01-review-backend
            </strong>
            <p>Descrição do Repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="asdads">
          <div>
            <strong>asdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={35} color="cbcbd6" />
        </Link>
        <Link to="asdads">
          <div>
            <strong>asdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={35} color="cbcbd6" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
