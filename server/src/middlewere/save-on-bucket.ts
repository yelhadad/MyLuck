import { Request, Response, NextFunction } from 'express';
import AWS from 'aws-sdk'
import { bucketRegion, bucketURL } from '../aws/bucket/bucketProperties'
import fs from 'fs'
import path from 'path'
import { ServerError } from '@ye-ticketing/common';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  interface uploadParams {
    Body: any,
    Bucket: string,
    Key: string,
  }
    // config region
    AWS.config.update({region: bucketRegion});

    // create new AWS S3 Object:
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});

    // call S3 to retrieve upload file to specified bucket
    const uploadParams: uploadParams = {Bucket: bucketURL, Key: '', Body: ''}
    const { image } = req.body

    // Configure the file stream and obtain the upload parameters
    const fileStream = fs.createReadStream(image);
    fileStream.on('error', (err) => {
      console.log('File Error', err)
    });

    uploadParams.Body = fileStream;
    uploadParams.Key = path.basename(image)

    s3.upload(uploadParams, (err: any, data: any) => {
      if(err){
        throw new ServerError('unable to save image in aws')
      } if(data) {
        // need to return data
        req.body.imageUrl = data
        next()
      }
    })

}
