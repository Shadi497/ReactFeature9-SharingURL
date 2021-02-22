import instance from "./instance";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      // console.log("fetching shops");
      const res = await instance.get(`/shops`);
      dispatch({
        type: "FETCH_SHOPS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createShop = (newShop) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await instance.post("/shops/new", formData);
      dispatch({
        type: "CREATE_SHOP",
        payload: { newShop: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
