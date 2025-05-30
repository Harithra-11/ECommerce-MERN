const { imageUploadUtil } = require("../../helpers/cloudinary");

const handleImageUpload = async (req, res) => {
    try {
        const b64=Buffer.from(req.file.buffer).toString('base64');
        const url="data:" + req.file.mimetype+ ";base,"+b64;
        const result=await imageUploadUtil(url);
        res.json({
            success:true,
            result,
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Error Occured'

        })

    }
}
module.exports={handleImageUpload}
// const handleImageUpload = async (req, res) => {
//     try {
//         console.log("MULTER File:", req.file); // 👈 ADD THIS LINE

//         if (!req.file) {
//             return res.status(400).json({
//                 success: false,
//                 message: "No file received"
//             });
//         }

//         const b64 = Buffer.from(req.file.buffer).toString('base64');
//         const url = "data:" + req.file.mimetype + ";base64," + b64;
//         const result = await imageUploadUtil(url);

//         res.json({
//             success: true,
//             result,
//         });
//     } catch (error) {
//         console.log("UPLOAD ERROR:", error); // 👈 Log the full error
//         res.json({
//             success: false,
//             message: 'Error Occured'
//         });
//     }
// }
