export const generateImageFromText = (
    title: string,
    header: string,
    description: string
): Promise<string | undefined> => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return Promise.resolve(undefined);
    }

    // Set canvas dimensions
    canvas.width = 1260;
    canvas.height = 630;

    // Create radial gradient background
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) / 2);
    gradient.addColorStop(1, '#066137');    // Edge color
    gradient.addColorStop(0.6, '#000000');  // Midpoint color

    // Apply gradient as background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title Text
    ctx.fillStyle = "#ffffff"; // Text color
    ctx.font = "32px 'IBMPlexSansThaiLooped-Medium'"; // Font size and family
    ctx.textAlign = "center";
    ctx.fillText(title, canvas.width / 2, 120); // Centered title text at y=100

    // Header Text
    ctx.font = "bold 60px 'IBMPlexSansThaiLooped-Medium'"; // Font size and style
    ctx.fillText(header, canvas.width / 2, 220); // Centered header text at y=180

    // Description Text
    ctx.font = "35px 'IBMPlexSansThaiLooped-Medium'"; // Font size for description
   // Calculate 60% width for description text and center it
   const descriptionWidth = canvas.width * 0.6;
   const descriptionX = (canvas.width - descriptionWidth) / 2;

   const lines: string[] = wrapText(ctx, description, descriptionWidth); // Wrap text within 60% of the canvas width
   lines.forEach((line, index) => {
       ctx.fillText(line, canvas.width / 2, 320 + index * 60); // Centered description text, with line spacing
   });
    // Convert canvas to image and compress it
    return new Promise((resolve) => {
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
