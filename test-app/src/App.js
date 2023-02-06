import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const token = "";
  const app_id = "1484600968698750";
  const redirectUri = "https://iykethe1st.vercel.app/";

  // window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${app_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

  const getAccessToken = () => {
    if (window.location.hash) {
      token = window.location.href.split("=")[1];
      setAccessToken(token);
    }
  };
  console.log(token);

  return (
    <div className="App">
      <div>
        {accessToken ? (
          <p>Access Token: {accessToken} </p>
        ) : (
          <a
            href={`https://api.instagram.com/oauth/authorize/?client_id=${app_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`}
            target="_blank"
          >
            <button
              className="mt-24 rounded-sm ring-1 p-2"
              onClick={getAccessToken}
            >
              Authorize
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
