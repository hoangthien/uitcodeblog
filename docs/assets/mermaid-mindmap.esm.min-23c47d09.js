import{_ as r}from"./app-732c4383.js";import"./framework-1a587c83.js";const t="mindmap",i=a=>a.match(/^\s*mindmap/)!==null,o=async()=>{const{diagram:a}=await r(()=>import("./diagram-definition.0faef4c2-4dda171c.js"),[]);return{id:t,diagram:a}},e={id:t,detector:i,loader:o};export{e as default};