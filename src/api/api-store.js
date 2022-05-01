import api from "./api-base";

export const storeApi = {
  getStores: api.get(`/stores`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),
}

export const storeInfoApi = {
  getStoreInfo: (storeId) => api.get(`/stores/${storeId}`),
}
