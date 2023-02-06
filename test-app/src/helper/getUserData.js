import React, { useState, useEffect } from "react";

const GetUserData = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.data));
  }, []);

  const handleSave = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("YOUR_DATABASE_API_URL", options)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
  };

  return (
    <div>
      <button onClick={handleSave}>Save to Database</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GetUserData;
