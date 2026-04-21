const fs = require('fs');
if(! fs.existsSync('./docs'))
{
fs.mkdir('./docs',(err) =>{
    if(err){
        console.log(err.message);
    }
    else
    console.log('folder created');
})
}

fs.writeFile('./docs/file.txt','Hi welcome to Node.js',(err)=>{
    if(err){
        console.log(err.meassage);
    }
    else{
        console.log('File written');
    }
})

fs.readFile('./docs/file.txt',(err,data)=>{
    if(err){
        console.log(err.message);
    }
    else
        console.log(data.toString());
})

if(fs.existsSync('./docs/file.txt')){
    fs.unlink('./docs/file.txt',(err)=>{
        if(err)
            console.log(err.meassage);
        else
            console.log('file deleted')
    });
}

if (fs.existsSync('./docs')) {
    fs.rmdir('./docs', (err) => {
        if (err)
            console.log(err.message);
        else
            console.log('Folder deleted');
    });
} else {
    console.log("Folder does not exist");
}