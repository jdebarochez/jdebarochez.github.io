import{d as y,r as l,x as w,b as s,c as p,e as m,g as v,w as x,X as _,M as f,T as k,n as C,a6 as S,p as $,j as b,l as h,t as I,f as P,a5 as z}from"./entry.bb14f1b6.js";import{u as M,o as N}from"./index.629cd0fc.js";const T=e=>($("data-v-4a003820"),e=e(),b(),e),V=T(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),A={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=M();N(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=w(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(B,r)=>{const u=S;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[V,m("span",A,[v(k,{name:"fade"},{default:x(()=>{var d,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-4a003820"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,I(e.filename),1)):P("",!0),z(a.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const q=h(E,[["__scopeId","data-v-c164ce0a"]]);export{q as default};
