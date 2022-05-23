let fs = require('fs')
const path = require('path');

    fs.readdir(__dirname+'/styles',{withFileTypes:true}, (err,files)=>{
        let stylesArray=[]
        for(let i = 0;i<files.length;i++){
            console.log(stylesArray);

            if(!(files[i].isFile() && path.extname(files[i].name)==='.css')){
               continue
            }
            let readStream = fs.createReadStream(__dirname+'/styles/'+files[i].name, 'utf-8');
            let writeStream = fs.createWriteStream(__dirname+'/project-dist/bundle.css');
            readStream.on('data',function(chunck){
                stylesArray.push(chunck)

            })
        }
        
        setTimeout(()=>{
            stylesArray.forEach(function(item){
                fs.appendFile(__dirname+'/project-dist/bundle.css',item,function(err){
                    if(err){
                        console.log(err);
                    }
                })
            })
        },1000)
    })