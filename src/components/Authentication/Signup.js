import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";
import { signup } from "../../store/actions/authActions";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Sign Up</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            UserName
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.username}
              type="text"
              name="username"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.password}
              type="password"
              name="password"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.email}
              type="text"
              name="email"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.firstname}
              type="text"
              name="firstname"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.lastname}
              type="text"
              name="lastname"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <FormButton>
          <button type="submit" class="btn btn-primary align-self-end">
            Sign Up
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
};

export default Signup;
