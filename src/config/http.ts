import {CacheHttp} from "cache-ajax";
import {Subscribable} from "rxjs";
import {hostPath,httpPrefix,usePrefix,msg} from "./config";



const http=new CacheHttp(
    {},
    //before
    (params:any)=>{
        if(msg.ticket){
            params.headers={
                ...params.headers,
                "cm-auth-ticket":msg.ticket
            }
        }
    },
    //filter,
    async({status,content}:any):Promise<any>=>{
        if(!status||status!=200)throw content;
        try{
            return JSON.parse(content);
        }catch(e){
            return content;
        }
    }
)



export const xhr=(
        method:string,
        prefix:"system"|"general"|"user",
        url:string,
        params?:any,
        params2?:any
    ):Subscribable<any>=>{
    return http.xhr(
        method,
        `${hostPath}/${usePrefix?httpPrefix[prefix]:""}/${url}`,
        params,
        params2
    );
}




