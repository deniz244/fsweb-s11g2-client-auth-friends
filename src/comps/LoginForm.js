import { useState } from "react";

import axios from "axios";

export const tokenName = "s11g2login";

//import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    axios({
      method: "post",
      url: "http://localhost:9000/api/login",
      data: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem(tokenName, response.data.token);
        }
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1 className="text-xl font-bold p-2"> LOGIN</h1>
      <form className="font-bold" onSubmit={handleSubmit}>
        <label className="block mb-2">
          USERNAME
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="text"
            className=" block p-1 ml-2 border bg-black w-56  text-xl text-white"
          />
        </label>
        <label className="block mb-2">
          PASSWORD
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            className="block p-1 ml-2 border bg-black w-56  text-xl text-white"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-black text-white ">
          SUBMIT
        </button>
      </form>
    </>
  );
}
