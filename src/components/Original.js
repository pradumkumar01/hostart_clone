import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/movie/movieSlice';



const Original = () => {
  const movies = useSelector(selectOriginal);
  
  return (
   <Container>
      <h4>Originals</h4>
      <Content>
        {
          movies && movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))
        }
      </Content>
    </Container>
  )
}

export default Original;

const Container = styled.div`
  padding: 0 0 26px;

  h4 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8); 
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
    @media (max-width: 768px) { 

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
`;


