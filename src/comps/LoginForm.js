import { useState } from "react";

import axios from "axios";

//export const tokenName = "s11login";

//import { useHistory } from "react-router-dom";

/*
  omer@workintech.com.tr
  123456
*/

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "omer@workintech.com.tr",
    password: "123456",
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

    /*axios({
      method: "post",
      url: "https://wit-courses.onrender.com/login",
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
      });*/
  }

  return (
    <>
      <h2 className="text-xl font-bold p-2">Giriş Yap</h2>
      <form className="text-right" onSubmit={handleSubmit}>
        <label className="block mb-2">
          Kullanıcı adı
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="text"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <label className="block mb-2">
          Şifre
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-yellow-500 rounded">
          Giriş yap
        </button>
      </form>
    </>
  );
}
