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
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const marker = new kakao.maps.Marker({
        map: map,
        position: element.latlng,
        image: markerImage,
      })

      marker.setMap(map);

      //고칠 부분 : string이라서 html 형식으로 직접 써줘야 됨
      const infowindow = new kakao.maps.InfoWindow({
        content: `<s.iwContent><s.iwText>${element.name}</s.iwText></s.iwContent>`
      })
      
      kakao.maps.event.addListener(marker, 'mouseover', function() {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);
      });
      kakao.maps.event.addListener(marker, 'mouseout', function() {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
      });
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