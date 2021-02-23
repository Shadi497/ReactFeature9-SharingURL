import instance from "./instance";
import decode from "jwt-decode";

const setUser = (token) => {
  localStorage.setItem("Token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(instance.defaults.headers.common.Authorization);
  return {
    type: "SET_USER",
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      history.replace("/");
      alert("Successfully signed up");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.replace("/");
      alert("Successfully signed in");
    } catch (error) {}
  };
};

export const signout = () => {
  localStorage.removeItem("Token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: "SET_USER",
    payload: null,
  };
};

export const checkToken = () => (dispatch) => {
  const token = localStorage.getItem("Token");
  if (token) {
    const user = decode(token);

    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};
