import React, { useCallback, useMemo } from "react";
import { MOCK_DATA } from "../mocks/products";
import { useShellNavigate } from "@mf-toy/shell-router";
import { Container, ProductItem } from "./product-fragment.style";
import { Title } from "@mf-toy/ui-kit";

const ProductFragment = () => {
  const navigate = useShellNavigate();
  const _MOCK = useMemo(() => {
    return MOCK_DATA.slice(0, 3);
  }, []);

  const handleClickProduct = useCallback(
    (id: string) => {
      navigate(`/fleamarket/${id}`);
    },
    [navigate]
  );
  return (
    <Container>
      <Title element="h4">추천 상품목록</Title>
      <div className="list">
        {_MOCK.map((product) => {
          return (
            <ProductItem onClick={() => handleClickProduct(product.id)}>
              <Title element="h5" className="item-title">
                {product.title}
              </Title>
              <div className="item-description">
                {product.price.toLocaleString()}원
              </div>
            </ProductItem>
          );
        })}
      </div>
    </Container>
  );
};

export default ProductFragment;
