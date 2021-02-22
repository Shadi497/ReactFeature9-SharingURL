import instance from "./instance";
import decode from "jwt-decode";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      localStorage.setItem("Token", res.data.token);
      dispatch({
        type: "SET_USER",
        payload: decode(res.data.token),
      });
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
      localStorage.setItem("Token", res.data.token);
      dispatch({
        type: "SET_USER",
        payload: decode(res.data.token),
      });
      history.replace("/");
      alert("Successfully signed in");
    } catch (error) {}
  };
};

export const signout = () => {
  localStorage.removeItem("Token");
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
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    } else {
      dispatch(signout());
    }
  }
};
