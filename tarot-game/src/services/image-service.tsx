export const generateImageFromText = (
    title: string,
    header: string,
    description: string,
    menu_id?: number
): Promise<string | undefined> => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return Promise.resolve(undefined);
    }

    // Set canvas dimensions
    canvas.width = 1260;
    canvas.height = 630;

    // Load background image
    try {
        let headerText = header;
        let descriptionText = description.replaceAll(header, "");
        if(menu_id == 4){
            headerText = maskText(header);
        }else if(menu_id == 3){
            headerText = maskTextCarID(header);
        }

        
        const backgroundImage = new Image();
        backgroundImage.src = "/assets/images/bg-share.jpg"; // Adjust the path if necessary

        return new Promise((resolve) => {
            backgroundImage.onload = () => {
                // Draw background image
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                // Title Text
                ctx.fillStyle = "#ffffff"; // Text color
                ctx.font = "32px 'IBMPlexSansThaiLooped-Regular'"; // Font size and family
                ctx.textAlign = "center";
                ctx.fillText(title, canvas.width / 2, 120); // Centered title text at y=100

                // Header Text
                ctx.font = "bold 65px 'IBMPlexSansThaiLooped-Medium'"; // Font size and style
                ctx.fillText(headerText, canvas.width / 2, 250); // Centered header text at y=180

                // Description Text
                ctx.font = "35px 'IBMPlexSansThaiLooped-Regular'"; // Font size for description

                // Calculate 60% of the canvas width
                const descriptionWidth = canvas.width * 0.6;

                // Calculate the starting x-position for centering the text
                const descriptionX = (canvas.width - descriptionWidth) / 2;

                // Wrap the text within the 60% width
                const lines: string[] = wrapText(ctx, descriptionText, descriptionWidth);
                // Draw each line of text, centered horizontally
                // Draw each line of text, centered horizontally
                lines.forEach((line, index) => {
                    ctx.fillText(line, descriptionX + descriptionWidth / 2, 350 + index * 60);
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
                console.log("error image bg", backgroundImage);
                resolve(undefined); // Handle error if the image fails to load
            };
        });
    } catch (error) {
        console.log(error);
        return new Promise((resolve) => {

        });
    }
};

export const maskText = (input: string): string =>{
    // Check if the input length is sufficient
    if (input.length < 8) {
        throw new Error("Input length must be at least 8 characters.");
    }

    // Mask characters between the 2nd and 8th positions
    const maskedSection = input.slice(2, 8).replace(/./g, 'x');
    const maskedText = input.slice(0, 2) + maskedSection + input.slice(8);

    return maskedText;
}
export const maskTextCarID = (input: string): string =>{
    // Check if the input length is sufficient
    if (input.length < 4) {
        throw new Error("Input length must be at least 4 characters.");
    }

    // Mask characters between the 1st and 4th positions (inclusive)
    const maskedSection = input.slice(1, 4).replace(/./g, 'x');
    const maskedText = input.charAt(0) + maskedSection + input.slice(4);

    return maskedText;
}

export const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
): string[] => {
    const words: string[] = text.split(" ");
    const lines: string[] = [];
    let currentLine: string = "";

    for (let i = 0; i < words.length; i++) {
        const word: string = words[i].replace(/<br>/g, ''); // Remove \n from the word

        // Check if the original word contains a newline character
        if (words[i].includes('\n')) {
            const parts = words[i].split('<br>');
            for (let j = 0; j < parts.length; j++) {
                const part = parts[j];
                const width: number = ctx.measureText(currentLine + (currentLine ? " " : "") + part).width;

                if (width < maxWidth) {
                    currentLine += (currentLine ? " " : "") + part;
                } else {
                    lines.push(currentLine);
                    currentLine = part;
                }

                // If this was not the last part, push the line and reset
                if (j < parts.length - 1) {
                    lines.push(currentLine);
                    currentLine = "";
                }
            }
        } else {
            const width: number = ctx.measureText(currentLine + (currentLine ? " " : "") + word).width;
            if (width < maxWidth) {
                currentLine += (currentLine ? " " : "") + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
    }

    // Push the last line
    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
};

