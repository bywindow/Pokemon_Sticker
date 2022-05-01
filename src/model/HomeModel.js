import React, { useEffect, useState } from "react";
import { storeApi, storeInfoApi } from "../api/api-store";
import HomeView from "../views/HomeView";

const HomeModel = ({}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchStores();
  },[]);

  const fetchStores = async () => {
    let result;
    setIsLoading(true);
    try{
      result = await storeApi.getStores;
    } catch(e) {
      console.log("error", e);
    } finally {
      setState(result);
      setIsLoading(false);
      console.log(result);
    }
  };

  // 클릭한 편의점 정보
  const getStoreInfo = async (id) => {
    let result;
    try {
      result = await storeInfoApi.getStoreInfo(id);
    } catch(e) {
      console.log("error", e);
    } finally {
      return result;
    }
  };

  return (
    <HomeView
      isLoading={isLoading}
      state={state}
      getStoreInfo={getStoreInfo}
    />
  )
}

export default HomeModel;