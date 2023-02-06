import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import getUserData from "./helper/getUserData";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [data, setData] = useState([]);

  const getAccessToken = () => {
    const app_id = "1484600968698750";
    const redirectUri = "https://retrieve-instagram-data.vercel.app/";
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${app_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };

  if (window.location.hash) {
    const token = window.location.href.split("=")[1];
    setAccessToken(token.split("#")[0]);
  }

  // useEffect(() => {
  //   const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseData) => setData(responseData.data));

  //   console.log(data);
  // }, []);

  return (
    <div className="App">
      <div>
        <button
          className="mt-24 rounded-sm ring-1 p-2"
          onClick={getAccessToken}
        >
          Get Access Token
        </button>
        <p>Access Token: {accessToken}</p>
      </div>
      <div>{data}</div>
    </div>
  );
}

export default App;
