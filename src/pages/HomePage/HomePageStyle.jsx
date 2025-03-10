import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
`;

export const WrapperButtonShare = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 0.75rem;
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  position: relative;
  background-color: #f5f3ea;
  color: black;
  border: 2px solid black;
  height: 40px;
  padding: 8px 20px;
  gap: 8px;
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;

  box-shadow: 3px 3px 0px black;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 3px 3px 0px black;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0px black;
  }
`;
