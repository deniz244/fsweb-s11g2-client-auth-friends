import axios from "axios";

export default function FriendsList() {
  axios
    .get("http://localhost:9000/api/friends")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return (
    <>
      <h1 className="text-xl font-bold p-2"> FRIENDS LIST</h1>
    </>
  );
}
