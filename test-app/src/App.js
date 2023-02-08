import logo from "./logo.svg";
import "./App.css";
import Home, { getData } from "./Home";
import { useEffect, useState } from "react";
import axios from "axios";
import FirebaseSave from "./FirebaseSave";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const key = process.env.REACT_APP_INSTAGRAM_KEY;
      const url = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&access_token=${key}`;
      const data = await fetch(url);
      const feed = await data.json();
      const result = feed.data;
      setData(result);
      submitData(result);
      console.log(result);
    };
    getData();
  }, []);

  const submitData = (data) => {
    return axios.post("http://localhost:3500/user-data", {
      name: data[0].username,
      data: data,
    });
  };

  return (
    <div className="App">
      <Home feed={data} />
      <FirebaseSave userData={data} />
    </div>
  );
}

export default App;
