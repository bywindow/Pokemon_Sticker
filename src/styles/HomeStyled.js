import styled from 'styled-components';

export const backgroundContainer = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => props.windowWidth}px;
  height: ${(props) => props.windowHeight - 86}px;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

export const mainContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 3px;
`;