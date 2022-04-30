/**
 * author : 이창엽
 * desc : 메인 지도 화면
 */
import React, { useEffect, useState } from "react";
import Header from "../utils/Header";
import * as s from "../styles/HomeStyled";
import KaKaoMap from '../utils/map/KakaoMap';

import { sampleStore } from '../data/SampleData';

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
          <KaKaoMap stores={sampleStore}></KaKaoMap>
        </s.mainContainer>
      </s.backgroundContainer>
    </React.StrictMode>
  );
};

export default HomeView;