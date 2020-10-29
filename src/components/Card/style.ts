import styled from "@emotion/styled";
import gradient from "random-gradient";

export const Container = styled.div`
  border-radius: var(--sz1);
`;

export type Cover = {
  hash: string;
};

export const Cover = styled.div<Cover>`
  display: grid;
  place-items: center;
  min-width: 100%;
  min-height: 120px;
  border-top-left-radius: var(--sz1);
  border-top-right-radius: var(--sz1);
  background: ${({ hash }) => gradient(hash, "vertical")};
`;

export const Title = styled.h3`
  font-size: var(--sz4);
  font-weight: 500;
  margin: 0;
  margin-bottom: var(--sz1);
  color: var(--accents-7);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Subtitle = styled.h4`
  font-size: var(--sz3);
  font-weight: 300;
  text-transform: uppercase;
  color: var(--accents-4);
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Body = styled.div`
  padding: var(--sz3);
  border: 1px solid var(--accents-2);
  border-top: 0;
  border-radius: 0 0 var(--sz2) var(--sz2);
`;

export const Button = styled.button`
  color: var(--background);
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`;
