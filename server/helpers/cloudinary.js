const cloudinary=require('cloudinary').v2;
const multer=require('multer');
cloudinary.config({
    cloud_name:'dsdiztt6u',
    api_key:'854868735662983',
    api_secret:"Vvo3ynWhvMpD6hM3C5cxcLZaXcg"
});
const storage=new multer.memoryStorage();
async function imageUploadUtil(file){
    const result=await cloudinary.uploader.upload(file,{
        resource_type:'auto'
    })
    return result;
}
const upload=multer({storage});
module.exports={upload,imageUploadUtil}