import React from "react";

import ProductCard from "../../components/features/product-card";

import { Container, ProductList } from "./style";

import { MOCK_DATA } from "../../mocks/products";

import { Title } from "@mf-toy/ui-kit";

const List = () => {
  return (
    <Container>
      <Title element="h2" textAlign="center" style={{ marginBottom: "36px" }}>
        중고거래 인기매물
      </Title>
      <ProductList>
        {MOCK_DATA.map((product, idx) => (
          <ProductCard {...product} key={`${product.id}-${idx}`} />
        ))}
      </ProductList>
    </Container>
  );
};

export default List;
