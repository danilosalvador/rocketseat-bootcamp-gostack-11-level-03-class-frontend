import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Title, Form, Repository } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        <a href="item1">
          <img
            alt="Danilo Salvador"
            src="https://avatars1.githubusercontent.com/u/2145364?s=460&u=0f0849fed335cdd99f9b90bd82b062dfe09ff733&v=4"
          />
          <div>
            <strong>
              rocketseat-bootcamp-gostack-11-level-03-class-frontend
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac vulputate nisl. In hac habitasse platea dictumst.
            </p>
          </div>
          <FiChevronRight size={50} color="cbcbd6" />
        </a>

        <a href="item1">
          <img
            alt="Danilo Salvador"
            src="https://avatars1.githubusercontent.com/u/2145364?s=460&u=0f0849fed335cdd99f9b90bd82b062dfe09ff733&v=4"
          />
          <div>
            <strong>
              rocketseat-bootcamp-gostack-11-level-03-class-frontend
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac vulputate nisl. In hac habitasse platea dictumst.
            </p>
          </div>
          <FiChevronRight size={50} color="cbcbd6" />
        </a>

        <a href="item1">
          <img
            alt="Danilo Salvador"
            src="https://avatars1.githubusercontent.com/u/2145364?s=460&u=0f0849fed335cdd99f9b90bd82b062dfe09ff733&v=4"
          />
          <div>
            <strong>
              rocketseat-bootcamp-gostack-11-level-03-class-frontend
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac vulputate nisl. In hac habitasse platea dictumst.
            </p>
          </div>
          <FiChevronRight size={50} color="cbcbd6" />
        </a>
      </Repository>
    </>
  );
};

export default Dashboard;
