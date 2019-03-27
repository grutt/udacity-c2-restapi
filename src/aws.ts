var AWS = require('aws-sdk');

export const feedUrlBucket = 'udagram-ruttner-dev'

//Configure AWS
//TODO IF ENV IS DEV
var credentials = new AWS.SharedIniFileCredentials({profile: 'udacity'});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: 'us-east-2',
  params: {Bucket: feedUrlBucket}
});