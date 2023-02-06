import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Feed from "./feeds";

const DisplayData = ({ token, ...props }) => {
  const [data, setData] = useState([]);
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    const abortController = new AbortController();

    async function getInstagramData() {
      try {
        const response = axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`
        );
        setData(response.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }

    getInstagramData();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);
  return (
    <div>
      {data.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default DisplayData;
