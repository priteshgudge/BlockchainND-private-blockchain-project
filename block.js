/* ===== SHA256 with Crypto-js ===================================*/
const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
    constructor(data){
        this.height = 0;
        this.timeStamp = 0;
        this.data = data;
        this.previousHash = '0x';
        this.hash = '';
    }
    validate(){
        let self = this;
        let promise = new Promise(function() {
            let calculatedHash = SHA256(JSON.stringify({
                height: this.height,
                timeStamp: this.timeStamp,
                data: this.data,
                previousHash: this.previousHash
            }));
            return self.storedHash == calculatedHash
        });
    }
    getBData(){
        dataDecoded = hex2ascii()
    }
}

