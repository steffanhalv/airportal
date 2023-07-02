import{_ as x,o as n,c as a,F as v,r as b,a as o,e as h,b as y,t as g,n as k,p as $,f as C,w as z,g as S,h as _,i as w,j as N,k as B}from"./index-ebaf8422.js";const D={data:()=>({pages:[{label:"Users",path:"/admin/users"},{label:"Settings",path:"/admin/settings"},{label:"Server",path:"/admin/server"}],types:[]}),computed:{current(){return this.$route.path}},inject:["io"],methods:{async list(){let e=await this.io.service("types/any").find({query:{$limit:100,$sort:{title:"asc"}}});this.types=e.data},async add(){let e=prompt("Slug");e&&(await this.io.service("types/any").create({title:e,slug:e}),this.$emit("list"))}},created(){this.list()},props:{renderkey:{type:Number,default:42}},watch:{renderkey(){console.log("to the edge"),this.list()}}},m=e=>($("data-v-e1221e38"),e=e(),C(),e),I={style:{height:"100%",width:"160px","font-family":"Arial, Helvetica, sans-serif",background:"linear-gradient(215deg, rgba(58,66,64,1) 0%, rgba(33,33,33,1) 100%)","background-color":"rgb(58,66,64)"}},T=["onClick"],V={key:0,style:{"background-color":"#edebebff",width:"10px",position:"absolute",right:"0px","clip-path":"polygon(100% 0%, 100% 100%, 0% 50%)",top:"9px",height:"20px"}},A=m(()=>o("div",null,null,-1)),L=m(()=>o("hr",null,null,-1)),U=["onClick"],j={key:0,style:{"background-color":"#edebebff",width:"10px",position:"absolute",right:"0px","clip-path":"polygon(100% 0%, 100% 100%, 0% 50%)",top:"9px",height:"20px"}},F=m(()=>o("div",null,null,-1)),H=m(()=>o("div",null,null,-1));function q(e,i,f,l,p,t){return n(),a("div",I,[(n(!0),a(v,null,b(e.pages,s=>(n(),a("div",null,[o("div",{style:{"box-sizing":"border-box","padding-left":"10px","padding-right":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"15px",position:"relative"},class:k(["menu-button",s.path===t.current?"active":""]),onClick:d=>e.$router.push(s.path)},[s.path===t.current?(n(),a("div",V)):h("",!0),y(" "+g(s.label),1)],10,T),A]))),256)),L,(n(!0),a(v,null,b(e.types,s=>(n(),a("div",null,[o("div",{style:{"box-sizing":"border-box","padding-left":"10px","padding-right":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"15px",position:"relative"},class:k(["menu-button","/admin/types/"+s.slug===t.current?"active":""]),onClick:d=>e.$router.push("/admin/types/"+s.slug)},["/admin/types/"+s.slug===t.current?(n(),a("div",j)):h("",!0),y(" "+g(s.title.en),1)],10,U),F]))),256)),o("div",null,[o("div",{style:{"box-sizing":"border-box","padding-left":"10px","padding-right":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"15px",position:"relative"},class:"menu-button",onClick:i[0]||(i[0]=s=>t.add())}," + Add "),H])])}const E=x(D,[["render",q],["__scopeId","data-v-e1221e38"]]);const M={data:()=>({domains:[],current:""}),inject:["io","user","userUpdate"],methods:{async logout(){await this.io.logout(),this.userUpdate(null),this.$router.push("/")},async getDomains(){var e,i;this.domains=await this.io.service("types/domains").find().catch(f=>{var l,p,t;this.domains={data:[{match:(t=(p=(l=this.io)==null?void 0:l.io)==null?void 0:p.io)==null?void 0:t.uri}]}}),(i=(e=this.domains)==null?void 0:e.data)!=null&&i.length&&(this.current=this.domains.data[0].match)},open(){window.open("https://"+this.current,"_blank")}},created(){this.getDomains()}},G=e=>($("data-v-cb0249f5"),e=e(),C(),e),J={style:{height:"30px",display:"flex",color:"#e6e6e6ff","font-family":"Arial, Helvetica, sans-serif",background:"linear-gradient(45deg, rgba(58,66,64,1) 0%, rgba(48,52,51,1) 100%)","background-color":"rgb(58,66,64)"}},K={style:{"padding-left":"10px",width:"calc(100% - 350px)","font-weight":"bold","margin-top":"4px"}},O=G(()=>o("div",{style:{display:"inline-block","margin-top":"1px",color:"#ffffffff"}}," Airportal ",-1)),P=["value"],Q={style:{flex:"1"}};function R(e,i,f,l,p,t){var s,d,u,c;return n(),a("div",J,[o("div",K,[O,y(),z(o("select",{name:"",style:{width:"200px","padding-top":"1px","padding-bottom":"1px","margin-left":"7px","border-top-left-radius":"3px","border-top-right-radius":"3px","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},onChange:i[0]||(i[0]=r=>t.open()),"onUpdate:modelValue":i[1]||(i[1]=r=>e.current=r)},[(n(!0),a(v,null,b((s=e.domains)==null?void 0:s.data,r=>(n(),a("option",{value:r.match},g(r.match),9,P))),256))],544),[[S,e.current]])]),o("div",Q,[o("div",{style:{"text-align":"right","font-size":"14px","padding-top":"7px","padding-bottom":"7px","padding-right":"7px",display:"inline-block",float:"right"},class:"link",onClick:i[2]||(i[2]=(...r)=>t.logout&&t.logout(...r))}," Log out "),o("div",{style:{"text-align":"right","font-size":"14px","padding-top":"7px","padding-bottom":"7px","padding-right":"7px",display:"inline-block",float:"right"},onClick:i[3]||(i[3]=r=>e.$router.push("/admin/profile")),class:"link"},g(((u=(d=t.user)==null?void 0:d.value)==null?void 0:u.email)||((c=t.user)==null?void 0:c.email))+" - ",1)])])}const W=x(M,[["render",R],["__scopeId","data-v-cb0249f5"]]);const X={components:{Navigation:E,TopBar:W},props:["min"],computed:{minimal(){return this.min||!1},rerender(){return this.renderkey}},data:()=>({renderkey:1}),methods:{refresh(){this.renderkey=this.renderkey+1,this.$emit("list")}},emits:["list"]},Y={style:{height:"100%",width:"100%"}},Z={style:{width:"100%",height:"100%",overflow:"auto",position:"relative",flex:"1"}};function ee(e,i,f,l,p,t){const s=_("TopBar"),d=_("Navigation"),u=_("router-view");return n(),a("div",Y,[t.minimal?h("",!0):(n(),w(s,{key:0,style:{width:"100%"}})),o("div",{style:B([{display:"flex"},t.minimal?"height:100%":"height:calc(100% - 30px)"])},[t.minimal?h("",!0):(n(),w(d,{key:0,path:"/admin/services",renderkey:t.minimal?"":e.renderkey,onList:i[0]||(i[0]=c=>t.refresh())},null,8,["renderkey"])),o("div",Z,[N(u,{style:{width:"100%",height:"100%",overflow:"auto","background-color":"#edebebff",position:"absolute"},min:!0,onList:i[1]||(i[1]=c=>t.refresh())})])],4)])}const ie=x(X,[["render",ee]]);export{ie as default};
