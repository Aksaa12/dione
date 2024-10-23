import requests

# Membaca private key dari file
with open("data.txt", "r") as file:
    private_key = file.read().strip()

# URL faucet untuk Dione Odyssey Testnet
faucet_url = "https://testnet.odysseyscan.com/api/faucet"

# Data yang akan dikirim
data = {
    "privateKey": private_key,
    "amount": 2000  # Jumlah token yang diminta (2000 Dione)
}

# Melakukan permintaan ke faucet
response = requests.post(faucet_url, json=data)

# Menampilkan respons dari faucet
if response.status_code == 200:
    print("Permintaan berhasil:", response.json())
else:
    print("Permintaan gagal:", response.status_code, response.text)
