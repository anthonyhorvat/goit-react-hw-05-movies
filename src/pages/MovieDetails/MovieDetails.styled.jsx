import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
`;

export const GoBackButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;

  img {
    width: 300px;
    border-radius: 8px;
    margin-right: 20px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 15px 0 5px;
  }

  p {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;

export const AdditionalInfoContainer = styled.div`
  margin-top: 30px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #0077cc;
        transition: color 0.3s ease;

        &:hover {
          color: #005299;
        }
      }
    }
  }
`;
