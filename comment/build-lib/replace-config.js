const {fsP}=require("../tool/tool");
const chalk=require("chalk");

const varousValue=(value)=>{
    if(typeof value=="string"){
        return `"${value}"`;
    }else if(typeof value=="boolean"){
        return value?"true":"false";
    }else if(typeof value=="number"){
        return value;
    }
};

module.exports=async(targetFilePath,replaceConfig)=>{
    let fileContent=await fsP("readFile",targetFilePath,"utf8");
    let configValue;
    console.log(chalk.yellow("项目配置文件："),chalk.red(targetFilePath));
    console.log(chalk.bold("当前环境配置更换 :"));
    for(let key in replaceConfig){
        configValue=replaceConfig[key];
        configValue=varousValue(configValue);
        fileContent=fileContent.replace(
            new RegExp(`${key}\\s*?=\\s*?.*`),
            `${key}=${configValue};`
        )
        console.log(chalk.cyan(key),":",chalk.bold(configValue));
    }
    //写入文件
    await fsP("writeFile",targetFilePath,fileContent);

};