import styled from 'styled-components';
export const CastContainer = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #333;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 20px;
    margin: 0 -10px;
    list-style: none;

    li {
      width: 200px;
      text-align: center;
      background-color: #f9f9f9;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
      }

      h3 {
        margin: 10px 0 5px;
        font-size: 1.5rem;
        color: #333;
      }

      p {
        margin: 0;
        color: #666;
      }
    }
  }
`;
