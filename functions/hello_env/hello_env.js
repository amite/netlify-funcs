require('dotenv').config();

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const { GREETING } = process.env;
  try {
    const subject = event.queryStringParameters.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${subject}`,
        event: event.body,
        more: 'stuff',
        greeting: GREETING
      })

      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
