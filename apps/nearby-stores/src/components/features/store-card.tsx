import React from "react";
import { CardContainer, CardInfo, Title } from "./store-card.style";

type StoreCardProps = {
  id: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  name: string;
  address: string;
  description: string;
  review: number;
  onClick: (id: string) => void;
};

const StoreCard = (props: StoreCardProps) => {
  const {
    id,
    thumbnailAlt,
    thumbnailUrl,
    name,
    address,
    description,
    review,
    onClick,
  } = props;
  return (
    <CardContainer key={id} onClick={() => onClick(id)}>
      <img src={thumbnailUrl} alt={thumbnailAlt} />
      <CardInfo>
        <div className="title-row">
          <Title>{name}</Title>
          <span className="address">{address}</span>
        </div>
        <p className="description">{description}</p>
        <span className="review">후기: {review}</span>
      </CardInfo>
    </CardContainer>
  );
};

export default StoreCard;
