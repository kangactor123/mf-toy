import React from "react";
import StoreCard from "../../components/features/store-card";
import { useNavigate } from "react-router-dom";
import { _MOCK } from "../../mocks/store";
import { Container, StoreList, Title } from "./style";

const List = () => {
  const navigate = useNavigate();
  const handleCardClick = (id: string) => {
    navigate(`${id}`);
  };
  return (
    <Container>
      <Title>다양한 동네업체를 볼 수 있어요</Title>
      <StoreList>
        {_MOCK.map((store) => (
          <StoreCard {...store} onClick={handleCardClick} />
        ))}
      </StoreList>
    </Container>
  );
};

export default List;
