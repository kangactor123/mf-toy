import styled from "styled-components";

export const CardContainer = styled.li`
  width: 90%;
  padding: 12px;
  display: flex;
  gap: 12px;
  cursor: pointer;

  & img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const Title = styled.h3`
  display: inline;
  margin-right: 4px;
  font-size: 18px;
  font-weight: 600;
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .address,
  .review {
    font-size: 14px;
    font-weight: 400;
    color: #868b94;
  }

  & .description {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #212124;
  }
`;
