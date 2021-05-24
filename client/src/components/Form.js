import React from "react";
import { createUser, fetchUser } from "../api/index.js";

function Form(props) {
  const { user, setUser } = props;

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createUser(user);
  }

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetchUser(user);
  }

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [key]: value,
    });
  }

  return (
    <div>
      <form method="POST" to="/signup" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <form method="GET" to="/signup" onSubmit={loginUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
