var http=require("http");
var fs=require("fs");
var obj = require('./DateAndTime')

console.log(obj());
var server=http.createServer((req,res)=>{
    fs.readFile("./DateAndTime",(err,data)=>{
        if(err) 
            throw err;
        else{
            res.write(data.toString())
            res.end();
        }
    })

})
server.listen(8010);