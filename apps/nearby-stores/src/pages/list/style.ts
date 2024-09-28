import styled from "styled-components";

export const StoreList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  list-style: none;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
