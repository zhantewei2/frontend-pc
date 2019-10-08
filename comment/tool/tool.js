const path=require("path");
const HOST_PATH=process.cwd();
const fs=require("fs");

const fsP=(method,...args)=>new Promise((resolve,reject)=>{
    fs[method].call(fs,...args,(err,data)=>err?reject(err):resolve(data));
});


const loadJSON=async(filePath)=>{
    let content=await fsP("readFile",filePath,"utf8");
    let contentList=content.split("\n");
    contentList=contentList.filter(i=>{
        i=i.trim();
        return i.indexOf("//")!=0;
    });
    content=contentList.join("\n");
    let result;
    try {
        result=JSON.parse(content);
    }catch(e){
        throw `${filePath} parse error : ${e.toString()}`;
    }
    return result;
};

module.exports={
    fsP,
    loadJSON,
    HOST_PATH,
    join:(...args)=>path.join(HOST_PATH,...args),
};
