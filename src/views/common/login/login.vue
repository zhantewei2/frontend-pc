<template src="./login.html"></template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import {xhr} from "@/config/http";

@Component({})
export default class extends Vue{
    constructor(){
        super();
        xhr("get","user","url",null,{headers:{"cm-auth":"aa"}})
        .subscribe((res:any)=>{
            console.log(res);
        })
    }
}


</script>

<style scoped src="./login.scss" lang="scss"></style>