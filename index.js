const bucket = "lab17-images";

const AWS = require('aws-sdk');
const S3= new AWS.S3();

exports.handler = async (event, context, callback) => {
    var transcript = await download();
    console.log('this is the transcript:', transcript);
}

async function download(){
  try {

    const data = await S3.getObject(
    {   Bucket: bucket, 
        Key: "images.json",

    }).promise();

    console.log('this is the data:', data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }
  catch (err) {
    return {
      statusCode: err.statusCode || 400,
      body: err.message || JSON.stringify(err.message)
    }
  }
}
