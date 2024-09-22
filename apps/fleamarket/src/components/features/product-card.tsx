import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  address: string;
  chatCount: number;
  likeCount: number;
};

const ProductCard: React.FC<Props> = (props) => {
  const { imageUrl, title, price, address, chatCount, likeCount, id } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <div className="fleamarket-product-image">
        <img src={imageUrl} />
      </div>
      <div className="fleamarket-product-info">
        <h2 className="card-title">{title}</h2>
        <div className="card-price">{price.toLocaleString()}</div>
        <div className="card-address">{address}</div>
        <div className="card-counts">
          <span>관심 {likeCount}</span>∙<span>채팅 {chatCount}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 223px;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 8px;
  cursor: pointer;

  & .fleamarket-product-image {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    background-color: #f8f9fa;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }

  & .fleamarket-product-info {
    color: #212529;

    .card-title {
      font-size: 16px;
      letter-spacing: -0.02px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .card-price {
      font-size: 15px;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 4px;
    }
    .card-address {
      font-size: 13px;
      color: #212529;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 4px;
      line-height: 1.5;
    }
    .card-counts {
      display: flex;
      gap: 4px;
      font-size: 13px;
      color: #868e96;
    }
  }
`;

export default ProductCard;
