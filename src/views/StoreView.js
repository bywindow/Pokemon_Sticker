import React, { useState } from "react";
import ReactModal from 'react-modal';
import * as s from "../styles/StoreStyles";

const StoreView = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <s.modalContainer>모달 입니다.</s.modalContainer>
    </ReactModal>
  );
};
​
export default StoreView;