import{h as F}from"./moment-fbc5633a.js";import{_ as I,c as p,a as o,t as n,b as a,w as r,v as i,F as w,r as y,d as K,o as m,e as E}from"./index-ebaf8422.js";const L={inject:["io","user"],data:()=>({email:"",owner_group:"",password:"",locale:"",owner_group:"",permissions:["user"],response:null,search:"",limit:25,page:1,moment:F}),computed:{users(){var e;return((e=this.response)==null?void 0:e.data)||[]}},created(){this.list()},methods:{async create(e){const l=await this.io.service("users").create(e);this.clear(),this.response.data.unshift(l)},async list(){let e=await this.io.service("users").find({query:{email:{$search:this.search},$limit:this.limit,$skip:(this.page-1)*this.limit,$sort:{createdAt:-1}}});this.response=e},async save(e){let l=Object.assign({},e);if(l.password||delete l.password,l.password&&l.password.length<6){alert("Too short password!");return}let g=await this.io.service("users").patch(l._id,l);this.response.data=this.response.data.map(b=>b._id!==g._id?b:g)},async remove(e){const l=await this.io.service("users").remove(e._id);this.response.data=this.response.data.filter(g=>g._id!==l._id)},clear(){this.email="",this.owner_group="",this.password="",this.locale="",this.permissions=["user"]}}},O={class:"p-6"},q={class:"editor"},G=o("h2",{class:"text-4xl"}," Users ",-1),z={class:"my-6"},J={class:"grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4"},Q=["disabled"],W={class:"text-slate-600 py-2 text-center"},X=["disabled"],Z={class:"my-2 rounded flex bg-slate-100 p-4"},x={class:"gap-1 grid-cols-9 grid"},ee=o("input",{placeholder:"ID",readonly:"readonly",class:"p-2"},null,-1),se={class:"grid-cols-3 grid"},oe=["onClick","disabled"],le=["onUpdate:modelValue"],ae=o("input",{placeholder:"Updated",readonly:"readonly",class:"p-2"},null,-1),te=o("input",{placeholder:"Created",readonly:"readonly",class:"p-2"},null,-1),de={class:"my-2 rounded flex bg-slate-100 p-4"},re={class:"my-2 rounded flex bg-slate-100 p-4"},ie={class:"grid-cols-9 grow gap-1 grid"},ne=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],me=["onUpdate:modelValue"],he={class:"grid-cols-3 grid"},ue=["onClick","disabled"],ge=["onUpdate:modelValue"],ce=["onClick"],be=["onUpdate:modelValue"],ve=["onUpdate:modelValue"],we=["value"],ye=["value"],fe={class:"grid-cols-2 grid"},ke=["onClick","disabled"],_e=["onClick"],Ue={class:"grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4"},Ve=["disabled"],Ce={class:"text-slate-600 py-2 text-center"},Me=["disabled"];function Pe(e,l,g,b,De,t){var f,k,_,U,V,C,M,P,D,A,N,$,H,S,Y,B,R,T;return m(),p("div",O,[o("div",q,[G,o("div",z,[o("div",J,[o("button",{type:"",onClick:l[0]||(l[0]=s=>(e.page--,t.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:e.page<=1}," Previous Page ",8,Q),o("span",W," Page "+n(e.page)+" of "+n(Math.ceil(((f=e.response)==null?void 0:f.total)/((k=e.response)==null?void 0:k.limit)))+" ("+n((_=e.response)==null?void 0:_.skip)+" - "+n(((U=e.response)==null?void 0:U.skip)+((C=(V=e.response)==null?void 0:V.data)==null?void 0:C.length))+" of "+n((M=e.response)==null?void 0:M.total)+") ",1),o("button",{type:"",onClick:l[1]||(l[1]=s=>(e.page++,t.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:e.page>=Math.ceil(((P=e.response)==null?void 0:P.total)/((D=e.response)==null?void 0:D.limit))}," Next Page ",8,X)]),o("div",Z,[o("div",x,[ee,a(),r(o("input",{placeholder:"Email","onUpdate:modelValue":l[2]||(l[2]=s=>e.email=s),class:"p-2"},null,512),[[i,e.email]]),a(),r(o("input",{placeholder:"Password","onUpdate:modelValue":l[3]||(l[3]=s=>e.password=s),type:"password",class:"p-2"},null,512),[[i,e.password]]),o("div",null,[(m(!0),p(w,null,y(e.permissions,(s,h)=>(m(),p("div",se,[o("button",{onClick:u=>e.permissions.splice(h,1),disabled:e.permissions.length<=1,class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"}," Remove ",8,oe),a(),r(o("input",{placeholder:"permissions","onUpdate:modelValue":u=>e.permissions[h]=u,class:"p-2"},null,8,le),[[i,e.permissions[h]]]),a(),!e.permissions.length||h===e.permissions.length-1?(m(),p("button",{key:0,onClick:l[4]||(l[4]=u=>e.permissions.push("")),class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"}," Add ")):E("",!0)]))),256))]),a(),r(o("input",{placeholder:"Locale","onUpdate:modelValue":l[5]||(l[5]=s=>e.locale=s),class:"p-2"},null,512),[[i,e.locale]]),a(),r(o("input",{placeholder:"Owner Group","onUpdate:modelValue":l[6]||(l[6]=s=>e.owner_group=s),class:"p-2"},null,512),[[i,e.owner_group]]),a(),ae,a(),te,o("button",{onClick:l[7]||(l[7]=s=>t.create({email:e.email,password:e.password,locale:e.locale,permissions:e.permissions,owner_group:e.owner_group})),class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"}," Create ")])]),o("div",de,[r(o("input",{"onUpdate:modelValue":l[8]||(l[8]=s=>e.search=s),placeholder:"Search...",onKeydown:l[9]||(l[9]=K((...s)=>t.list&&t.list(...s),["enter"])),class:"shadow rounded px-5 grow"},null,544),[[i,e.search]]),a(),o("button",{onClick:l[10]||(l[10]=(...s)=>t.list&&t.list(...s)),class:"shadow-slate-400 shadow rounded bg-gradient-to-bl bg-blue-500 from-blue-400 hover:bg-blue-600 text-slate-100 px-6 ml-2 py-2.5"}," Search ")]),(m(!0),p(w,null,y(t.users,s=>{var h,u,j;return m(),p("div",re,[o("div",ie,[r(o("input",{placeholder:"ID","onUpdate:modelValue":d=>s._id=d,readonly:"",class:"p-2"},null,8,ne),[[i,s._id]]),a(),r(o("input",{placeholder:"email","onUpdate:modelValue":d=>s.email=d,class:"p-2"},null,8,pe),[[i,s.email]]),a(),r(o("input",{placeholder:"password","onUpdate:modelValue":d=>s.password=d,type:"password",class:"p-2"},null,8,me),[[i,s.password]]),o("div",null,[(m(!0),p(w,null,y(s.permissions,(d,c)=>(m(),p("div",he,[o("button",{onClick:v=>s.permissions.splice(c,1),disabled:s.permissions.length<=1,class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"}," Remove ",8,ue),a(),r(o("input",{placeholder:"permissions","onUpdate:modelValue":v=>s.permissions[c]=v,class:"p-2"},null,8,ge),[[i,s.permissions[c]]]),a(),!s.permissions.length||c===s.permissions.length-1?(m(),p("button",{key:0,onClick:v=>s.permissions.push(""),class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"}," Add ",8,ce)):E("",!0)]))),256))]),a(),r(o("input",{placeholder:"locale","onUpdate:modelValue":d=>s.locale=d,class:"p-2"},null,8,be),[[i,s.locale]]),a(),r(o("input",{placeholder:"owner group","onUpdate:modelValue":d=>s.owner_group=d,class:"p-2"},null,8,ve),[[i,s.owner_group]]),a(),o("input",{placeholder:"Updated",readonly:"",value:e.moment(s.updatedAt).format("DD.MM.YY HH:mm:ss"),class:"p-2"},null,8,we),a(),o("input",{placeholder:"Created",readonly:"",value:e.moment(s.createdAt).format("DD.MM.YY HH:mm:ss"),class:"p-2"},null,8,ye),o("div",fe,[o("button",{onClick:d=>t.remove(s),class:"bg-red-400 p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl from-red-500 hover:bg-red-600 text-slate-100 ml-2",disabled:((u=(h=t.user)==null?void 0:h.value)==null?void 0:u._id)===s._id||((j=t.user)==null?void 0:j._id)===s._id}," Remove ",8,ke),a(),o("button",{onClick:d=>t.save(s),class:"p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"}," Save ",8,_e)])])])}),256)),o("div",Ue,[o("button",{onClick:l[11]||(l[11]=s=>(e.page--,t.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:e.page<=1}," Previous Page ",8,Ve),o("span",Ce," Page "+n(e.page)+" of "+n(Math.ceil(((A=e.response)==null?void 0:A.total)/((N=e.response)==null?void 0:N.limit)))+" ("+n(($=e.response)==null?void 0:$.skip)+" - "+n(((H=e.response)==null?void 0:H.skip)+((Y=(S=e.response)==null?void 0:S.data)==null?void 0:Y.length))+" of "+n((B=e.response)==null?void 0:B.total)+") ",1),o("button",{type:"",onClick:l[12]||(l[12]=s=>(e.page++,t.list())),class:"disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark",disabled:e.page>=Math.ceil(((R=e.response)==null?void 0:R.total)/((T=e.response)==null?void 0:T.limit))}," Next Page ",8,Me)])])])])}const $e=I(L,[["render",Pe]]);export{$e as default};
