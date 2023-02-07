import logo from "./logo.svg";
import "./App.css";
import Home, { getData } from "./Home";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const key = process.env.REACT_APP_INSTAGRAM_KEY;
      const url = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&access_token=${key}`;
      const data = await fetch(url);
      const feed = await data.json();
      setData(feed);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Home feed={data} />
    </div>
  );
}

export default App;
