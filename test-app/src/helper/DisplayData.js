import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Feed from "./feeds";

const DisplayData = () => {
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
  const [data, setData] = useState([]);
  const tokenProp = useRef(accessToken);
  tokenProp.current = accessToken;

  useEffect(() => {
    const abortController = new AbortController();

    async function getInstagramData() {
      try {
        const response = axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${accessToken}`
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }

    getInstagramData();

    return () => {
      abortController.abort();
    };
  }, [12]);
  return (
    <div>
      {!accessToken && (
        <button className="ring-2 p-2 rounded " onClick={getAccessToken}>
          Authorize with Instagram
        </button>
      )}

      {data.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default DisplayData;
