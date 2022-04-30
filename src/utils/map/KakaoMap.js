/* global kakao */
import React, { useEffect, useState } from "react";
import * as s from "../../styles/MapStyles";
import Loader from '../Loader';

const { kakao } = window;

const KaKaoMap = ({stores}) => {

  const [isLoading, setIsLoading] = useState(true);
  // 데이터의 위도 경도를 지도 쓸 수 있도록 수정
  const [state, setState] = useState(stores.map((item) => {
    return {...item, latlng: new kakao.maps.LatLng(item.latitude, item.longitude)}
  }));

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.50459286221182, 127.04900473306553),
      level: 3,
    }

    const map = new window.kakao.maps.Map(container, options);

    //marker image
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    state.forEach((element) => {
      var imageSize = new kakao.maps.Size(24, 35);
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var marker = new kakao.maps.Marker({
        map: map,
        position: element.latlng,
        title: element.name,
        image: markerImage,
      })
    });

    setIsLoading(false);
  }, [state]);

  return (
    <s.mapContainer>
      {isLoading && (
        <Loader />
      )}
      <s.mapView id="map"></s.mapView>
    </s.mapContainer>
  )
}

export default KaKaoMap;