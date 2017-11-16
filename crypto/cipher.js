var crypto = require('crypto'),fs = require('fs');

//支持的加解密算法
let ciphers = ''
for (let c of crypto.getCiphers())
  ciphers += (c + '\n');
console.log(ciphers);


//加密
async function cipher(algorithm, key, buf) {
  var encrypted = "";
  var cip = crypto.createCipher(algorithm, key);
  encrypted += cip.update(buf, 'binary', 'hex');
  encrypted += cip.final('hex');
  return encrypted;
}

//解密
async function decipher(algorithm, key, encrypted) {
  var decrypted = "";
  var decipher = crypto.createDecipher(algorithm, key);
  decrypted += decipher.update(encrypted, 'hex', 'binary');
  decrypted += decipher.final('binary');
  return decrypted;
}

//要加密的内容
const content = '132_@#!QAZ'
//秘钥
const key = "123";

//测试常见加解密算法
async function run(){
  for(let c of ['des3','blowfish', 'aes-256-cbc', 'cast', 'des', 'des3', 'idea', 'rc2', 'rc4', 'seed']){
    let encrypted = await cipher(c,key,content);
    let decrypted = await decipher(c,key,encrypted);
    console.log(`${c}: ${decrypted} ==> ${encrypted}`)
  }
}

run();
