import axios from "axios";

export default function Logout() {
  axios({
    method: "post",
    url: "http://localhost:9000/api/logout",
    data: {},
  });
  return <></>;
}
