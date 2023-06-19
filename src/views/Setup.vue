<template>
         <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif">
<div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto;background-color:#edebebff">
 <div style="box-sizing:border-box;padding-left:30px;padding-right:30px;padding-top:30px;padding-bottom:30px;margin-left:auto;margin-right:auto;margin-top:80px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;width:360px;background-color:#424242ff;background:linear-gradient(40deg, rgba(58,66,64,1) 0%, rgba(33,33,33,1) 100%)"><div style="display:inline-block;width:100%"><h3 style="color:#f0f0f0ff;margin-top:0px;text-align:center">
Setup Airportal
</h3> <input placeholder="email" style="display:block;width:100%;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-bottom:10px;box-sizing:border-box" v-model="email" type="email"/><input placeholder="password" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;margin-bottom:10px;box-sizing:border-box" type="password" v-model="password"/><input placeholder="connection string" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;margin-bottom:10px;box-sizing:border-box" v-model="mongodb" v-if="status !== 'admin-registration'"/><button type="" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" @click="setup">
{{ setup === 'admin-registration' ? 'Submit admin' : 'Install'}}
</button></div> </div></div> </div> </template><script>export default{data:()=>({email:"",password:"",mongodb:"",status:""}),methods:{async setup(){let req={email:this.email,password:this.password};if(this.status==="setup")req.mongodb=this.mongodb;let results=await this.io.service("/settings").create(req);if(results==="ready"){this.$router.push("/")}else{alert(results)}},async init(){this.status=await this.io.service("/settings").get("status")}},inject:["io"],created(){this.init()}};</script><style>html,
body,
#app {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}</style>