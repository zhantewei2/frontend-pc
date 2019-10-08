import {msg} from "@/config/config";
import {ActionContext} from "vuex";

export default {
    namespace:true,
    state:{
        isLogin:false,
        nickName:"",
    },
    mutations:{
        /*
        * 处理登录成功
        */
        handleLogin(state:any){

        },
        /*
        * 处理登出
        */
        handleLogout(state:any){

        }

    },
    actions:{
        /*
        * 登录
        */
        login({commit,state}:any,loginStr:string){
            
        },
        /*
        * 校验登录
        */
        checkLogin(){
            
        },
        /*
        * 登出
        */
        logout({commit,state}:any){
            
        }
    }
}