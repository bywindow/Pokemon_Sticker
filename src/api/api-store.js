import api from "./api-base";

export const storeApi = {
  getStores: api.get(`/stores`),
}

export const storeInfoApi = {
  getStoreInfo: (storeId) => api.get(`/stores/${storeId}`),
}
