let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qeText");
let downloadBtn = document.getElementById("downloadBtn");
let title = document.querySelector("h2"); 

function generatQrCode() {
    if (qrText.value.trim().length > 0) {
        title.style.display = "none"; 
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
        imgBox.classList.add("show-img");
        downloadBtn.classList.remove("d-none");
    } else {
        qrText.classList.add("error");
        setTimeout(() => qrText.classList.remove("error"), 1000);
    }
}

function downloadQrCode() {
    if (qrImage.src && qrImage.src !== window.location.href) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Please generate a QR code first.');
    }
}
