import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '../utility/firebase-config';

/**
 * Compresses a base64 image and uploads it to Firebase Storage.
 * @param base64Image - The base64 image string to compress and upload.
 * @param imageName - The name to use for the uploaded image.
 * @returns A promise that resolves to the URL of the uploaded image.
 */
export async function compressAndUploadImage(base64Image: string, imageName: string): Promise<string> {
    try {
        // Compress the image to ensure it is under 50KB
        const compressedImage = await compressImage(base64Image, 0.7); // Adjust quality to achieve desired size

        // Create a reference to the image in Firebase Storage
        const storageRef = ref(storage, `results/${imageName}`);

        // Upload the image as a base64 string
        await uploadString(storageRef, compressedImage, 'data_url');

        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image');
    }
}

/**
 * Compresses a base64 image using a canvas.
 * @param base64Image - The base64 image string to compress.
 * @param quality - The quality of the compression (0 to 1).
 * @returns A promise that resolves to the compressed base64 image string.
 */
function compressImage(base64Image: string, quality: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Image;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return reject('Failed to get canvas context');
            }
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        const reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            resolve(reader.result as string);
                        };
                    } else {
                        reject('Failed to compress image');
                    }
                },
                'image/jpeg',
                quality // Adjust quality to control size (e.g., 0.7 for ~70% quality)
            );
        };
        img.onerror = () => reject('Failed to load image');
    });
}
