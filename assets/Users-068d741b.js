import{h as j}from"./moment-fbc5633a.js";import{_ as E,c as p,a as e,t as n,b as t,w as r,v as i,F as b,r as _,d as F,o as h,e as T}from"./index-72fa7d84.js";const I={inject:["io","user"],data:()=>({email:"",owner_group:"",password:"",locale:"",owner_group:"",permissions:["user"],response:null,search:"",limit:25,page:1,moment:j}),computed:{users(){var s;return((s=this.response)==null?void 0:s.data)||[]}},created(){this.list()},methods:{async create(s){const o=await this.io.service("users").create(s);this.clear(),this.response.data.unshift(o)},async list(){let s=await this.io.service("users").find({query:{email:{$search:this.search},$limit:this.limit,$skip:(this.page-1)*this.limit,$sort:{createdAt:-1}}});this.response=s},async save(s){let o=Object.assign({},s);if(o.password||delete o.password,o.password&&o.password.length<6){alert("Too short password!");return}let m=await this.io.service("users").patch(o._id,o);this.response.data=this.response.data.map(w=>w._id!==m._id?w:m)},async remove(s){const o=await this.io.service("users").remove(s._id);this.response.data=this.response.data.filter(m=>m._id!==o._id)},clear(){this.email="",this.owner_group="",this.password="",this.locale="",this.permissions=["user"]}}},K={class:"p-6"},O={class:"editor"},q=e("h2",{class:"text-4xl"}," Users ",-1),G={class:"my-6"},J={class:"grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4"},Q=["disabled"],R=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z","clip-rule":"evenodd"})],-1),W=[R],X={class:"text-slate-600 py-2 text-center"},Z=["disabled"],ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z","clip-rule":"evenodd"})],-1),se=[ee],le={class:"my-2 rounded flex bg-slate-100 p-4"},oe={class:"gap-1 grid-cols-9 grid"},te=e("input",{placeholder:"ID",readonly:"readonly",class:"p-2"},null,-1),ae={class:"grid-cols-3 grid"},de=["onClick","disabled"],re=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1),ie=[re],ne=["onUpdate:modelValue"],pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})],-1),he=[pe],ce=e("input",{placeholder:"Updated",readonly:"readonly",class:"p-2"},null,-1),ue=e("input",{placeholder:"Created",readonly:"readonly",class:"p-2"},null,-1),me=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z","clip-rule":"evenodd"})],-1),ge=[me],we={class:"my-2 rounded grid grid-cols-9 bg-slate-100 p-4"},ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"})],-1),be=[ve],_e={class:"my-2 rounded flex bg-slate-100 p-4"},fe={class:"grid-cols-9 grow gap-1 grid"},ye=["onUpdate:modelValue"],Ce=["onUpdate:modelValue"],ke=["onUpdate:modelValue"],ze={class:"grid-cols-3 grid"},Ve=["onClick","disabled"],Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1),Ue=[Me],xe=["onUpdate:modelValue"],Be=["onClick"],He=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})],-1),Se=[He],De=["onUpdate:modelValue"],Le=["onUpdate:modelValue"],Ae=["value"],$e=["value"],Ye={class:"grid-cols-2 grid"},Ne=["onClick","disabled"],Pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1),Te=[Pe],je=["onClick"],Ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})],-1),Fe=[Ee],Ie={class:"grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4"},Ke=["disabled"],Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z","clip-rule":"evenodd"})],-1),qe=[Oe],Ge={class:"text-slate-600 py-2 text-center"},Je=["disabled"],Qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z","clip-rule":"evenodd"})],-1),Re=[Qe];function We(s,o,m,w,Xe,a){var f,y,C,k,z,V,M,U,x,B,H,S,D,L,A,$,Y,N;return h(),p("div",K,[e("div",O,[q,e("div",G,[e("div",J,[e("button",{type:"",onClick:o[0]||(o[0]=l=>(s.page--,a.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:s.page<=1},W,8,Q),e("span",X," Page "+n(s.page)+" of "+n(Math.ceil(((f=s.response)==null?void 0:f.total)/((y=s.response)==null?void 0:y.limit)))+" ("+n((C=s.response)==null?void 0:C.skip)+" - "+n(((k=s.response)==null?void 0:k.skip)+((V=(z=s.response)==null?void 0:z.data)==null?void 0:V.length))+" of "+n((M=s.response)==null?void 0:M.total)+") ",1),e("button",{type:"",onClick:o[1]||(o[1]=l=>(s.page++,a.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:s.page>=Math.ceil(((U=s.response)==null?void 0:U.total)/((x=s.response)==null?void 0:x.limit))},se,8,Z)]),e("div",le,[e("div",oe,[te,t(),r(e("input",{placeholder:"Email","onUpdate:modelValue":o[2]||(o[2]=l=>s.email=l),class:"p-2"},null,512),[[i,s.email]]),t(),r(e("input",{placeholder:"Password","onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),type:"password",class:"p-2"},null,512),[[i,s.password]]),e("div",null,[(h(!0),p(b,null,_(s.permissions,(l,c)=>(h(),p("div",ae,[e("button",{onClick:u=>s.permissions.splice(c,1),disabled:s.permissions.length<=1,class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"},ie,8,de),t(),r(e("input",{placeholder:"permissions","onUpdate:modelValue":u=>s.permissions[c]=u,class:"p-2"},null,8,ne),[[i,s.permissions[c]]]),t(),!s.permissions.length||c===s.permissions.length-1?(h(),p("button",{key:0,onClick:o[4]||(o[4]=u=>s.permissions.push("")),class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"},he)):T("",!0)]))),256))]),t(),r(e("input",{placeholder:"Locale","onUpdate:modelValue":o[5]||(o[5]=l=>s.locale=l),class:"p-2"},null,512),[[i,s.locale]]),t(),r(e("input",{placeholder:"Owner Group","onUpdate:modelValue":o[6]||(o[6]=l=>s.owner_group=l),class:"p-2"},null,512),[[i,s.owner_group]]),t(),ce,t(),ue,e("button",{onClick:o[7]||(o[7]=l=>a.create({email:s.email,password:s.password,locale:s.locale,permissions:s.permissions,owner_group:s.owner_group})),class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-1"},ge)])]),e("div",we,[r(e("input",{"onUpdate:modelValue":o[8]||(o[8]=l=>s.search=l),placeholder:"Search...",onKeydown:o[9]||(o[9]=F((...l)=>a.list&&a.list(...l),["enter"])),class:"shadow rounded px-5 col-span-8"},null,544),[[i,s.search]]),t(),e("button",{onClick:o[10]||(o[10]=(...l)=>a.list&&a.list(...l)),class:"col-span-1 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-blue-500 from-blue-400 hover:bg-blue-600 text-slate-100 px-6 ml-2 py-2.5"},be)]),(h(!0),p(b,null,_(a.users,l=>{var c,u,P;return h(),p("div",_e,[e("div",fe,[r(e("input",{placeholder:"ID","onUpdate:modelValue":d=>l._id=d,readonly:"",class:"p-2"},null,8,ye),[[i,l._id]]),t(),r(e("input",{placeholder:"email","onUpdate:modelValue":d=>l.email=d,class:"p-2"},null,8,Ce),[[i,l.email]]),t(),r(e("input",{placeholder:"password","onUpdate:modelValue":d=>l.password=d,type:"password",class:"p-2"},null,8,ke),[[i,l.password]]),e("div",null,[(h(!0),p(b,null,_(l.permissions,(d,g)=>(h(),p("div",ze,[e("button",{onClick:v=>l.permissions.splice(g,1),disabled:l.permissions.length<=1,class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"},Ue,8,Ve),t(),r(e("input",{placeholder:"permissions","onUpdate:modelValue":v=>l.permissions[g]=v,class:"p-2"},null,8,xe),[[i,l.permissions[g]]]),t(),!l.permissions.length||g===l.permissions.length-1?(h(),p("button",{key:0,onClick:v=>l.permissions.push(""),class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"},Se,8,Be)):T("",!0)]))),256))]),t(),r(e("input",{placeholder:"locale","onUpdate:modelValue":d=>l.locale=d,class:"p-2"},null,8,De),[[i,l.locale]]),t(),r(e("input",{placeholder:"owner group","onUpdate:modelValue":d=>l.owner_group=d,class:"p-2"},null,8,Le),[[i,l.owner_group]]),t(),e("input",{placeholder:"Updated",readonly:"",value:s.moment(l.updatedAt).format("DD.MM.YY HH:mm:ss"),class:"p-2"},null,8,Ae),t(),e("input",{placeholder:"Created",readonly:"",value:s.moment(l.createdAt).format("DD.MM.YY HH:mm:ss"),class:"p-2"},null,8,$e),e("div",Ye,[e("button",{onClick:d=>a.remove(l),class:"bg-red-400 shadow-slate-400 shadow rounded bg-gradient-to-bl from-red-500 hover:bg-red-600 text-slate-100 ml-2",disabled:((u=(c=a.user)==null?void 0:c.value)==null?void 0:u._id)===l._id||((P=a.user)==null?void 0:P._id)===l._id},Te,8,Ne),t(),e("button",{onClick:d=>a.save(l),class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"},Fe,8,je)])])])}),256)),e("div",Ie,[e("button",{onClick:o[11]||(o[11]=l=>(s.page--,a.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:s.page<=1},qe,8,Ke),e("span",Ge," Page "+n(s.page)+" of "+n(Math.ceil(((B=s.response)==null?void 0:B.total)/((H=s.response)==null?void 0:H.limit)))+" ("+n((S=s.response)==null?void 0:S.skip)+" - "+n(((D=s.response)==null?void 0:D.skip)+((A=(L=s.response)==null?void 0:L.data)==null?void 0:A.length))+" of "+n(($=s.response)==null?void 0:$.total)+") ",1),e("button",{type:"",onClick:o[12]||(o[12]=l=>(s.page++,a.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:s.page>=Math.ceil(((Y=s.response)==null?void 0:Y.total)/((N=s.response)==null?void 0:N.limit))},Re,8,Je)])])])])}const ss=E(I,[["render",We]]);export{ss as default};
