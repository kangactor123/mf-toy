import styled from "styled-components";

export const ProductItem = styled.div`
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

export const Container = styled.div`
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
