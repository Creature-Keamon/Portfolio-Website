import{S as r,O as s,W as d,B as c,M as w,a as h,A as f,P as m}from"./three.module-Dh1LqFEf.js";const i=new r,o=window.innerWidth/window.innerHeight,t=new s(-o,o,1,-1,.1,1e3);t.position.set(-1,-.1,1.7);const e=new d({canvas:document.querySelector("#bg"),alpha:!0});e.setSize(window.innerWidth,window.innerHeight);e.setPixelRatio(window.devicePixelRatio);e.setAnimationLoop(S);document.body.appendChild(e.domElement);function g(){return parseInt(window.getComputedStyle(canvas).width)}function p(){return parseInt(window.getComputedStyle(canvas).height)}addEventListener("resize",()=>{t.aspect=g()/p(),t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),n.scale.set(.5,.5,.5)},!1);const l=new c(1,1.2,1),u=new w({color:2898091}),n=new h(l,u);i.add(n);const x=new f(16777215),a=new m(16777215);a.position.set(0,0,1);i.add(x,a);n.rotation.x+=.2;function S(){n.rotation.y+=.01,e.render(i,t)}