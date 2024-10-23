const axios = require('axios');
const fs = require('fs');

// Membaca private key dari file
const privateKey = fs.readFileSync('data.txt', 'utf8').trim();

// URL faucet untuk Dione Odyssey Testnet
const faucetUrl = `https://testnet.odysseyscan.com/api/faucet?privateKey=${privateKey}&amount=2000`;

// Melakukan permintaan ke faucet
axios.get(faucetUrl)
    .then(response => {
        console.log("Permintaan berhasil:", response.data);
    })
    .catch(error => {
        console.error("Permintaan gagal:");
        if (error.response) {
            console.error("Data respons:", error.response.data);
            console.error("Status respons:", error.response.status);
            console.error("Header respons:", error.response.headers);
        } else if (error.request) {
            console.error("Permintaan gagal: tidak ada respons dari server", error.request);
        } else {
            console.error("Kesalahan lain:", error.message);
        }
    });
