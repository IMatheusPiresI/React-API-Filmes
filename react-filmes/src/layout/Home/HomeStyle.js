import styled from "styled-components";

export const ContainerBody = styled.div`
    width: 100%;
    min-height: 100vh;

    .scroll-on{
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , rgba(232, 0, 97, .5) );
  }
  
  .scroll-off{
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , transparent );
  }
`;