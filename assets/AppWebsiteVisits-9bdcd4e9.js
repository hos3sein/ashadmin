import{n as b,P as l,r as D,o as g,u as Y,i as T,p as O,j as e,l as M,m as I,B as x,F as A,I as B,S as L,M as h,q as p,c as u,t as m}from"./index-da9f9318.js";import{m as w,B as E,_ as F}from"./BaseOptionChart-cdb21334.js";const P=s=>{const o=[];for(let a=0;a<s;a++)o.push(b().subtract(a,"days").format("YYYY/MM/DD"));return o},_=s=>{const o=[];for(let a=0;a<s;a++)o.push(b().subtract(a,"month").format("YYYY/MM/DD"));return o},H=s=>{const o=[];for(let a=0;a<s;a++)o.push(b().subtract(a,"month").format("YYYY/MM/DD"));return o};S.propTypes={title:l.string,subheader:l.string,chartData:l.array.isRequired,chartLabels:l.arrayOf(l.string).isRequired,onLengthDays:l.func,lengthDays:l.number};function S({title:s,subheader:o,chartLabels:a,chartData:f,onLengthDays:C,lengthDays:j,...k}){const[W,v]=D.useState(null),y=w(E(),{plotOptions:{bar:{columnWidth:"16%"}},fill:{type:f.map(n=>n.fill)},labels:a,xaxis:{type:"m"},tooltip:{shared:!0,intersect:!1,y:{formatter:n=>typeof n<"u"?`${n.toFixed(0)} content`:n}}}),i=g(),{t:r}=Y(),{user:t}=T(n=>n.user),c=O(),d=()=>{switch(r(s)){case r("Trucks Orders"):{c(m(0)),i("/dashboard/orders",{replace:!0,data:1});break}case r("Commerces Orders"):{c(m(1)),i("/dashboard/orders",{replace:!0});break}case r("Transport Orders"):{c(m(2)),i("/dashboard/orders",{replace:!0});break}case r("Linemakers Orders"):{c(m(3)),i("/dashboard/orders",{replace:!0});break}}v(null)};return e.jsx(e.Fragment,{children:e.jsxs(M,{...k,children:[e.jsx(I,{sx:{color:"white"},title:s,subheader:o,action:e.jsxs(x,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(A,{sx:{width:"8rem"},children:[e.jsx(B,{id:"demo-simple-select-label",children:r("Time period")}),e.jsxs(L,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,label:"Time period",onChange:C,sx:{color:"white"},children:[e.jsx(h,{value:7,children:r("1 Week")}),e.jsx(h,{value:14,children:r("2 Week")}),e.jsx(h,{value:180,children:r("6 Month")}),e.jsx(h,{value:365,children:r("1 Year")})]})]}),s===r("Trucks Orders")&&+(t==null?void 0:t.chartsDetails[6])?e.jsx(p,{variant:"contained",sx:{"&:hover":{backgroundColor:u.primary}},onClick:d,children:"Details"}):!1,s===r("Commerces Orders")&&+(t==null?void 0:t.chartsDetails[5])?e.jsx(p,{variant:"contained",sx:{"&:hover":{backgroundColor:u.primary}},onClick:d,children:"Details"}):!1,s===r("Transport Orders")&&+(t==null?void 0:t.chartsDetails[7])?e.jsx(p,{variant:"contained",sx:{"&:hover":{backgroundColor:u.primary}},onClick:d,children:"Details"}):!1,s===r("Linemakers Orders")&&+(t==null?void 0:t.chartsDetails[8])?e.jsx(p,{variant:"contained",sx:{"&:hover":{backgroundColor:u.primary}},onClick:d,children:"Details"}):!1]})}),e.jsx(x,{}),e.jsx(x,{sx:{p:3,pb:1},dir:"ltr",children:e.jsx(F,{type:"line",series:f,options:y,height:364})})]})})}export{S as A,P as C,_ as a,H as b};