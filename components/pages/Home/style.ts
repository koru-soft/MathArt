import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LinkWrapper = styled.div`
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
`;

export default { HomeContainer, LinkWrapper };
