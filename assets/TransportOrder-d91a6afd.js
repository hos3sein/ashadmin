import{r as c,u as S,i as F,n as h,j as $,G as I,c as w}from"./index-b8c717f7.js";import{C as v,a as L,b as p,A as j}from"./AppWebsiteVisits-d2eba306.js";import"./BaseOptionChart-d6d1be4e.js";const x=()=>{const[r,E]=c.useState(14),{t:d}=S(),{shipings:u}=F(e=>e.shiping),l=c.useCallback(()=>{//! Inja state haye pending , during va end init mishan be sorate {at : tarikh , value : 0}
let e=[];if(r===7||r===14||r===30){const o=v(r).reverse();for(let n of o){const a={at:n,values:0};e.push(a)}return e}else if(r===180){const o=L(6).reverse();for(let n of o){const a={at:n,values:0};e.push(a)}return e}else if(r===365){const o=p(12).reverse();for(let n of o){const a={at:n,values:0};e.push(a)}return e}},[r]),[y,D]=c.useState(l),[g,Y]=c.useState(l),[T,k]=c.useState(l),C=e=>{//! inja state zamani ke element select baraye date taghir mikone set mishe
E(e.target.value)},m=c.useCallback(()=>{//! inja list tarikh ha ro migirim , be sorate 7 ya 14 roz va ya 6 mahe ya 12 mahe
switch(r){case 7:return v(r).reverse();case 14:return v(r).reverse();case 30:return v(r).reverse();case 180:return p(6).reverse();case 365:return p(12).reverse()}},[r]),M=c.useCallback(()=>{//! Inja state pending , during va end baraye 7 roze ya 14 roz set mishe , yani be sorate rozane
const e=[...l()],o=[...l()],n=[...l()];u==null||u.forEach(a=>{const f=h(`${a.dateFrom.year}/${a.dateFrom.month}/${a.dateFrom.day}`).format("YYYY/MM/DD"),i=h(`${a.dateTo.year}/${a.dateTo.month}/${a.dateTo.day}`).format("YYYY/MM/DD");a.status<=3&&e.forEach(({at:s},t)=>{s===f&&(e[t].values+=1),s===i&&(e[t].values+=1)}),a.status>=4&&a.status<8&&o.forEach(({at:s},t)=>{s===f&&(o[t].values+=1),s===i&&(o[t].values+=1)}),(a==null?void 0:a.status)===8&&n.forEach(({at:s},t)=>{s===f&&(n[t].values+=1),s===i&&(n[t].values+=1)})}),D(e),Y(o),k(n)},[u,l()]),b=c.useCallback(()=>{//! Inja state haye init , pending , taken be sorateh mahiane set mishan
const e=[...l()],o=[...l()],n=[...l()];u.forEach(a=>{const f=h(`${a.dateFrom.year}/${a.dateFrom.month}/${a.dateFrom.day}`).format("YYYY/MM/DD"),i=h(`${a.dateTo.year}/${a.dateTo.month}/${a.dateTo.day}`).format("YYYY/MM/DD");a.status<=3&&e.forEach(({at:s},t)=>{s.slice(5,7)===f.slice(5,7)&&(e[t].values+=1),s.slice(5,7)===i.slice(5,7)&&(e[t].values+=1)}),a.status>=4&&a.status<8&&o.forEach(({at:s},t)=>{s.slice(5,7)===f.slice(5,7)&&(o[t].values+=1),s.slice(5,7)===i&&(o[t].values+=1)}),a.status===8&&n.forEach(({at:s},t)=>{s.slice(5,7)===f.slice(5,7)&&(n[t].values+=1),s.slice(5,7)===i.slice(5,7)&&(n[t].values+=1)})}),D(e),Y(o),k(n)},[u,l()]);return c.useEffect(()=>{m(),M(),(r===180||r===365)&&b()},[u,r]),$.jsx(I,{item:!0,lg:6,md:6,xs:12,children:$.jsx(j,{sx:{backgroundColor:w.grayBack,color:"black"},title:d("Transport Orders"),chartLabels:m(),chartData:[{name:d("Completed"),type:"column",fill:"solid",data:T&&T.map(e=>e.values),color:"#8D67D9"},{name:d("Booked"),type:"area",fill:"gradient",data:g&&g.map(e=>e.values),color:"#D298D5"},{name:d("In progress"),type:"area",fill:"gradient",data:y&&y.map(e=>e.values),color:"#AF7FD6"}],onLengthDays:C,lengthDays:r})})};export{x as default};
