import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import erc20abi from "./ERC20abi.json";
import './global';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

// https://sepolia.infura.io/v3/e953202a8e124f24b55a287f2cdc84a6

const App = () => {  

  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');


const sendEther=async()=>{
  var Web3 = require('web3');
  // var provider = 'https://sepolia.infura.io/v3/e953202a8e124f24b55a287f2cdc84a6';

  var rpcurl = "https://rpc.sepolia.org";
var senderaddress = "0x70c68D321Beb263F7e87E68275C210F5EF561BC3";
var receiveraddress = "0xAf37F5799D111c12149871b312Ca26A52a23a0D5";
var senderprivatekey =
  "30c712785c06faab07c19a40070654d47c50645aa25bc5c99f6ce1cc1cbc9a6f";
  
  // var web3Provider = new Web3.providers.HttpProvider(provider);
  // var web3 = new Web3(web3Provider);
  // web3.eth.getBlockNumber().then((result:any) => {
  //   console.log("Latest Ethereum Block is ",result);
  const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/','30c712785c06faab07c19a40070654d47c50645aa25bc5c99f6ce1cc1cbc9a6f'));
 
    web3.eth.getBlockNumber().then((result:any) => {
    console.log("Latest Ethereum Block is ",result);
  });

  web3.eth
    .sendTransaction({
      from: senderaddress,
      to: receiveraddress,
      value: 10000, // 0.1 ether 10^17
    })
    .then(function (receipt:any) {
      console.log(receipt);
    })
    .catch((err:any) => {
      console.log(err);
    });
}
  return (
    <View style={styles.logincontainer}>
      <View style={styles.fieldscontainer}>
        <View style={styles.login_txt_container}>
          <Text style={styles.login_txt}>Transfer Eth</Text>
        </View>

        <TextInput
          placeholder="0xAf37F5799D111c12149871b312Ca26A52a23a0D5"
          style={styles.address}
          value={address}
          placeholderTextColor={'#9B9898'}
          onChangeText={text => setAddress(text)}></TextInput>

        <TextInput
          placeholder="0.1 ether 10^17"
          style={styles.amount}
          placeholderTextColor={'#9B9898'}
          value={amount}
          onChangeText={text => setAmount(text)}></TextInput>
       

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            // sendAmount1()
            sendEther()
           }}>
          <Text style={styles.btntxt}>Transfer ETH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txt2container}>
        <Text style={styles.txt2}>Designed and Developed By Gaurav Burande</Text>
      </View>
      <StatusBar backgroundColor="#1A1919" barStyle="light-content" />
      <FlashMessage position="top" /> 
    </View>
  )
}

export default App


const P90 = '90%';
const P20 = '20%';

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: '#0C0C0C',
    justifyContent: 'space-between',
  },
  login_txt: {
    fontSize: 45,
    fontFamily: 'Gilroy-Bold',
    color: '#FFFFFF',
  },
  
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    marginLeft: 10,
  },
  txtcontainer: {
    width: P90,
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtlogo: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    textAlign: 'center',
    // paddingTop: 30,
  },
  login_txt_container: {
    width: P90,
    // backgroundColor: '#F65F69',
  },
  
  address: {
    backgroundColor: '#1A1919',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    // borderWidth: 1,
    color: '#FFFFFF',
    // borderColor: '#7D7878',
    // borderColor: '#D9D3D3',
  },

  amount: {
    backgroundColor: '#1A1919',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    paddingLeft: 10,
    // borderWidth: 1,
    color: '#FFFFFF',
    // borderColor: '#7D7878',
    // borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    paddingTop: P20,
    // backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btncontainer: {
    width: P90,
    alignSelf: 'center',
    paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#0FA60C',
    alignSelf: 'center',
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 21,
    fontFamily: 'Gilroy-Bold',
    // letterSpacing: 1,
  },
  txt2: {
    color: '#FFFFFF',
    // width: P90,

    paddingTop: 10,
    marginLeft: 10,
    fontFamily: 'Gilroy-Bold',
    fontSize: 15,
    // backgroundColor: '#FFFF',
  },
  txt2Register: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 15,
    // backgroundColor: '#FFFF',
    paddingTop: 10,
    marginLeft: 5,
    color: '#FFFF',
  },
  txt2container: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
});
