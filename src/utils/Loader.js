/**
 * 로딩 시 나타라는 동그라미
 */
import React from "react";
import Loader from "react-loader-spinner"
import LoaderContainer from '../styles/LoaderStyled';
import { mainColor } from "../styles/GlobalStyle";

export default () => (
  <LoaderContainer>
    <Loader 
      type="Oval"
      color={mainColor}
      height={80}
      width={80}
      timeout={10000}
    />
  </LoaderContainer>
);