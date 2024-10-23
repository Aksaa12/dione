const axios = require('axios');
const fs = require('fs');

// Membaca private key dari file
const privateKey = fs.readFileSync('data.txt', 'utf8').trim();
const walletAddress = "0x5fbE09A0BF35312368E3729E92D0335F8150b705";  // Ganti dengan alamat wallet Anda

// URL JSON-RPC untuk Dione Odyssey Testnet
const jsonRpcUrl = "https://testnet.odysseyscan.com";

// Data yang akan dikirim ke faucet
const data = {
    jsonrpc: "2.0",
    method: "faucet",
    params: [walletAddress, 2000, privateKey],  // Alamat wallet, jumlah Dione, dan private key
    id: 1,
};

// Melakukan permintaan ke faucet menggunakan JSON-RPC
axios.post(jsonRpcUrl, data)
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
