function generateQR() {
    const text = document.getElementById("qrText").value;
    const container = document.getElementById("qrContainer");

    // अगर इनपुट खाली है तो कुछ मत करो
    if (!text) {
        alert("Please enter some text or URL!");
        return;
    }

    // पुराने QR को हटाओ
    container.innerHTML = "";

    // नया QR बनाओ
    new QRCode(container, {
        text: text,
        width: 180,
        height: 180,
        // रंग ही असली लक्ज़री है: 
        colorDark : "#000000", // QR का मुख्य रंग (Dark)
        colorLight : "#D4AF37", // QR का बैकग्राउंड (Gold) - Reverse Luxury look
        
        // Alternative (Gold QR on White/Black):
        // colorDark: "#D4AF37",
        // colorLight: "#ffffff",
        
        correctLevel : QRCode.CorrectLevel.H
    });
}
