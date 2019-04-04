import AWS = require('aws-sdk');

export const feedUrlBucket = 'udagram-ruttner-dev'

//Configure AWS
//TODO IF ENV IS DEV
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: 'us-east-2',
  params: {Bucket: feedUrlBucket}
});


/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{
  return 'https://s3-us-west-1.amazonaws.com/udacity-content/images/icon-error.svg';
  // const signedUrlExpireSeconds = 60 * 5

    // const url = s3.getSignedUrl('getObject', {
    //     Bucket: feedUrlBucket,
    //     Key: key,
    //     Expires: signedUrlExpireSeconds
    //   });

    // return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){
    return 'wompwomp';
    // const signedUrlExpireSeconds = 60 * 5

    // const url = s3.getSignedUrl('putObject', {
    //   Bucket: feedUrlBucket,
    //   Key: key,
    //   Expires: signedUrlExpireSeconds
    // });

    // return url;
}