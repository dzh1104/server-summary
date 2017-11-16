const crypto = require('crypto');

//支持的Hash算法
var hashes = crypto.getHashes();
console.log(hashes);

//要加密的内容
const content = '132_@#!QAZ'

//测试所有的Hash算法
for(let hash of hashes){
  var s1 = new Date();
  var shasum = crypto.createHash(hash);
  shasum.update(content);
  var result = shasum.digest('hex');
  var s2 = new Date();
  console.log(hash+','+(s2-s1) +'ms,'+ result);
}
