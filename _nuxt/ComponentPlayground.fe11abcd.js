import{M as m,I as p,d as c,af as i,r as u,N as e,l}from"./entry.bb14f1b6.js";import{u as d}from"./asyncData.13ec53a1.js";import f from"./Ellipsis.98662239.js";import _ from"./ComponentPlaygroundData.8b4de0d4.js";import"./TabsHeader.bec093a0.js";import"./ComponentPlaygroundProps.876e91a8.js";import"./ProseH4.6f9bb500.js";import"./ProseCodeInline.dee0f366.js";import"./Badge.a23e5468.js";import"./MDCSlot.cd59ba22.js";import"./slot.5a2b73a8.js";import"./ProseP.77685ae9.js";import"./index.629cd0fc.js";import"./ComponentPlaygroundSlots.vue.4945f2c8.js";import"./ComponentPlaygroundTokens.vue.d847479a.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};
