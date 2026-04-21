const exp = require('express');
const app = exp();
app.listen(3000);
app.get('/',(req,res)=>{
    res.send ('<h1>Welcome</h1>');
    res.sendFile('./docs/index.html',__dirname)
})