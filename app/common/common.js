import S3 from 'aws-s3'
import AWS from 'aws-sdk'
const config = {
    bucketName: 'fylmy9',
    dirName: 'photos',
    region: 'ap-south-1',
    accessKeyId: 'AKIAUN5KZISU5HZPWQ5W',
    secretAccessKey: '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',
}
AWS.config.update(
    {
        accessKeyId: "AKIAUN5KZISU5HZPWQ5W",
        secretAccessKey: "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",
    }
);

const S3Client = new S3(config);
const AWSS3 = new AWS.S3();
exports.uploadImage = (file,newFileName,cb) => {
    S3Client
    .uploadFile(file, newFileName)
    .then(data => {cb(data,null);})
    .catch(err => {cb(null,err);console.error(err)})

}
//getS3Objects((returnData)=>{console.log(returnData)})
export const getS3Objects = (cb) => {
    AWSS3.getObject({
        Bucket: 'fylmy9',
        Key: 'photos/Screenshot from 2020-02-17 21-56-47.png.png',
    },(err,data)=>{
        if(err){
            cb(null,errr)
        }else{
            cb(data,null)
        }

    })
}