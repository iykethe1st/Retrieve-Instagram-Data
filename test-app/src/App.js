import logo from "./logo.svg";
import "./App.css";
import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";

// import axios from "axios";
// import getUserData from "./helper/getUserData";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const location = useLocation();
  const getAccessToken = () => {
    const app_id = "1484600968698750";
    const redirectUri = "https://retrieve-instagram-data.vercel.app/";
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${app_id}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
  };
  if (window.location.hash) {
    const token = window.location.href.split("=")[1];
    setAccessToken(token.split("#")[0]);
    console.log(accessToken);
    return redirect("/");
  }

  const insta_token =
    "AQDWPcOOS2rSMB8JAoBuabgTDOKqAiBrCU9EN4uxGy02gXCe4BmgtzUNpcPgz-GH_9gabow_qHMyGvS7Da80K6aN4He-29HsSBi_SX_fseaKTjjaQvLiArvRNBlaiiMoc2lELgqpzXhrhw4oqGxiAdruiB7FuaDlZbiJaM3BXCXZFbjQgwUiY0TlaUYirtpRK7QAVL-fjkKNB4A6zMIXEAikn2HCGKrQtbQU6ZakEVCcdQ";

  return (
    <div className="App ">
      <a onClick={getAccessToken} target="_blank">
        <button className="ring-2 p-2 rounded-sm bg-slate-400 mt-24">
          Authorize
        </button>
      </a>
    </div>
  );
}

export default App;
