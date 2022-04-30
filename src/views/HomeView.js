/**
 * author : 이창엽
 * desc : 메인 지도 화면
 */
import React, { useEffect, useState } from "react";
import Header from "../utils/Header";
import * as s from "../styles/HomeStyled";

const HomeView = ({

}) => {
  // console.log("HomeView");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return(
    <React.StrictMode>
      <Header />
      <s.backgroundContainer windowWidth={width} windowHeight={height}>
        
        <s.mainContainer>
          
        </s.mainContainer>
      </s.backgroundContainer>
    </React.StrictMode>
  );
};

export default HomeView;