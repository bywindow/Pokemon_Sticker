/* global kakao */
import React, { useEffect } from "react";
import * as s from "../../styles/MapStyles";

const { kakao } = window;

const KaKaoMap = ({storesLatLng}) => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.50459286221182, 127.04900473306553),
      level: 13,
    }

    const map = new window.kakao.maps.Map(container, options);

    
  }, []);

  return (
    <></>
  )
}