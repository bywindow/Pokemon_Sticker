import React, { useState, useEffect } from "react";
import { storeInfoApi } from "../api/api-store";
import StoreView from "../views/StoreView";

const StoreModel = ({ modalIsOpen, id }) => {
  console.log("store", id);
  const [isOpen, setIsOpen] = useState(modalIsOpen);

  return (
    <StoreView
      isOpen={isOpen}
    />
  )
}

export default StoreModel;