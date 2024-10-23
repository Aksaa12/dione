const axios = require('axios');
const fs = require('fs');

// Membaca private key dari file
const privateKey = fs.readFileSync('data.txt', 'utf8').trim();

// URL faucet untuk Dione Odyssey Testnet
const faucetUrl = 'https://testnet.odysseyscan.com/api/faucet';

// Data yang akan dikirim
const data = {
    privateKey: privateKey,
    amount: 2000,  // Jumlah token yang diminta (2000 Dione)
};

// Melakukan permintaan ke faucet
axios.post(faucetUrl, data)
    .then(response => {
        console.log("Permintaan berhasil:", response.data);
    })
    .catch(error => {
        console.error("Permintaan gagal:", error.response ? error.response.data : error.message);
    });
