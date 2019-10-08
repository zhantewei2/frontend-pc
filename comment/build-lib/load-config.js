const {join,loadJSON} =require("../tool/tool");
const assert=require("assert").strict;

const env=process.argv[2];

exports.loadConfig=async()=>{
    const contentConfig=await loadJSON(join("cmBuild.config.json"));
    const configFilePath=contentConfig["configFilePath"];
    const indexFilePath=contentConfig["indexFilePath"];
    const projectName=contentConfig["projectName"];
    assert.ok(configFilePath);
    assert.ok(indexFilePath);
    assert.ok(projectName);

    const envConfig=contentConfig["envs"][env||"dev"];
    return {
        projectName,
        configFilePath:join(configFilePath),
        indexFilePath:join(indexFilePath),
        "config":envConfig["config"],
        "envName":envConfig["envName"],
        "baseUrl":envConfig["baseUrl"]
    };
};
