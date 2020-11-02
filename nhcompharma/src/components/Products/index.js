import React, {useContext} from "react"
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import { productContext } from "../../Global/productContext"
import {cartContext} from "../../Global/cartContext"
import Banner from "../Banner"

const Products = ({  data }) => {
  const {products} = useContext(productContext);
  const {dispatch} = useContext(cartContext);
  return (
    <ProductsContainer>
      <ProductsHeading>Our Products</ProductsHeading>
      <ProductWrapper>
      {products.map(product => (
          
            <ProductCard key={product.id}>
              <ProductImg src={product.image} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductButton onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}> Add to Cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          
      ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
