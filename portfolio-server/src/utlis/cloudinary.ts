import cloudinary from "cloudinary";
import dotenv from 'dotenv';

dotenv.config({path: '../../.env'});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

async function uploadImage(images: string[]) {
  try {
    const cloudinaryImages = [];
  
    for (const image of images) {
      const result = await cloudinary.v2.uploader.upload(image);
      cloudinaryImages.push(result.url)
    }
  
    return cloudinaryImages;
  } catch (error) {
    console.error('Błąd podczas przesyłania obrazu:', error);
    throw error;
  }
}

export default uploadImage;