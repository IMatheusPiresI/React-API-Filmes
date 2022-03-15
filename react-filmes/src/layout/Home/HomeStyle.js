import styled from "styled-components";

export const ContainerBody = styled.main`
    width: 100%;
    min-height: 100vh;

  .scroll-on{
      background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , rgba(232, 0, 97, .5) );
  }
  
  .scroll-off{
      background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , transparent );
  }
`;

export const ContainerHeader = styled.header`
    width: 100%;
    height: 100%;
`;