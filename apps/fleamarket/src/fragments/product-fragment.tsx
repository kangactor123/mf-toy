import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { MOCK_DATA } from "../mocks/products";
import { useShellNavigate } from "@mf-toy/shell-router";

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
      <h2 className="title">추천 상품목록</h2>
      <div className="list">
        {_MOCK.map((product) => {
          return (
            <ProductItem onClick={() => handleClickProduct(product.id)}>
              <h3 className="item-title">{product.title}</h3>
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

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px 16px;
  .item-title {
    font-size: 16px;
    font-weight: 600;
    color: rgb(0 0 0 / 0.9);
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .item-price {
    font-size: 14px;
    color: rgb(0 0 0 / 0.6);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px 12px 16px;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid rgb(0 0 0 / 0.1);
  gap: 10px;

  & .title {
    font-size: 15px;
    font-weight: bold;
    height: 15px;
  }

  & .list {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
    background-color: white;
  }
`;

export default ProductFragment;
