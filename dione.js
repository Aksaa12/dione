const axios = require('axios');
const fs = require('fs');

// Membaca private key dari file
const privateKey = fs.readFileSync('data.txt', 'utf8').trim();
const walletAddress = "0xYourWalletAddress";  // Ganti dengan alamat wallet Anda

// URL faucet untuk Dione Odyssey Testnet
const faucetUrl = 'https://testnet.odysseyscan.com/api/faucet';

// Data yang akan dikirim
const data = {
    privateKey: privateKey,
    address: walletAddress,
    amount: 2000,  // Jumlah token yang diminta (2000 Dione)
};

// Melakukan permintaan ke faucet
axios.post(faucetUrl, data)
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
