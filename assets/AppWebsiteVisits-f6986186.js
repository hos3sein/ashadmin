import{n as f,P as o,r as M,o as O,u as w,i as I,p as A,j as e,l as B,m as L,B as j,F as E,I as F,S,M as c,q as p,t as m,v as W,w as x}from"./index-a0e1a7e0.js";import{m as q,B as R,_ as P}from"./BaseOptionChart-29e57b2c.js";const H=r=>{const i=[];for(let s=0;s<r;s++)i.push(f().subtract(s,"days").format("YYYY/MM/DD"));return i},N=r=>{const i=[];for(let s=0;s<r;s++)i.push(f().subtract(s,"month").format("YYYY/MM/DD"));return i},$=r=>{const i=[];for(let s=0;s<r;s++)i.push(f().subtract(s,"month").format("YYYY/MM/DD"));return i};V.propTypes={title:o.string,subheader:o.string,chartData:o.array.isRequired,chartLabels:o.arrayOf(o.string).isRequired,onLengthDays:o.func,lengthDays:o.number};function V({title:r,subheader:i,chartLabels:s,chartData:C,onLengthDays:g,lengthDays:k,...D}){const[v,b]=M.useState(null),y=q(R(),{plotOptions:{bar:{columnWidth:"16%"}},fill:{type:C.map(l=>l.fill)},labels:s,xaxis:{type:"m"},tooltip:{shared:!0,intersect:!1,y:{formatter:l=>typeof l<"u"?`${l.toFixed(0)} content`:l}}}),n=!!v,d=O(),{t:a}=w(),{user:t}=I(l=>l.user),h=A(),u=l=>{b(l.currentTarget)},T=()=>{b(null)},Y=()=>{switch(a(r)){case a("Trucks Orders"):{h(x(0)),d("/dashboard/charts-details",{replace:!0,data:1});break}case a("Commerces Orders"):{h(x(1)),d("/dashboard/charts-details",{replace:!0});break}case a("Transports Orders"):{h(x(2)),d("/dashboard/charts-details",{replace:!0});break}case a("Linemakers Orders"):{h(x(3)),d("/dashboard/charts-details",{replace:!0});break}}b(null)};return e.jsx(e.Fragment,{children:e.jsxs(B,{...D,children:[e.jsx(L,{sx:{color:"white"},title:r,subheader:i,action:e.jsxs(j,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(E,{sx:{width:"8rem"},children:[e.jsx(F,{id:"demo-simple-select-label",children:a("Time period")}),e.jsxs(S,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:k,label:"Time period",onChange:g,sx:{color:"white"},children:[e.jsx(c,{value:7,children:a("1 Week")}),e.jsx(c,{value:14,children:a("2 Week")}),e.jsx(c,{value:180,children:a("6 Month")}),e.jsx(c,{value:365,children:a("1 Year")})]})]}),r===a("Trucks Orders")&&+(t==null?void 0:t.chartsDetails[6])?e.jsx(p,{id:"menu","aria-label":"settings",sx:{color:"white"},"aria-controls":n?"menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:u,children:e.jsx(m,{})}):!1,r===a("Commerces Orders")&&+(t==null?void 0:t.chartsDetails[5])?e.jsx(p,{id:"menu","aria-label":"settings",sx:{color:"white"},"aria-controls":n?"menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:u,children:e.jsx(m,{})}):!1,r===a("Transports Orders")&&+(t==null?void 0:t.chartsDetails[7])?e.jsx(p,{id:"menu","aria-label":"settings",sx:{color:"white"},"aria-controls":n?"menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:u,children:e.jsx(m,{})}):!1,r===a("Linemakers Orders")&&+(t==null?void 0:t.chartsDetails[8])?e.jsx(p,{id:"menu","aria-label":"settings",sx:{color:"white"},"aria-controls":n?"menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:u,children:e.jsx(m,{})}):!1]})}),e.jsx(j,{children:e.jsx(W,{id:"menu",anchorEl:v,open:n,onClose:T,children:e.jsx(c,{onClick:Y,sx:{color:"white"},children:a("Display Details")})})}),e.jsx(j,{sx:{p:3,pb:1},dir:"ltr",children:e.jsx(P,{type:"line",series:C,options:y,height:364})})]})})}export{V as A,H as C,N as a,$ as b};