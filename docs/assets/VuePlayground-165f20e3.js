import{f as _,g as f,h as g,s,i as m,v as y,j as R,k as a,$ as h,_ as r}from"./app-a516acff.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=f(),i=g(!0),t=s(),l=s(),n=s(),o=m(()=>y({},u,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-eb9f0931.js"),["assets/vue-repl-eb9f0931.js","assets/app-a516acff.js","assets/utils-obz1_5fQ-60357f83.js"]),r(()=>import("./codemirror-editor-575e367b.js"),["assets/codemirror-editor-575e367b.js","assets/utils-obz1_5fQ-60357f83.js","assets/app-a516acff.js"])]);t.value=p,n.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:n.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};
