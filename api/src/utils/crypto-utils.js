const CryptoJs = require("crypto-js");
const { DES_KEY } = require("../app/config");

// md5加密
const md5 = (message) => {
  return CryptoJs.MD5(message).toString().toUpperCase();
};

// DES加密
const enDES = (message) => {
  const keyHex = CryptoJS.enc.Utf8.parse(DES_KEY);
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};

// DES解密
const deDES = (ciphertext) => {
  const keyHex = CryptoJS.enc.Utf8.parse(DES_KEY);
  const decrypted = CryptoJS.DES.decrypt(
    {
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
    },
    keyHex,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return decrypted.toString(CryptoJS.enc.Utf8);
};

module.exports = {
  md5,
  enDES,
  deDES,
};
