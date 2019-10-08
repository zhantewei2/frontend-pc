import {xhr} from "@/config/http";
import {encrypt} from "../../utils/aes";

export interface LoginParams{
    account:string;
    password:string;
}

//登录
export const login=(params:LoginParams)=>
    xhr("post","user","login",{
        "loginStr":encrypt(JSON.stringify(params))
    })

//登出
export const logout=()=>
    xhr("post","user","logout");

//检查登录状态
export const checklogin=()=>
    xhr("post","user","checklogin");
