var http = require("http")
var fs = require("fs")
var url = require("url")
 
http.createServer((req,res) =>{
    if((req.url).indexOf("index") >=0){
        //index目录下渲染index.htmlnode /Users/chenduo/Desktop/修论/nodejstest1/index.html

        fs.readFile('/Users/chenduo/Desktop/修论/serverjs/index.html','utf-8',(err,data)=>{
            if(err){res.end("internet fail")}
            else{
                // res.setHeader('content-type','text-html;charset=utf-8');
                res.writeHead(200,{"Content-type":"text/html"});
                res.write(data)
                res.end()
            }
        })
    }else if ((req.url).indexOf("test")>=0) {
        function hasBody(req) {
           return 'transfer-encoding' in req.headers || 'content-length' in req.headers 
        }
        function payload(){
           if(hasBody(req)){
               var buffers = [];
                req.on('data',(chunk) =>{
                    buffers.push(chunk)
                });
                req.on('end',()=>{
                    req.rawBody = Buffer.concat(buffers).toString();
                    // console.log(new Date().getUTCFullYear()+"-"+new Date().getUTCMonth())  获取时间
                    //var data = new Date();
                    //var date = date.getUTCFullYear()+"/"+date.getUTCMonth()+"/"+date.getUTCDate()+" "+date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds();
                    
                    req.body = req.rawBody;
                    console.log(req.body);

                    
                    // writeFile 是写入文件，会覆盖之前，使用appendFile可以以追加方式，而不是覆盖
                    fs.appendFile('/Users/chenduo/Desktop/修论/serverjs/test.json',req.body,(err,data)=>{
                        if(err){console.log("fail")}
                        else{
                            console.log("sucess")
                        }
                    })
                });
            }else{
                console.log("fail")
            } 
        }
        payload()
        res.end("file input end")
    }
    else{
        res.end("helloworld")
    }
    
}).listen(8888)
 
console.log("8888")