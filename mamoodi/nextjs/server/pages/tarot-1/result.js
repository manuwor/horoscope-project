(()=>{var e={};e.id=708,e.ids=[708,888,660],e.modules={7711:e=>{e.exports={body:"tarot-1-result_body__oyO2b",bodyCustomMain:"tarot-1-result_bodyCustomMain__HynKd",tarot1Result:"tarot-1-result_tarot1Result__xLrXG",tarot1ResultItem:"tarot-1-result_tarot1ResultItem__jxr_h",tarot1ResultShareControl:"tarot-1-result_tarot1ResultShareControl__Eq9df",tarot1ResultItemHeader:"tarot-1-result_tarot1ResultItemHeader__KNKyE",tarot1ResultCardControl:"tarot-1-result_tarot1ResultCardControl__kW0XF",tarot1ResultCardTitle:"tarot-1-result_tarot1ResultCardTitle__gj_Ya",tarot1ResultCardDesc:"tarot-1-result_tarot1ResultCardDesc___Rltd",tarot1ResultStartControl:"tarot-1-result_tarot1ResultStartControl___W4OV",tarot1ResultStartButton:"tarot-1-result_tarot1ResultStartButton__kYLr0"}},5928:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>b,default:()=>R,getServerSideProps:()=>w,getStaticPaths:()=>S,getStaticProps:()=>q,reportWebVitals:()=>z,routeModule:()=>M,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>L,unstable_getStaticParams:()=>T,unstable_getStaticPaths:()=>N,unstable_getStaticProps:()=>P});var r={};s.r(r),s.d(r,{default:()=>C,getServerSideProps:()=>k});var i=s(7093),a=s(5244),o=s(1323),l=s(7645),n=s(5974),u=s(997),c=s(5152),p=s.n(c),x=s(6689),m=s(968),d=s.n(m),h=s(9907),g=s(7711),f=s.n(g),j=s(6675),y=s(3890),_=s.n(y);let v=({result:e})=>{let[t,s]=(0,x.useState)();(0,x.useEffect)(()=>{e&&s(e)},[e]),(0,x.useEffect)(()=>{t&&r(t.id)},[t]);let r=async e=>{try{let t=await fetch(`${h.Z.api.url}results/${e}/increment-view`,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Failed to increment view count");let s=await t.json();console.log("New view count:",s.newViewCount)}catch(e){console.error("Error incrementing view count:",e)}};return u.jsx(u.Fragment,{children:t&&u.jsx("div",{className:f().bodyCustomMain,children:u.jsx("div",{className:f().tarot1Result,children:(0,u.jsxs)("div",{className:f().tarot1ResultItem,children:[u.jsx("h1",{className:f().tarot1ResultItemHeader,children:t.result.title}),t.result.overall&&(0,u.jsxs)("div",{className:f().tarot1ResultCardControl,children:[u.jsx("span",{className:f().tarot1ResultCardTitle,children:"ดวงโดยรวม"}),u.jsx("span",{className:f().tarot1ResultCardDesc,children:t.result.overall})]}),t.result.job&&(0,u.jsxs)("div",{className:f().tarot1ResultCardControl,children:[u.jsx("span",{className:f().tarot1ResultCardTitle,children:"หน้าที่การงาน"}),u.jsx("span",{className:f().tarot1ResultCardDesc,children:t.result.job})]}),t.result.love&&(0,u.jsxs)("div",{className:f().tarot1ResultCardControl,children:[u.jsx("span",{className:f().tarot1ResultCardTitle,children:"ความรัก"}),u.jsx("span",{className:f().tarot1ResultCardDesc,children:t.result.love})]}),t.result.life&&(0,u.jsxs)("div",{className:f().tarot1ResultCardControl,children:[u.jsx("span",{className:f().tarot1ResultCardTitle,children:"ชีวิต"}),u.jsx("span",{className:f().tarot1ResultCardDesc,children:t.result.life})]}),t.result.health&&(0,u.jsxs)("div",{className:f().tarot1ResultCardControl,children:[u.jsx("span",{className:f().tarot1ResultCardTitle,children:"สุขภาพ"}),u.jsx("span",{className:f().tarot1ResultCardDesc,children:t.result.health})]}),u.jsx("div",{className:f().tarot1ResultShareControl,children:u.jsx(j.Z,{url:h.Z.url+"tarot-1/result?id="+t.id,title:t.result.title})}),u.jsx("div",{className:f().tarot1ResultStartControl,children:u.jsx(_(),{className:f().tarot1ResultStartButton,onClick:()=>{window.open(h.Z.app_url.tarot1,"_self")},children:"เริ่มดูดวงวันนี้"})})]})})})})},C=({result:e})=>{let t=p()(()=>s.e(682).then(s.bind(s,6682)),{loadableGenerated:{modules:["pages/tarot-1/result/index.tsx -> ../../../components/header/header"]}});return p()(()=>s.e(913).then(s.bind(s,1913)),{loadableGenerated:{modules:["pages/tarot-1/result/index.tsx -> ../../../components/footer/footer"]}}),(0,x.useEffect)(()=>{e&&console.log(e)},[e]),(0,u.jsxs)("div",{children:[(0,u.jsxs)(d(),{children:[u.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),u.jsx("link",{rel:"manifest",href:"/manifest.json"}),u.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),u.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),u.jsx("meta",{name:"theme-color",content:"#ffffff"}),u.jsx("title",{children:e.result.title}),u.jsx("meta",{name:"description",content:e.result.overall}),u.jsx("meta",{name:"og:description",content:e.result.overall}),u.jsx("meta",{property:"og:url",content:"https://mamoodi.com/tarot-1/result?id="+e.id}),u.jsx("meta",{property:"og:type",content:"website"}),u.jsx("meta",{property:"og:title",content:e.result.title}),u.jsx("meta",{property:"og:image",content:e.imageUrl}),u.jsx("meta",{name:"keywords",content:h.Z.seo.keyword}),u.jsx("meta",{property:"og:keywords",content:h.Z.seo.keyword}),u.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),u.jsx(t,{}),u.jsx(v,{result:e})]})};async function k(e){let{id:t}=e.query;if(!t)return{notFound:!0};let s=await fetch(h.Z.api.url+"results/"+t,{method:"GET"});return{props:{result:await s.json()}}}let R=(0,o.l)(r,"default"),q=(0,o.l)(r,"getStaticProps"),S=(0,o.l)(r,"getStaticPaths"),w=(0,o.l)(r,"getServerSideProps"),b=(0,o.l)(r,"config"),z=(0,o.l)(r,"reportWebVitals"),P=(0,o.l)(r,"unstable_getStaticProps"),N=(0,o.l)(r,"unstable_getStaticPaths"),T=(0,o.l)(r,"unstable_getStaticParams"),I=(0,o.l)(r,"unstable_getServerProps"),L=(0,o.l)(r,"unstable_getServerSideProps"),M=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/tarot-1/result",pathname:"/tarot-1/result",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:r})},6675:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(997);s(6689);let i=require("next-share"),a=({url:e,title:t})=>(0,r.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(i.FacebookShareButton,{url:e,quote:t,children:r.jsx(i.FacebookIcon,{size:32,round:!0})}),r.jsx(i.TwitterShareButton,{url:e,title:t,children:r.jsx(i.TwitterIcon,{size:32,round:!0})}),r.jsx(i.LineShareButton,{url:e,children:r.jsx(i.LineIcon,{size:32,round:!0})}),r.jsx(i.WhatsappShareButton,{url:e,title:t,children:r.jsx(i.WhatsappIcon,{size:32,round:!0})})]})},9907:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1",car_hora:"https://app.mamoodi.com/car-hora",tel_hora:"https://app.mamoodi.com/tel-hora"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"}}},5974:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(997),i=s(9907);s(3716);let a=require("react-ga4");function o({Component:e,pageProps:t}){return r.jsx(e,{...t})}s.n(a)().initialize([{trackingId:i.Z.ga_4}])},7645:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997),i=s(6859);function a(){return(0,r.jsxs)(i.Html,{lang:"en",children:[(0,r.jsxs)(i.Head,{children:[r.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.jsx("link",{rel:"manifest",href:"/manifest.json"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),r.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),r.jsx("meta",{name:"theme-color",content:"#ffffff"}),r.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),r.jsx("link",{rel:"icon",href:"/favicon.ico"}),r.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),r.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),r.jsx("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",crossOrigin:"anonymous"})]}),(0,r.jsxs)("body",{style:{margin:"0px"},children:[r.jsx(i.Main,{}),r.jsx(i.NextScript,{})]})]})}},3716:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},19:e=>{"use strict";e.exports=require("@mui/material/Box")},3819:e=>{"use strict";e.exports=require("@mui/material/Button")},7898:e=>{"use strict";e.exports=require("@mui/material/Drawer")},4192:e=>{"use strict";e.exports=require("@mui/material/List")},834:e=>{"use strict";e.exports=require("@mui/material/ListItem")},1011:e=>{"use strict";e.exports=require("@mui/material/ListItemButton")},8315:e=>{"use strict";e.exports=require("@mui/material/ListItemText")},7986:e=>{"use strict";e.exports=require("@mui/system")},9464:e=>{"use strict";e.exports=require("@mui/system/DefaultPropsProvider")},9590:e=>{"use strict";e.exports=require("@mui/system/colorManipulator")},9826:e=>{"use strict";e.exports=require("@mui/system/createStyled")},1573:e=>{"use strict";e.exports=require("@mui/system/createTheme")},2681:e=>{"use strict";e.exports=require("@mui/system/styleFunctionSx")},3543:e=>{"use strict";e.exports=require("@mui/utils/capitalize")},3559:e=>{"use strict";e.exports=require("@mui/utils/composeClasses")},697:e=>{"use strict";e.exports=require("@mui/utils/deepmerge")},2450:e=>{"use strict";e.exports=require("@mui/utils/elementTypeAcceptingRef")},1416:e=>{"use strict";e.exports=require("@mui/utils/formatMuiErrorMessage")},1392:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClass")},2558:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClasses")},515:e=>{"use strict";e.exports=require("@mui/utils/refType")},1459:e=>{"use strict";e.exports=require("@mui/utils/resolveProps")},6440:e=>{"use strict";e.exports=require("@mui/utils/useEventCallback")},1954:e=>{"use strict";e.exports=require("@mui/utils/useForkRef")},3157:e=>{"use strict";e.exports=require("@mui/utils/useIsFocusVisible")},9790:e=>{"use strict";e.exports=require("@mui/utils/useTimeout")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},4466:e=>{"use strict";e.exports=require("react-transition-group")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,736],()=>s(5928));module.exports=r})();