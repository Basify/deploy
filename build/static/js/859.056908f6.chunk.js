"use strict";(self.webpackChunkcashx=self.webpackChunkcashx||[]).push([[859],{5859:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>y});var r=t(1469),s=t(2102),n=t(6788),o=t(1211);class c extends n.C{constructor(e){var a;let{callbackSelector:t,cause:r,data:s,extraData:n,sender:c,urls:l}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",l&&["  Gateway URL(s):",...l.map((e=>"    ".concat((0,o.ID)(e))))],"  Sender: ".concat(c),"  Data: ".concat(s),"  Callback selector: ".concat(t),"  Extra data: ".concat(n)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.C{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,o.ID)(t)),"Response: ".concat((0,s.A)(a))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.C{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(t),"OffchainLookup sender address: ".concat(a)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(9284),i=t(3531),f=t(3110),h=t(7901),p=t(306);var b=t(1546),w=t(4537);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:s,data:n,to:o}=a;const{args:l}=(0,i.W)({data:n,abi:[m]}),[u,w,y,g,v]=l,{ccipRead:x}=e,C=x&&"function"===typeof(null===x||void 0===x?void 0:x.request)?x.request:k;try{if(!function(e,a){if(!(0,p.P)(e,{strict:!1}))throw new h.M({address:e});if(!(0,p.P)(a,{strict:!1}))throw new h.M({address:a});return e.toLowerCase()===a.toLowerCase()}(o,u))throw new d({sender:u,to:o});const a=await C({data:y,sender:u,urls:w}),{data:n}=await(0,r.T1)(e,{blockNumber:t,blockTag:s,data:(0,b.xW)([g,(0,f.h)([{type:"bytes"},{type:"bytes"}],[a,v])]),to:o});return n}catch(O){throw new c({callbackSelector:g,cause:O,data:n,extraData:v,sender:u,urls:w})}}async function k(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){const e=r[i],f=e.includes("{data}")?"GET":"POST",h="POST"===f?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(h),method:f});let d;if(d=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){var c;n=new u.Ci({body:h,details:null!==(c=d)&&void 0!==c&&c.error?(0,s.A)(d.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.q)(d)){n=new l({result:d,url:e});continue}return d}catch(d){n=new u.Ci({body:h,details:d.message,url:e})}}throw n}}}]);
//# sourceMappingURL=859.056908f6.chunk.js.map