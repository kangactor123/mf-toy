import React, { Suspense } from "react";
import StoreCard from "../../components/features/store-card";
import { useNavigate } from "react-router-dom";
import { _MOCK } from "../../mocks/store";
import { Container, StoreList } from "./style";

import { ErrorBoundary } from "react-error-boundary";
import { importRemote } from "@module-federation/utilities";

import { Title } from "@mf-toy/ui-kit";

const RecommendProductContainer = React.lazy(() =>
  importRemote({
    url: "http://localhost:3001",
    scope: "fleamarket",
    module: "fragment-recommend-products",
    remoteEntryFileName: "remoteEntry.js",
  })
);

const List = () => {
  const navigate = useNavigate();
  const handleCardClick = (id: string) => {
    navigate(`${id}`);
  };
  return (
    <Container>
      <div>
        <Title element="h2" textAlign="center">
          다양한 동네업체를 볼 수 있어요
        </Title>
        <StoreList>
          {_MOCK.map((store) => (
            <StoreCard {...store} onClick={handleCardClick} />
          ))}
        </StoreList>
      </div>
      <section>
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>loading..</div>}>
            <RecommendProductContainer />
          </Suspense>
        </ErrorBoundary>
      </section>
    </Container>
  );
};

export default List;
