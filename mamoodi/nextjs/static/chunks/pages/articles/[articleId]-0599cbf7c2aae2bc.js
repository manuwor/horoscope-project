(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{7355:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[articleId]",function(){return i(238)}])},3444:function(e,t,i){"use strict";var n=i(5893);i(7294);var s=i(1818);t.Z=e=>{let{url:t,title:i}=e;return(0,n.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,n.jsx)(s.Dk,{url:t,quote:i,children:(0,n.jsx)(s.Vq,{size:32,round:!0})}),(0,n.jsx)(s.B,{url:t,title:i,children:(0,n.jsx)(s.Zm,{size:32,round:!0})}),(0,n.jsx)(s.Ni,{url:t,children:(0,n.jsx)(s.zb,{size:32,round:!0})}),(0,n.jsx)(s.N0,{url:t,title:i,children:(0,n.jsx)(s.ud,{size:32,round:!0})})]})}},238:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return f},default:function(){return g}});var n=i(5893),s=i(7294),a=i(9008),l=i.n(a),r=i(5152),o=i.n(r),c=i(1163),p=i(9907),d=i(1194),x=i.n(d),u=i(3444),m=e=>{let{article:t}=e,[i,a]=s.useState();(0,c.useRouter)(),(0,s.useEffect)(()=>{console.log(t),a(t)},[t]),(0,s.useEffect)(()=>{i&&l()},[i]);let l=async()=>{if(i&&i.id)try{let e=await fetch("".concat(p.Z.api.url,"articles/").concat(i.id,"/view"),{method:"PUT",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Failed to update view count");let t=await e.json();console.log("View count updated:",t.viewCount)}catch(e){console.error("Error updating view count:",e)}};return(0,s.useEffect)(()=>{window.adsbygoogle&&window.adsbygoogle.push({})},[]),(0,n.jsx)("div",{className:x().bodyCustomMain,children:(0,n.jsx)("div",{className:x().articleMain,children:(0,n.jsx)("div",{className:x().articleItem,children:i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:x().articleItemHeader,children:i.title}),(0,n.jsx)("img",{src:i.imageUrl?i.imageUrl:"/assets/images/share-cover.jpg",className:x().articleItemImg}),(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:i.content},className:x().articleItemDesc}),(0,n.jsx)(u.Z,{url:p.Z.url+"articles/"+i.id,title:i.title}),(0,n.jsxs)("span",{className:x().articleItemCount,children:["คนเข้าชมเว็บไซด์ ",i.viewCount?i.viewCount:"0"," คน"]}),(0,n.jsx)("div",{children:(0,n.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-7304132375043084","data-ad-slot":"5829918586"})})]})})})})},f=!0,g=e=>{let{articleModel:t}=e,a=o()(()=>Promise.all([i.e(756),i.e(976),i.e(794),i.e(48),i.e(436),i.e(218),i.e(945),i.e(790)]).then(i.bind(i,6682)),{loadableGenerated:{webpack:()=>[6682]}});o()(()=>Promise.all([i.e(299),i.e(913)]).then(i.bind(i,1913)),{loadableGenerated:{webpack:()=>[1913]}});let[r,d]=s.useState(),{articleId:x}=(0,c.useRouter)().query;return s.useEffect(()=>{t&&(console.log(t),d(t))},[t]),(0,n.jsxs)("div",{children:[(0,n.jsx)(l(),{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,n.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,n.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,n.jsx)("title",{children:t.title}),(0,n.jsx)("meta",{name:"google-site-verification",content:"beDc3cM2TX-JOmgv12qX4ACEqM4eYp4VHcGsfyd8yDg"}),(0,n.jsx)("meta",{name:"description",content:t.shortDescription}),(0,n.jsx)("meta",{name:"og:description",content:t.title}),(0,n.jsx)("meta",{property:"og:url",content:p.Z.url+"articles/"+t.id}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:t.title}),(0,n.jsx)("meta",{property:"og:image",content:t.imageUrl}),(0,n.jsx)("meta",{name:"keywords",content:t.keywords.join(", ")+" "+p.Z.seo.keyword}),(0,n.jsx)("meta",{property:"og:keywords",content:t.keywords.join(", ")+" "+p.Z.seo.keyword}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}),(0,n.jsx)(a,{}),r&&(0,n.jsx)(m,{article:r})]})}},1194:function(e){e.exports={body:"article_body__bMQHY",bodyCustomMain:"article_bodyCustomMain__P3337",articleMain:"article_articleMain__8N4CR",articleItem:"article_articleItem__518di",articleItemHeader:"article_articleItemHeader__U5UU9",articleItemImg:"article_articleItemImg__5Kgqs",articleItemCount:"article_articleItemCount__nvavh",articleItemDesc:"article_articleItemDesc__9_oed"}},1163:function(e,t,i){e.exports=i(9090)}},function(e){e.O(0,[180,888,774,179],function(){return e(e.s=7355)}),_N_E=e.O()}]);