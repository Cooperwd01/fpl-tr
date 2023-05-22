const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { url } = event.queryStringParameters;
  
  // Make the request to the third-party API
  const response = await fetch(url);
  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};