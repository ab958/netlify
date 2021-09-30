const axios = require("axios");

exports.handler = async function (event, context) {
  // const data = await axios("https://jsonplaceholder.typicode.com/posts");
  // console.log(context, "wahab");

  if (event.httpMethod == "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: data.data,
      }),
    };
  } else if (event.httpMethod == "POST") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "helloooo",
      }),
    };
  } else {
    return {
      statusCode: 200,
      body: "Hello ",
    };
  }
};
