(()=>{var e={};e.id=101,e.ids=[101,888,660],e.modules={4222:e=>{e.exports={body:"tel-hora-result_body__1s1R5",bodyCustomMain:"tel-hora-result_bodyCustomMain__UvZzT",telHoraResult:"tel-hora-result_telHoraResult__fmeH0",telHoraResultItem:"tel-hora-result_telHoraResultItem__nk_ba",telHoraResultShareControl:"tel-hora-result_telHoraResultShareControl__tvY7s",telHoraResultCardIDControl:"tel-hora-result_telHoraResultCardIDControl__VeTwR",telHoraResultCardText:"tel-hora-result_telHoraResultCardText__dfuOf",telHoraResultSumControl:"tel-hora-result_telHoraResultSumControl__l3CRt",telHoraResultSumText:"tel-hora-result_telHoraResultSumText__YnJT0",telHoraResultItemHeaderDesc:"tel-hora-result_telHoraResultItemHeaderDesc__laIlm",telHoraResultItemHeader:"tel-hora-result_telHoraResultItemHeader__8I9Hn",telHoraResultCardControl:"tel-hora-result_telHoraResultCardControl__Kt7w9",telHoraResultCardTitle:"tel-hora-result_telHoraResultCardTitle__g1oYc",telHoraResultCardDesc:"tel-hora-result_telHoraResultCardDesc__A0YMS",telHoraResultStartControl:"tel-hora-result_telHoraResultStartControl__3m7O4",telHoraResultStartButton:"tel-hora-result_telHoraResultStartButton__nfOkE"}},2387:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>w,default:()=>k,getServerSideProps:()=>q,getStaticPaths:()=>v,getStaticProps:()=>C,reportWebVitals:()=>b,routeModule:()=>M,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>N,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>T,unstable_getStaticProps:()=>z});var s={};r.r(s),r.d(s,{default:()=>S,getServerSideProps:()=>R});var i=r(7093),o=r(5244),l=r(1323),a=r(7645),n=r(5974),u=r(997),c=r(5152),p=r.n(c),x=r(6689),m=r(968),d=r.n(m),h=r(9907),g=r(4222),f=r.n(g),j=r(6675),_=r(3890),y=r.n(_);let H=({result:e})=>{let[t,r]=(0,x.useState)();(0,x.useEffect)(()=>{e&&r(e)},[e]),(0,x.useEffect)(()=>{t&&s(t.id)},[t]);let s=async e=>{try{let t=await fetch(`${h.Z.api.url}results/${e}/increment-view`,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Failed to increment view count");let r=await t.json();console.log("New view count:",r.newViewCount)}catch(e){console.error("Error incrementing view count:",e)}};return u.jsx(u.Fragment,{children:t&&u.jsx("div",{className:f().bodyCustomMain,children:u.jsx("div",{className:f().telHoraResult,children:(0,u.jsxs)("div",{className:f().telHoraResultItem,children:[u.jsx("span",{className:f().telHoraResultItemHeaderDesc,children:"ผลลัพธ์จากเบอร์โทรศัพท์ "}),u.jsx("div",{className:f().telHoraResultCardIDControl,children:u.jsx("span",{className:f().telHoraResultCardText,children:t.result.tel_id})}),u.jsx("div",{className:f().telHoraResultSumControl,children:u.jsx("h1",{className:f().telHoraResultSumText,children:t.result.sum_tel_id})}),(0,u.jsxs)("div",{className:f().telHoraResultCardControl,children:[u.jsx("span",{className:f().telHoraResultCardTitle,children:"คำอธิบาย"}),u.jsx("span",{className:f().telHoraResultCardDesc,children:t.result.explanation})]}),u.jsx("div",{className:f().telHoraResultShareControl,children:u.jsx(j.Z,{url:h.Z.url+"tel-hora/result?id="+t.id,title:t.result.title})}),u.jsx("div",{className:f().telHoraResultStartControl,children:u.jsx(y(),{className:f().telHoraResultStartButton,onClick:()=>{window.open(h.Z.app_url.tel_hora,"_self")},children:"เริ่มดูเช็คดวงด้วยเบอร์"})})]})})})})},S=({result:e})=>{let t=p()(()=>r.e(682).then(r.bind(r,6682)),{loadableGenerated:{modules:["pages/tel-hora/result/index.tsx -> ../../../components/header/header"]}});return p()(()=>r.e(913).then(r.bind(r,1913)),{loadableGenerated:{modules:["pages/tel-hora/result/index.tsx -> ../../../components/footer/footer"]}}),(0,x.useEffect)(()=>{e&&console.log(e)},[e]),(0,u.jsxs)("div",{children:[(0,u.jsxs)(d(),{children:[u.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),u.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),u.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),u.jsx("link",{rel:"manifest",href:"/manifest.json"}),u.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),u.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),u.jsx("meta",{name:"theme-color",content:"#ffffff"}),u.jsx("title",{children:e.result.title}),u.jsx("meta",{name:"description",content:e.result.explanation}),u.jsx("meta",{name:"og:description",content:e.result.explanation}),u.jsx("meta",{property:"og:url",content:"https://mamoodi.com/car-hora/result?id="+e.id}),u.jsx("meta",{property:"og:type",content:"website"}),u.jsx("meta",{property:"og:title",content:e.result.title}),u.jsx("meta",{property:"og:image",content:e.imageUrl}),u.jsx("meta",{name:"keywords",content:h.Z.seo.keyword}),u.jsx("meta",{property:"og:keywords",content:h.Z.seo.keyword}),u.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),u.jsx(t,{}),u.jsx(H,{result:e})]})};async function R(e){let{id:t}=e.query;if(!t)return{notFound:!0};let r=await fetch(h.Z.api.url+"results/"+t,{method:"GET"});return{props:{result:await r.json()}}}let k=(0,l.l)(s,"default"),C=(0,l.l)(s,"getStaticProps"),v=(0,l.l)(s,"getStaticPaths"),q=(0,l.l)(s,"getServerSideProps"),w=(0,l.l)(s,"config"),b=(0,l.l)(s,"reportWebVitals"),z=(0,l.l)(s,"unstable_getStaticProps"),T=(0,l.l)(s,"unstable_getStaticPaths"),P=(0,l.l)(s,"unstable_getStaticParams"),I=(0,l.l)(s,"unstable_getServerProps"),N=(0,l.l)(s,"unstable_getServerSideProps"),M=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/tel-hora/result",pathname:"/tel-hora/result",bundlePath:"",filename:""},components:{App:n.default,Document:a.default},userland:s})},6675:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(997);r(6689);let i=require("next-share"),o=({url:e,title:t})=>(0,s.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[s.jsx(i.FacebookShareButton,{url:e,quote:t,children:s.jsx(i.FacebookIcon,{size:32,round:!0})}),s.jsx(i.TwitterShareButton,{url:e,title:t,children:s.jsx(i.TwitterIcon,{size:32,round:!0})}),s.jsx(i.LineShareButton,{url:e,children:s.jsx(i.LineIcon,{size:32,round:!0})}),s.jsx(i.WhatsappShareButton,{url:e,title:t,children:s.jsx(i.WhatsappIcon,{size:32,round:!0})})]})},9907:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1",car_hora:"https://app.mamoodi.com/car-hora",tel_hora:"https://app.mamoodi.com/tel-hora"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"}}},5974:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(997),i=r(9907);r(3716);let o=require("react-ga4");function l({Component:e,pageProps:t}){return s.jsx(e,{...t})}r.n(o)().initialize([{trackingId:i.Z.ga_4}])},7645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(997),i=r(6859);function o(){return(0,s.jsxs)(i.Html,{lang:"en",children:[(0,s.jsxs)(i.Head,{children:[s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),s.jsx("link",{rel:"manifest",href:"/manifest.json"}),s.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),s.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),s.jsx("meta",{name:"theme-color",content:"#ffffff"}),s.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),s.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),s.jsx("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",crossOrigin:"anonymous"})]}),(0,s.jsxs)("body",{style:{margin:"0px"},children:[s.jsx(i.Main,{}),s.jsx(i.NextScript,{})]})]})}},3716:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},19:e=>{"use strict";e.exports=require("@mui/material/Box")},3819:e=>{"use strict";e.exports=require("@mui/material/Button")},7898:e=>{"use strict";e.exports=require("@mui/material/Drawer")},4192:e=>{"use strict";e.exports=require("@mui/material/List")},834:e=>{"use strict";e.exports=require("@mui/material/ListItem")},1011:e=>{"use strict";e.exports=require("@mui/material/ListItemButton")},8315:e=>{"use strict";e.exports=require("@mui/material/ListItemText")},7986:e=>{"use strict";e.exports=require("@mui/system")},9464:e=>{"use strict";e.exports=require("@mui/system/DefaultPropsProvider")},9590:e=>{"use strict";e.exports=require("@mui/system/colorManipulator")},9826:e=>{"use strict";e.exports=require("@mui/system/createStyled")},1573:e=>{"use strict";e.exports=require("@mui/system/createTheme")},2681:e=>{"use strict";e.exports=require("@mui/system/styleFunctionSx")},3543:e=>{"use strict";e.exports=require("@mui/utils/capitalize")},3559:e=>{"use strict";e.exports=require("@mui/utils/composeClasses")},697:e=>{"use strict";e.exports=require("@mui/utils/deepmerge")},2450:e=>{"use strict";e.exports=require("@mui/utils/elementTypeAcceptingRef")},1416:e=>{"use strict";e.exports=require("@mui/utils/formatMuiErrorMessage")},1392:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClass")},2558:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClasses")},515:e=>{"use strict";e.exports=require("@mui/utils/refType")},1459:e=>{"use strict";e.exports=require("@mui/utils/resolveProps")},6440:e=>{"use strict";e.exports=require("@mui/utils/useEventCallback")},1954:e=>{"use strict";e.exports=require("@mui/utils/useForkRef")},3157:e=>{"use strict";e.exports=require("@mui/utils/useIsFocusVisible")},9790:e=>{"use strict";e.exports=require("@mui/utils/useTimeout")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},4466:e=>{"use strict";e.exports=require("react-transition-group")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[859,736],()=>r(2387));module.exports=s})();