(()=>{var e={};e.id=515,e.ids=[515,888,660],e.modules={3391:e=>{e.exports={body:"car-hora-result_body__WaXC9",bodyCustomMain:"car-hora-result_bodyCustomMain__P60_D",carHoraResult:"car-hora-result_carHoraResult__tANz_",carHoraResultItem:"car-hora-result_carHoraResultItem__omhwj",carHoraResultShareControl:"car-hora-result_carHoraResultShareControl__o5jgL",carHoraResultCardIDControl:"car-hora-result_carHoraResultCardIDControl__9K_ZV",carHoraResultCardText:"car-hora-result_carHoraResultCardText__38ssM",carHoraResultSumControl:"car-hora-result_carHoraResultSumControl__aZKCh",carHoraResultSumText:"car-hora-result_carHoraResultSumText__cdzmD",carHoraResultItemHeaderDesc:"car-hora-result_carHoraResultItemHeaderDesc__7h0S_",carHoraResultItemHeader:"car-hora-result_carHoraResultItemHeader__bQoep",carHoraResultCardControl:"car-hora-result_carHoraResultCardControl__EJN11",carHoraResultCardTitle:"car-hora-result_carHoraResultCardTitle__62eBG",carHoraResultCardDesc:"car-hora-result_carHoraResultCardDesc__7qvf3",carHoraResultStartControl:"car-hora-result_carHoraResultStartControl__rYm_b",carHoraResultStartButton:"car-hora-result_carHoraResultStartButton__EIboh"}},4913:(e,r,t)=>{"use strict";t.r(r),t.d(r,{config:()=>w,default:()=>k,getServerSideProps:()=>q,getStaticPaths:()=>v,getStaticProps:()=>R,reportWebVitals:()=>b,routeModule:()=>Z,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>N,unstable_getStaticParams:()=>T,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>z});var s={};t.r(s),t.d(s,{default:()=>S,getServerSideProps:()=>C});var a=t(7093),o=t(5244),i=t(1323),l=t(7645),n=t(5974),c=t(997),u=t(5152),p=t.n(u),x=t(6689),m=t(968),d=t.n(m),h=t(9907),g=t(3391),f=t.n(g),j=t(6675),_=t(3890),y=t.n(_);let H=({result:e})=>{let[r,t]=(0,x.useState)();(0,x.useEffect)(()=>{e&&t(e)},[e]),(0,x.useEffect)(()=>{r&&s(r.id)},[r]);let s=async e=>{try{let r=await fetch(`${h.Z.api.url}results/${e}/increment-view`,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!r.ok)throw Error("Failed to increment view count");let t=await r.json();console.log("New view count:",t.newViewCount)}catch(e){console.error("Error incrementing view count:",e)}};return c.jsx(c.Fragment,{children:r&&c.jsx("div",{className:f().bodyCustomMain,children:c.jsx("div",{className:f().carHoraResult,children:(0,c.jsxs)("div",{className:f().carHoraResultItem,children:[c.jsx("span",{className:f().carHoraResultItemHeaderDesc,children:"ผลลัพธ์จากเลขทะเบียน "}),c.jsx("div",{className:f().carHoraResultCardIDControl,children:c.jsx("span",{className:f().carHoraResultCardText,children:r.result.car_id})}),c.jsx("div",{className:f().carHoraResultSumControl,children:c.jsx("h1",{className:f().carHoraResultSumText,children:r.result.sum_car_id})}),(0,c.jsxs)("div",{className:f().carHoraResultCardControl,children:[c.jsx("span",{className:f().carHoraResultCardTitle,children:"คำอธิบาย"}),c.jsx("span",{className:f().carHoraResultCardDesc,children:r.result.explanation})]}),c.jsx("div",{className:f().carHoraResultShareControl,children:c.jsx(j.Z,{url:h.Z.url+"car-hora/result?id="+r.id,title:r.result.title})}),c.jsx("div",{className:f().carHoraResultStartControl,children:c.jsx(y(),{className:f().carHoraResultStartButton,onClick:()=>{window.open(h.Z.app_url.car_hora,"_self")},children:"เริ่มตรวจทะเบียนรถ"})})]})})})})},S=({result:e})=>{let r=p()(()=>t.e(682).then(t.bind(t,6682)),{loadableGenerated:{modules:["pages\\car-hora\\result\\index.tsx -> ../../../components/header/header"]}});return p()(()=>t.e(913).then(t.bind(t,1913)),{loadableGenerated:{modules:["pages\\car-hora\\result\\index.tsx -> ../../../components/footer/footer"]}}),(0,x.useEffect)(()=>{e&&console.log(e)},[e]),(0,c.jsxs)("div",{children:[(0,c.jsxs)(d(),{children:[c.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),c.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),c.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),c.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),c.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),c.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),c.jsx("link",{rel:"manifest",href:"/manifest.json"}),c.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),c.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),c.jsx("meta",{name:"theme-color",content:"#ffffff"}),c.jsx("title",{children:e.result.title}),c.jsx("meta",{name:"description",content:e.result.explanation}),c.jsx("meta",{name:"og:description",content:e.result.explanation}),c.jsx("meta",{property:"og:url",content:"https://mamoodi.com/car-hora/result?id="+e.id}),c.jsx("meta",{property:"og:type",content:"website"}),c.jsx("meta",{property:"og:title",content:e.result.title}),c.jsx("meta",{property:"og:image",content:e.imageUrl}),c.jsx("meta",{name:"keywords",content:h.Z.seo.keyword}),c.jsx("meta",{property:"og:keywords",content:h.Z.seo.keyword}),c.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),c.jsx(r,{}),c.jsx(H,{result:e})]})};async function C(e){let{id:r}=e.query;if(!r)return{notFound:!0};let t=await fetch(h.Z.api.url+"results/"+r,{method:"GET"});return{props:{result:await t.json()}}}let k=(0,i.l)(s,"default"),R=(0,i.l)(s,"getStaticProps"),v=(0,i.l)(s,"getStaticPaths"),q=(0,i.l)(s,"getServerSideProps"),w=(0,i.l)(s,"config"),b=(0,i.l)(s,"reportWebVitals"),z=(0,i.l)(s,"unstable_getStaticProps"),P=(0,i.l)(s,"unstable_getStaticPaths"),T=(0,i.l)(s,"unstable_getStaticParams"),I=(0,i.l)(s,"unstable_getServerProps"),N=(0,i.l)(s,"unstable_getServerSideProps"),Z=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/car-hora/result",pathname:"/car-hora/result",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:s})},6675:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(997);t(6689);let a=require("next-share"),o=({url:e,title:r})=>(0,s.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[s.jsx(a.FacebookShareButton,{url:e,quote:r,children:s.jsx(a.FacebookIcon,{size:32,round:!0})}),s.jsx(a.TwitterShareButton,{url:e,title:r,children:s.jsx(a.TwitterIcon,{size:32,round:!0})}),s.jsx(a.LineShareButton,{url:e,children:s.jsx(a.LineIcon,{size:32,round:!0})}),s.jsx(a.WhatsappShareButton,{url:e,title:r,children:s.jsx(a.WhatsappIcon,{size:32,round:!0})})]})},9907:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1",car_hora:"https://app.mamoodi.com/car-hora",tel_hora:"https://app.mamoodi.com/tel-hora",name_hora:"https://app.mamoodi.com/name-hora"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"}}},5974:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(997),a=t(9907);t(3716);let o=require("react-ga4");function i({Component:e,pageProps:r}){return s.jsx(e,{...r})}t.n(o)().initialize([{trackingId:a.Z.ga_4}])},7645:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(997),a=t(6859);function o(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),s.jsx("link",{rel:"manifest",href:"/manifest.json"}),s.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),s.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),s.jsx("meta",{name:"theme-color",content:"#ffffff"}),s.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),s.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),s.jsx("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",crossOrigin:"anonymous"})]}),(0,s.jsxs)("body",{style:{margin:"0px"},children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},3716:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},19:e=>{"use strict";e.exports=require("@mui/material/Box")},3819:e=>{"use strict";e.exports=require("@mui/material/Button")},7898:e=>{"use strict";e.exports=require("@mui/material/Drawer")},4192:e=>{"use strict";e.exports=require("@mui/material/List")},834:e=>{"use strict";e.exports=require("@mui/material/ListItem")},1011:e=>{"use strict";e.exports=require("@mui/material/ListItemButton")},8315:e=>{"use strict";e.exports=require("@mui/material/ListItemText")},7986:e=>{"use strict";e.exports=require("@mui/system")},9464:e=>{"use strict";e.exports=require("@mui/system/DefaultPropsProvider")},9590:e=>{"use strict";e.exports=require("@mui/system/colorManipulator")},9826:e=>{"use strict";e.exports=require("@mui/system/createStyled")},1573:e=>{"use strict";e.exports=require("@mui/system/createTheme")},2681:e=>{"use strict";e.exports=require("@mui/system/styleFunctionSx")},3543:e=>{"use strict";e.exports=require("@mui/utils/capitalize")},3559:e=>{"use strict";e.exports=require("@mui/utils/composeClasses")},697:e=>{"use strict";e.exports=require("@mui/utils/deepmerge")},2450:e=>{"use strict";e.exports=require("@mui/utils/elementTypeAcceptingRef")},1416:e=>{"use strict";e.exports=require("@mui/utils/formatMuiErrorMessage")},1392:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClass")},2558:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClasses")},515:e=>{"use strict";e.exports=require("@mui/utils/refType")},1459:e=>{"use strict";e.exports=require("@mui/utils/resolveProps")},6440:e=>{"use strict";e.exports=require("@mui/utils/useEventCallback")},1954:e=>{"use strict";e.exports=require("@mui/utils/useForkRef")},3157:e=>{"use strict";e.exports=require("@mui/utils/useIsFocusVisible")},9790:e=>{"use strict";e.exports=require("@mui/utils/useTimeout")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},4466:e=>{"use strict";e.exports=require("react-transition-group")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[859,736],()=>t(4913));module.exports=s})();