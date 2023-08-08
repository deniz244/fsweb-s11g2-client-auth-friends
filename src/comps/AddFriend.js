import { useState } from "react";

import axios from "axios";

export default function AddFriend() {
  return (
    <div>
      <h1 className="text-xl font-bold p-2"> ADD FRIEND</h1>
      <form className="text-right font-bold">
        <label className="block mb-2">
          FRIEND NAME
          <input
            name="email"
            type="text"
            className="p-1 ml-2 borderw-56 text-xl"
          />
        </label>
        <label className="block mb-2">
          FRIEND EMAIL
          <input
            name="password"
            type="password"
            className="p-1 ml-2 borderw-56  text-sm"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-black text-white ">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
