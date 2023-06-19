<template>
         <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif">
<div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto;background-color:#edebebff">
 <div style="box-sizing:border-box;padding-left:30px;padding-right:30px;padding-top:30px;padding-bottom:30px;margin-left:auto;margin-right:auto;margin-top:80px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;width:360px;background-color:#424242ff;background:linear-gradient(40deg, rgba(58,66,64,1) 0%, rgba(33,33,33,1) 100%)"><div style="display:inline-block;width:100%"><h3 style="color:#f0f0f0ff;margin-top:0px;text-align:center">
Airportal 
</h3> <input placeholder="username" style="display:block;width:100%;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-bottom:10px;box-sizing:border-box" @keyup.enter="login({ email, password })" v-model="email" ref="username"/><input placeholder="password" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;margin-bottom:10px;box-sizing:border-box" type="password" @keyup.enter="login({ email, password })" v-model="password"/><button type="" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" @click="login({ email, password })">
Login
</button></div> </div></div> </div> </template><script>export default{methods:{async login(creds){this.io.authenticate({strategy:"local",...creds}).then(profile=>{this.userUpdate(profile?.user);this.$router.push("/admin/users")}).catch(e=>{console.error("Authentication error",e);alert(e.message)})}},data:()=>({email:"",password:""}),inject:["io","user","userUpdate"],mounted(){this.$refs?.username?.focus()}};</script><style>html,
body,
#app {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}</style>