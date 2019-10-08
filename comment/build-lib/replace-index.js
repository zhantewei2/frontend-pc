const {fsP}=require("../tool/tool");
const chalk=require("chalk");

module.exports=async(targetFilePath,{baseUrl})=>{
    console.log(chalk.yellow("项目index.html文件: "),chalk.red(targetFilePath));

    let indexContent=await fsP("readFile",targetFilePath,"utf8");
    indexContent=indexContent.replace(/<base\s+.*?\/?>/,`<base href="${baseUrl}">`);
    console.log(chalk.cyan("baseUrl"),":",chalk.bold(baseUrl));
    await fsP("writeFile",targetFilePath,indexContent);

};