/**
 * 로딩 시 나타라는 동그라미
 */
import React from "react";
import { TailSpin } from "react-loader-spinner"
import LoaderContainer from '../styles/LoaderStyled';
import { mainColor } from "../styles/GlobalStyle";

function Loader() {
  return (
    <LoaderContainer>
      <TailSpin 
        type="Oval"
        color={mainColor}
        height={80}
        width={80}
        timeout={10000}
      />
    </LoaderContainer>
  );
};

export default Loader;