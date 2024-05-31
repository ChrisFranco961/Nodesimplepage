const http=require('http')
const fs=require('fs')
const path = require('path')
const server=http.createServer((req,res)=>{
        console.log(req.url)
        let extension=path.extname(req.url)
        let contenttype='text/html'
        let pathname=req.url=='/'? '/home.html':req.url
        console.log(pathname)
        switch (extension) {
            case '':
                contenttype='text/html'
                break
            case '.js':
                contenttype='text/javascript'
                break;
            case '.css':
            contenttype='text/css'
            break
            case '.ico':
            contenttype="image/x-icon"
            break
            case '.html':
            contenttype='text/html'
            break
        }
        
        fs.readFile("./Pages"+pathname,(err,content)=>{
           if(err){
           
            fs.readFile('./Pages/404.html',(err,content)=>{
              
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.end(content)
                })
            
            }else {
            res.writeHead(200,{'Content-Type': contenttype})
            res.end(content)

        }        })
    
        
    
})
server.listen(5000,()=>{
    console.log("server running on port 5000")
})
