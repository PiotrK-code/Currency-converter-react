import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 700px;
  margin: 20px;
  padding: 40px;
  background: ${({ theme }) => theme.colot.white};
  border-radius: 20px;
  box-shadow: 0 0 30px ${({ theme }) => theme.colot.black};
`;