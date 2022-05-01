/* global kakao */
import React, { useEffect, useState } from "react";
import * as s from "../../styles/MapStyles";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { mainContainer } from "../../styles/StoreStyles";

const { kakao } = window;

const KaKaoMap = ({
  stores,
  getInfo,
  }) => {
    // 데이터의 위도 경도를 지도 쓸 수 있도록 수정
    const [state, setState] = useState(stores[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState([]);

    return (
      <>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 37.5038134,
            lng: 127.044811,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "100%",
          }}
          level={3} // 지도의 확대 레벨
        >
          {state.map((item) => (
            <MapMarker
              key={`${item.name}-${item.id}`}
              position={{
                lat: item.latitude,
                lng: item.longitude,
              }} // 마커를 표시할 위치
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  widht: 24,
                  height: 35
                }, // 마커이미지의 크기입니다
              }}
              title={item.name} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              clickable={true}
              onClick={() => setIsOpen(true)}
            />
          ))}
        </Map>
        
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={mainContainer}
        >
          
        </Modal>
      </>
    )
}

export default KaKaoMap;