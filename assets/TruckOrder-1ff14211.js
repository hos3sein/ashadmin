import{r as u,u as A,i as I,n as f,j as C,G as L,c as j}from"./index-a0e1a7e0.js";import{C as g,a as G,b as v,A as P}from"./AppWebsiteVisits-f6986186.js";import"./BaseOptionChart-29e57b2c.js";const R=()=>{const[s,b]=u.useState(14),{t:h}=A(),{trucks:d}=I(a=>a.truck),l=u.useCallback(()=>{//! Inja state haye pending , during va end init mishan be sorate {at : tarikh , value : 0}
let a=[];if(s===7||s===14||s===30){const r=g(s).reverse();for(let o of r){const e={at:o,values:0};a.push(e)}return a}else if(s===180){const r=G(6).reverse();for(let o of r){const e={at:o,values:0};a.push(e)}return a}else if(s===365){const r=v(12).reverse();for(let o of r){const e={at:o,values:0};a.push(e)}return a}},[s]),[m,D]=u.useState(l),[p,Y]=u.useState(l),[T,M]=u.useState(l),w=a=>{//! inja state zamani ke element select baraye date taghir mikone set mishe
b(a.target.value)},E=u.useCallback(()=>{//! inja list tarikh ha ro migirim , be sorate 7 ya 14 roz va ya 6 mahe ya 12 mahe
switch(s){case 7:return g(s).reverse();case 14:return g(s).reverse();case 30:return g(s).reverse();case 180:return v(6).reverse();case 365:return v(12).reverse()}},[s]),x=u.useCallback(()=>{//! Inja state pending , during va end baraye 7 roze ya 14 roz set mishe , yani be sorate rozane
const a=[...l()],r=[...l()],o=[...l()];d==null||d.forEach(e=>{if(e.staus===0&&a.forEach((t,c)=>{f(t.updatedAt).format("YYYY/MM/DD")===t.at&&(a[c].values+=1)}),e.statusTime.length){const t=e==null?void 0:e.statusTime[e.statusTime.length-1].status,c=e==null?void 0:e.statusTime[e.statusTime.length-1].at;(t===4||t===5||t===6||t===7)&&r.forEach((n,i)=>{f(c*1).format("YYYY/MM/DD")===n.at&&(r[i].values+=1)}),t===8&&o.forEach((n,i)=>{f(c*1).format("YYYY/MM/DD")===n.at&&(o[i].values+=1)}),(t===1||t===2||t===3)&&a.forEach((n,i)=>{f(c*1).format("YYYY/MM/DD")===n.at&&(a[i].values+=1)})}}),D(a),Y(r),M(o)},[d,l()]),S=u.useCallback(()=>{//! Inja state haye pending , during , end be sorateh mahiane set mishan
const a=[...l()],r=[...l()],o=[...l()];d.forEach(e=>{if(e.status===0&&a.forEach((t,c)=>{f(t.updatedAt).format("YYYY/MM/DD")===t.at&&(a[c].values+=1)}),e.statusTime.length){const t=e==null?void 0:e.statusTime[e.statusTime.length-1].status,c=e==null?void 0:e.statusTime[e.statusTime.length-1].at;(t===4||t===5||t===6||t===7)&&a.forEach((n,i)=>{n.at.slice(5,7)===f(c*1).format("MM")&&(r[i].values+=1)}),t===8&&a.forEach((n,i)=>{n.at.slice(5,7)===f(c*1).format("MM")&&(o[i].values+=1)}),(t===1||t===2||t===3)&&a.forEach((n,i)=>{n.at.slice(5,7)===f(c*1).format("MM")&&(a[i].values+=1)})}}),D(a),Y(r),M(o)},[d,l()]);return u.useEffect(()=>{E(),x(),(s===180||s===365)&&S()},[d,s]),C.jsx(L,{item:!0,lg:6,md:6,xs:12,children:C.jsx(P,{sx:{backgroundColor:j.grayBack,color:"black"},title:h("Trucks Orders"),chartLabels:E(),chartData:[{name:h("Completed"),type:"column",fill:"solid",data:T&&T.map(a=>a.values),color:"#8D67D9"},{name:h("Awaiting Price Offer"),type:"area",fill:"gradient",data:m&&m.map(a=>a.values),color:"#D298D5"},{name:h("In progress"),type:"area",fill:"gradient",data:p&&p.map(a=>a.values),color:"#AF7FD6"}],onLengthDays:w,lengthDays:s})})};export{R as default};