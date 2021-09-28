import styled from "@emotion/styled"

export const StyledTitle = styled.h1`
  font-size: 23vh;
  line-height: 23vh;
  display: block;
  text-align: left;
  font-weight: bold;

  @media screen and (max-width: 1120px) {
    font-size: 16vw;
    line-height: 16vw;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 4.2vh;
  display: block;
  text-align: left;
  font-weight: bold;

  @media screen and (max-width: 1120px) {
    font-size: 5vw;
    line-height: 5.25vw;
  }
`;
