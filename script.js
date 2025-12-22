function generateQR() {
    const text = document.getElementById("qrText").value;
    const container = document.getElementById("qrContainer");

    if (!text) {
        alert("Please enter some text or URL!");
        return;
    }

    container.innerHTML = "";

    new QRCode(container, {
        text: text,
        width: 180,
        height: 180,
        
        colorDark : "#000000", 
        colorLight : "#ffffff", 
        
        
        correctLevel : QRCode.CorrectLevel.H
    });
}
