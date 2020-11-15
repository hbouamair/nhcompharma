import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 6rem calc((100vw - 1300px) / 2);
  background: #fff5;
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #00A7C8;
  transition: all 0.5s linear;
  &:hover {
    transform:scale(1.1);

  }

`;

export const ProductsHeading = styled.h1`
  font-size: clamp(3rem, 3.5vw, 4rem);
  text-align: center;
  margin-bottom: 5rem;
  font-family: 'Righteous', cursive;
`;

export const ProductTitle = styled.h2`
  font-weight: 550;
  font-size: 1.5rem;
  font-family: 'Gochi Hand', cursive;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1.1rem;
  padding: 1rem 4rem;
  border: none;
  background: #467AA0;
  font-family: 'Modak', cursive;
 border-radius:10px;
  transition: 0.2 ease-out;
  color:#fff ;
  &:hover {
    background: #069543;
    transition: all 0.2s ease-out;
    cursor: pointer;
    color: #ffff;
  }
`;
