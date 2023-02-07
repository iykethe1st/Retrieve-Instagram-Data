import React, { useState, useEffect } from "react";

const Home = () => {
  const [authorizationCode, setAuthorizationCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const CLIENT_ID = "1484600968698750";
  const CLIENT_SECRET = "0035ceec7ed2c38f1af236615b75d05e";
  const REDIRECT_URI = "https://retrieve-instagram-data.vercel.app/";

  const handleClick = () => {
    url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  };

  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");
  if (code) {
    setAuthorizationCode(code);
    // retrieveAccessToken(code);
  }

  // if (window.location.hash) {
  //   const code = window.location.href.split("=")[1];
  //   setAuthorizationCode(code);
  //   // retrieveAccessToken(code);
  // }

  const retrieveAccessToken = async (code) => {
    try {
      const response = await fetch(
        "https://api.instagram.com/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`,
        }
      );
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(accessToken);
  // console.log("-------------------");
  console.log(authorizationCode);

  return (
    <div>
      <button onClick={handleClick}>
        Retrieve Authorization Code and Access Token
      </button>
      {authorizationCode ? (
        <div>
          Authorization Code: <pre>{authorizationCode}</pre>
        </div>
      ) : null}
      {accessToken ? (
        <div>
          Access Token: <span>{accessToken}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
