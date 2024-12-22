import {v2 as cloudinary} from "cloudinary"
import fs from "fs"




    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });




    const uploadOnCloudinary = async (localFilePath) =>{
        try{
            if(!localFilePath) return null
            const response = await cloudinary.uploader.upload
            (localFilePath,{
                resource_type: "auto"
            })
            // console.log("file uploaded successfully",
            //     response.url
            // );
            fs.unlinkSync(localFilePath)
            return response;
            
        } catch(error){
            fs.unlinkSync(localFilePath) //remove the locally saved temp file
            return null;
        }
        
    }

    export {uploadOnCloudinary}
    