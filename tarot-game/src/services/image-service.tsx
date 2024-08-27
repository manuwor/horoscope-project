export const generateImageFromText = (
    nameId: string,
    explanation: string
): Promise<string | undefined> => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return Promise.resolve(undefined);
    }

    // Set canvas dimensions
    canvas.width = 1260;
    canvas.height = 630;

    // Draw background
    ctx.fillStyle = "#000000"; // Background color black
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load and draw the background image with CORS enabled
    const backgroundImage = new Image();
    backgroundImage.crossOrigin = "anonymous"; // Allow cross-origin image loading
    backgroundImage.src = 'https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fbg.png?alt=media';

    return new Promise((resolve) => {
        backgroundImage.onload = () => {
            // Draw the image on the canvas
            ctx.drawImage(
                backgroundImage, 
                0, 
                canvas.height - backgroundImage.height, // Position the image at the bottom
                canvas.width, 
                backgroundImage.height
            );

            // Set text styles using the pre-loaded global font
            ctx.fillStyle = "#FFFFFF"; // Text color white
            ctx.font = "bold 40px 'IBMPlexSansThaiLooped-Medium'"; // Font for name_id
            ctx.textAlign = "center";

            // Add name_id text
            ctx.fillText(nameId, canvas.width / 2, 150);

            // Set font for explanation
            ctx.font = "30px 'IBMPlexSansThaiLooped-Medium'"; // Font for explanation

            // Add explanation text, handle multi-line text if it's too long
            const lines: string[] = wrapText(ctx, explanation, canvas.width - 50);
            lines.forEach((line, index) => {
                ctx.fillText(line, canvas.width / 2, 250 + index * 50);
            });

            // Convert canvas to image and compress it
            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        const reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            resolve(reader.result as string);
                        };
                    } else {
                        resolve(undefined);
                    }
                },
                "image/jpeg",
                0.7 // Adjust compression quality to keep image size < 60KB
            );
        };

        backgroundImage.onerror = () => {
            console.error('Failed to load the background image.');
            resolve(undefined);
        };
    });
};

// Function to wrap text to fit within the canvas
export const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
): string[] => {
    const words: string[] = text.split(" ");
    const lines: string[] = [];
    let currentLine: string = words[0];

    for (let i = 1; i < words.length; i++) {
        const word: string = words[i];
        const width: number = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
};
