import{r as n,A as p,_ as i,u,j as e,B as l,c as h,T as o,C as f,P as a}from"./index-a0e1a7e0.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 00-11.3 0l-45 45.2a8.03 8.03 0 000 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 004.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z"}}]},name:"fall",theme:"outlined"};const y=g;var v=function(r,t){return n.createElement(p,i(i({},r),{},{ref:t,icon:y}))},F=n.forwardRef(v);const j=F;var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"}}]},name:"rise",theme:"outlined"};const O=b;var R=function(r,t){return n.createElement(p,i(i({},r),{},{ref:t,icon:O}))},w=n.forwardRef(R);const S=w,d=({title:s,count:r,percentage:t,isLoss:c,extra:m})=>{const{t:x}=u();return e.jsxs(l,{sx:{backgroundColor:h.grayBack,color:"#F1F1F1",padding:"20px",marginY:"5px",borderRadius:"10px",height:"150px",boxShadow:"0px 1px 90px 0px rgba(0,0,0,0.2)",display:"flex",flexFlow:"column",mx:{xs:"auto",sx:"auto",md:0}},children:[e.jsx(l,{sx:{height:1/4},children:e.jsx(o,{noWrap:!0,sx:{color:"#F1F1F1"},variant:"h6",color:"textSecondary",children:s})}),e.jsxs(l,{sx:{display:"flex",alignItems:"center",height:2/4},children:[e.jsx(o,{variant:"h4",color:"inherit",children:r}),e.jsx(f,{variant:"combined",color:c?"warning":"primary",icon:e.jsxs(e.Fragment,{children:[!c&&e.jsx(S,{style:{fontSize:"0.75rem",color:"inherit"}}),c&&e.jsx(j,{style:{fontSize:"0.75rem",color:"inherit"}})]}),label:`${t}%`,sx:{ml:1.25,pl:1},size:"small"})]}),e.jsx(l,{sx:{height:1/4,alignItems:"end",display:"flex"},children:e.jsxs(o,{sx:{color:"#F1F1F1"},variant:"caption",color:"textSecondary",children:[x("Last year,")," ",e.jsx(o,{component:"span",variant:"caption",sx:{color:"primary.main"},children:m})," ",x("people were added to the application")]})})]})};d.propTypes={title:a.string,count:a.number,percentage:a.number,isLoss:a.bool,extra:a.oneOfType([a.node,a.string])};d.defaultProps={color:"primary"};const L=n.memo(d);export{L as default};