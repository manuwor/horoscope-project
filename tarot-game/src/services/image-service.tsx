export const generateImageFromText = (
    title: string,
    header: string,
    description: string,
    menu_id?: number,
    isTarotCard?: boolean, // Add this parameter to check if it should be a tarot card
    tarotCardImage?: string // Path to the tarot card image
): Promise<string | undefined> => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return Promise.resolve(undefined);
    }

    // Set canvas dimensions
    canvas.width = 1260;
    canvas.height = 630;

    try {
        let headerText = header;
        let descriptionText = description.replaceAll(header, "");
        if (menu_id == 4) {
            headerText = maskText(header);
        } else if (menu_id == 3) {
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
                ctx.textAlign = isTarotCard ? "left" : "center"; // Align left if it's a tarot card
                ctx.fillText(title, isTarotCard ? 50 : canvas.width / 2, 120); // Adjust x position for left alignment

                // Header Text
                ctx.font = "bold 65px 'IBMPlexSansThaiLooped-Medium'"; // Font size and style
                ctx.fillText(headerText, isTarotCard ? 50 : canvas.width / 2, 250); // Adjust x position for left alignment

                // Description Text
                ctx.font = "35px 'IBMPlexSansThaiLooped-Regular'"; // Font size for description
                const descriptionWidth = isTarotCard ? canvas.width * 0.5 : canvas.width * 0.6;
                const descriptionX = isTarotCard ? 50 : (canvas.width - descriptionWidth) / 2;
                const lines: string[] = wrapText(ctx, descriptionText, descriptionWidth);

                lines.forEach((line, index) => {
                    ctx.fillText(line, descriptionX, 350 + index * 60); // Adjust x position for left alignment
                });

                // If it's a tarot card, load and draw the tarot card image on the right
                if (isTarotCard && tarotCardImage) {
                    const tarotImage = new Image();
                    tarotImage.src = "/assets/images/tarot-cards/"+tarotCardImage;

                    tarotImage.onload = () => {
                        const cardWidth = 300; // Set the width of the tarot card
                        const cardHeight = 500; // Set the height of the tarot card
                        const cardX = canvas.width - cardWidth - 50; // Position it on the right side
                        const cardY = (canvas.height - cardHeight) / 2; // Center vertically

                        ctx.drawImage(tarotImage, cardX, cardY, cardWidth, cardHeight);

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

                    tarotImage.onerror = () => {
                        console.log("error loading tarot card image", tarotCardImage);
                        resolve(undefined);
                    };
                } else {
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
                }
            };

            backgroundImage.onerror = () => {
                console.log("error image bg", backgroundImage);
                resolve(undefined); // Handle error if the image fails to load
            };
        });
    } catch (error) {
        console.log(error);
        return new Promise((resolve) => {
            resolve(undefined);
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

