const {loadConfig}=require("./build-lib/load-config");


const build=async()=>{
    const {
        config,
        configFilePath,
        indexFilePath,
        envName,
        baseUrl,
        projectName
    }=await loadConfig();

    await require("./build-lib/notice")(projectName,envName);

    await require("./build-lib/replace-config")(configFilePath,config);

    await require("./build-lib/replace-index")(indexFilePath,{baseUrl});

    await require("./build-lib/build-webfont")();

};

build();

