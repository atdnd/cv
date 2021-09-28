import styled from "@emotion/styled"

export const StyledBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 20vh;
  padding: 2rem;  
  background: ${(props) => props.isNegative ? `var(--color-main)` : `transparent`}; 
  color: ${(props) => props.isNegative ? `#fff` : `var(--color-main)`}; 

  > div {
    max-width: 960px;
    margin-left: 10vw;
  }
`;
