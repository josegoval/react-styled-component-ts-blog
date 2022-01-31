import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  align-items: center;
`;
