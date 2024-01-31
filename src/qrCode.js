const QRcode = require('qrcode');

// toFile(path, text, [options], [cb(error)])
QRcode.toFile("./qr.png", "My QR Code", {
    color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
    },
}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("done");
    }
});