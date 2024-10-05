import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./product-card.style";
import { Title } from "@mf-toy/ui-kit";

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
        <Title element="h4" className="card-title">
          {title}
        </Title>
        <div className="card-price">{price.toLocaleString()}</div>
        <div className="card-address">{address}</div>
        <div className="card-counts">
          <span>관심 {likeCount}</span>∙<span>채팅 {chatCount}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
