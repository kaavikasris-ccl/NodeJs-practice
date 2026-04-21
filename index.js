// const math = require("./mathoperation");

// console.log(math.add(20, 20));

// const logger = require("./logger");

// console.log("Current Time:", logger.currentDate());
// console.log("Current Year:", logger.currentYear());

// const path = require("path");
//     console.log(path.parse(__filename));

const http = require("http")
const server = http.createServer((req,res)=>{
    if(res.url ==='/'){
    res.write("Hello node");
    }else if(req.url ==='/about'){
        res.write("This is about route");
    }else{
        res.write("Route not found");
    }
    res.end();
    
});
server.listen(3000,() =>{
    console.log("server start listening on port 3000");

});