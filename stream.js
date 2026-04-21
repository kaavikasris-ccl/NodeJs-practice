const fs= require('fs');
const readStream=fs.createReadStream('./docs/Hugefile.txt');
const writeStream=fs.createWriteStream('./docs/copyHugefile.txt')
readStream.on('data',(buffer)=>{
    writeStream.write('\nNew Buffer\n');
    writeStream.write(buffer);
})