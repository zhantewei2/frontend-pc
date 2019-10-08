const chalk=require("chalk");

module.exports=async(projectName,envName)=>{
    console.log(chalk.yellow("项目"),chalk.bold(projectName));
    console.log(chalk.yellow("当前环境"),chalk.bold(envName));
};