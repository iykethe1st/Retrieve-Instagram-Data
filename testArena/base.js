const fetch = require("node-fetch");
const axios = require("axios");

async function getAccessToken(code) {
  try {
    const result = await fetch(
      "https://api.instagram.com/oauth/access_token",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: "1484600968698750",
          client_secret: "0035ceec7ed2c38f1af236615b75d05e",
          grant_type: "authorization_code",
          redirect_uri: "https://iykethe1st.vercel.app/",
          code: code,
        }).toString(),
      }
    );
    const response = await result.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const response = await axios.get(
      "https://graph.instagram.com/me/media?fields=id,username&access_token=AQBFMl9Gnx2aDGaIsWPs0KdAtslFeDlNa2CS3u96xJhn7TM3b-e6vfv_wc93m9rlyo0xlXTNRP-FlH_TQMSiH_iJMA6nohWHDJPFTWuZ2u0s_9BUxwt3K4wNttsjrpqnaaOhRqLMGZzny4C4AEzWIYVo_1zU4RcXHArCWFQ4PRP4inim6N1Vg_iwaXh-_UKim7xD2Z1IMGMqzQN_nCyL1VkstWTvXHjOi5B864aAfbGCEA"
    );
    const result = await response;
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  //   const code =
  //     "AQCibFxLzOcNevmXUkt_-1XG0dy80KooqnA0_9IYurSwjz27QtW28RmTO8y2d-7-DSbfawI3_-NGYqh2v8NAPuHsjM0UFSz3uk-hQe27d_JcuIpcFErpRltSme9DasVadrQ_-OH4EIoedNxq--yexCuGKj4QhCXQeM71rQjUdIHehQPivNBiLkAWbQk3npcRV2dTFizi8kFJMMlhW_OQxZRAPZVIIlBC8XIfJ2DCDdbnOQ";
  //   const accessToken = await getAccessToken(code);
  //   console.log(accessToken);
  const user = await getUser();
  console.log(user);
}

main();
