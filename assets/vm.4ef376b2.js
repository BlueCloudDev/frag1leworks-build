import{a as n,c as o,h as s}from"./index.1ec333a4.js";const i={xs:18,sm:24,md:32,lg:38,xl:46},l={size:String};function m(e,t=i){return n(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function S(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}const u={size:{type:[String,Number],default:"1em"},color:String};function c(e){return{cSize:n(()=>e.size in i?`${i[e.size]}px`:e.size),classes:n(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var d=o({name:"QSpinner",props:{...u,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=c(e);return()=>s("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function f(e){return e.appContext.config.globalProperties.$router!==void 0}function v(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{d as Q,z as a,m as b,v as c,S as h,l as u,f as v};