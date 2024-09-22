import React from "react";

import ProductCard from "../../components/features/product-card";

import { Container, ProductList, Title } from "./style";

import { MOCK_DATA } from "../../mocks/products";

const List = () => {
  return (
    <Container>
      <Title>중고거래 인기매물</Title>
      <ProductList>
        {MOCK_DATA.map((product, idx) => (
          <ProductCard {...product} key={`${product.id}-${idx}`} />
        ))}
      </ProductList>
    </Container>
  );
};

export default List;
