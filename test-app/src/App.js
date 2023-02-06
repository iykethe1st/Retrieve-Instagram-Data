import logo from "./logo.svg";
import "./App.css";
import GetUserData from "./helper/getUserData";
import { useEffect, useState } from "react";
import DisplayData from "./helper/DisplayData";
// import axios from "axios";
// import getUserData from "./helper/getUserData";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const getAccessToken = () => {
    const app_id = "1484600968698750";
    const redirectUri = "https://retrieve-instagram-data.vercel.app/";
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${app_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };
  if (window.location.hash) {
    const token = window.location.href.split("=")[1];
    setAccessToken(token.split("#")[0]);
  }

  console.log(accessToken);
  //   useEffect(() => {
  //     // Check if the access token is in the URL hash
  //     const hash = window.location.hash
  //       .substring(1)
  //       .split("&")
  //       .reduce(function (initial, item) {
  //         if (item) {
  //           var parts = item.split("=");
  //           initial[parts[0]] = decodeURIComponent(parts[1]);
  //         }
  //         return initial;
  //       }, {});
  //     if (hash.access_token) {
  //       setAccessToken(hash.access_token);
  //     }
  //   }, []);
  //   useEffect(() => {
  //     if (!accessToken) {
  //       return;
  //     }
  //     // Make a request to the Instagram API to retrieve the user data
  //     fetch(
  //       `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setData(data.data));
  //   }, [accessToken]);
  //   // useEffect(() => {
  //   //   const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;
  //   //   fetch(url)
  //   //     .then((response) => response.json())
  //   //     .then((responseData) => setData(responseData.data));
  //   //   console.log(data);
  //   // }, []);
  //   return (
  //     <div className="App p-16">
  //       {accessToken ? (
  //         data ? (
  //           <div>
  //             <p>Username: {data.username}</p>
  //             <p>Full name: {data.full_name}</p>
  //             <p>
  //               Profile picture:{" "}
  //               <img src={data.profile_picture} alt="Profile picture" />
  //             </p>
  //           </div>
  //         ) : (
  //           <p>Loading user data...</p>
  //         )
  //       ) : (
  //         <button className="ring-2 p-2 rounded " onClick={getAccessToken}>
  //           Authorize with Instagram
  //         </button>
  //       )}
  //     </div>
  //   );

  return (
    <div className="App ">
      <h1>Instagram Feed with Instagram API</h1>

      <DisplayData />
    </div>
  );
}

export default App;
