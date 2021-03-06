import styled from 'styled-components';
import ImgBg from '../../assets/img1.jpeg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(4.5rem, 10vw, 6.5rem);
  maxwidth:100%;
  margin-bottom: 1rem;
  box-shadow: 3px 5px #069543;
  letter-spacing: 3px;
  font-family: 'Anton', sans-serif;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-family: 'Indie Flower', cursive;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #467AA0;
  color: #fff;
  border-radius:10px;
  transition: 0.2s ease-out;

  &:hover {
    background: #069543;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
