import instance from "./instance";
import decode from "jwt-decode";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch({
        type: "SET_USER",
        payload: decode(res.data.token),
      });
      history.push("/");
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
      dispatch({
        type: "SET_USER",
        payload: decode(res.data.token),
      });
      history.push("/");
      alert("Successfully signed in");
    } catch (error) {}
  };
};

export const signout = () => {
  return {
    type: "SET_USER",
    payload: null,
  };
};
