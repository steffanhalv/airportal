<template>
         <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif"><div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto;background-color:#edebebff">
<div style="margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:60px"> <h2 style="color:#2b2b2bff">
Settings
</h2><button type="" style="float:right" @click="get()">
Refresh
</button> </div> <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#4e7699ff;position:relative" v-for="setting in settings">
<div style="display:inline-block"> <span style="color:#ffffffff">
{{setting.label}} 
</span></div><div style="float:right;display:inline-block">
 <button type="" style="margin-right:10px;float:right" @click="save(setting.key, setting.value)">
Save
</button><input placeholder="password" style="margin-right:5px;float:right" v-model="setting.value"/></div></div><div style="width:100%;box-sizing:border-box;padding-left:20px;padding-right:20px;padding-bottom:20px;padding-top:20px"><h3>
Enable Google Drive Auto Backup
</h3><ul><li><a href="https://developers.google.com/workspace/guides/create-project" target="_blank">
Create a project and enable the API
</a></li><li>
Enable Google Drive API
</li><li>
Create Service account credential
</li><li>
Open service account and create new Key in JSON format
</li><li>
Encode using this tool 
</li></ul><textarea placeholder="Google JSON key" v-model="googleJSONkey" style="width:50%;margin-bottom:20px"/><textarea placeholder="Google JSON key encoded" v-model="googleJSONkeyEncoded" style="width:50%;margin-bottom:20px"/><button type="" @click="encode">
Encode
</button><ul><li>
Store as google secret
</li><li>
Find a folder in google drive and share it with service account user
</li><li>
Copy that folder id and paste it in here
</li></ul></div></div> </div> </template><script>export default{inject:["io","user"],methods:{save(key,value){this.io.service("settings").patch(key,{value}).then(response=>{this.get()}).catch(e=>{this.get()})},get(){this.settings.forEach(setting=>{this.io.service("settings").get(setting.key).then(response=>{setting.value=response})})},encode(){this.googleJSONkeyEncoded=window.btoa(this.googleJSONkey)}},created(){this.get()},computed:{users(){return this.response?.data||[]}},data:()=>({googleJSONkey:"",googleJSONkeyEncoded:"",settings:[{key:"lang",value:"",label:"Languages"},{key:"google-secret",value:"",label:"Google Secret"},{key:"google-folder",value:"",label:"Google Folder"},{key:"backup-interval",value:"",label:"Backup interval"}]})};</script><style>html,
body,
#app {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}</style>