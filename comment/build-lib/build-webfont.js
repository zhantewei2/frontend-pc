const {join} =require("../tool/tool");
const {exec}=require("child_process");
const chalk=require("chalk");

module.exports=()=>new Promise(resolve=>{
    console.log(chalk.green("编译 webfont..."));
    exec(`node ${join('comment/webfont.js')}`,(err,r)=>{
        console.log('generator woff font:','');
        console.log(r);
        resolve();
    });
});