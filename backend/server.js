var express = require("express");
var Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());

var rpcurl = "https://rpc.sepolia.org";
var senderaddress = "0x70c68D321Beb263F7e87E68275C210F5EF561BC3";
var receiveraddress = "0xAf37F5799D111c12149871b312Ca26A52a23a0D5";
var senderprivatekey =
  "30c712785c06faab07c19a40070654d47c50645aa25bc5c99f6ce1cc1cbc9a6f";

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/send", async (req, res) => {
  const { address, amount } = req.body;
  console.log("in function");
  var provider = new Provider(senderprivatekey, rpcurl);
  var web3 = new Web3(provider);
  console.log("provider set transaction initiated");

  web3.eth
    .sendTransaction({
      from: senderaddress,
      to: address,
      value: amount, // 0.1 ether 10^17
    })
    .then(function (receipt) {
      console.log(receipt);
      res.json(receipt);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port);
console.log("listening on", port);
