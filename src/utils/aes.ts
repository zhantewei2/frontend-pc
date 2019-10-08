/**
 * created by zhantewei
 *
 *
 */
const aes=require("aes-js");
import {sssk,sssiv} from '@/config/config';

let key:any=sssk;
let iv:any=sssiv;
const BYTE_LEN=16;
const output_str=(str:string)=>{
    const last_chr=str[str.length-1].charCodeAt(0);
    return str.slice(0,0-last_chr);
};

const cmp_byte=(str:string)=>{
    const s_bytes=aes.utils.utf8.toBytes(str);
    const cmp_count=BYTE_LEN-s_bytes.length%BYTE_LEN;
    const append_arr:Array<number>=[];
    for(let i=0;i<cmp_count;i++){
        append_arr.push(cmp_count)
    }
    const append_bytes=new Uint8Array(append_arr);
    const end_bytes=new Uint8Array(s_bytes.length+append_bytes.length);
    end_bytes.set(s_bytes);
    end_bytes.set(append_bytes,s_bytes.length);
    return end_bytes;
};

key=cmp_byte(key);
iv=cmp_byte(iv);
const encrypt=(s:string)=>{
    const s_bytes=cmp_byte(s);
    const cipher=new aes.ModeOfOperation.cbc(key,iv);
    const en_bytes=cipher.encrypt(s_bytes);
    return aes.utils.hex.fromBytes(en_bytes);
};
const decrypt=(s:string)=>{
    const cipher=new aes.ModeOfOperation.cbc(key,iv);
    const de_bytes=cipher.decrypt(aes.utils.hex.toBytes(s));
    return output_str(aes.utils.utf8.fromBytes(de_bytes));
};

export {
    encrypt,
    decrypt
}