import styled from 'styled-components';

export const StyledWhiteWrapper = styled.div`
  background-color: ${props => props.theme.white};
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 600px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${props => props.theme.black10};
`;

export const StyledFlexColumnCenter = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPadding30Col = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    width: 100%;
  }
`;
