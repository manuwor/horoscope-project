(()=>{var e={};e.id=398,e.ids=[398,888,660],e.modules={8474:e=>{e.exports={body:"name-hora-result_body__h1EYC",bodyCustomMain:"name-hora-result_bodyCustomMain__H65OR",nameHoraResult:"name-hora-result_nameHoraResult__Q3tve",nameHoraResultItem:"name-hora-result_nameHoraResultItem__sz_mD",nameHoraResultShareControl:"name-hora-result_nameHoraResultShareControl__8aRDE",nameHoraResultCardImg:"name-hora-result_nameHoraResultCardImg__tbH4l",nameHoraResultCardIDControl:"name-hora-result_nameHoraResultCardIDControl__MnyCy",nameHoraResultCardText:"name-hora-result_nameHoraResultCardText__8Kr_B",nameHoraResultSumControl:"name-hora-result_nameHoraResultSumControl__CglR2",nameHoraResultSumText:"name-hora-result_nameHoraResultSumText__r4onT",nameHoraResultItemHeaderDesc:"name-hora-result_nameHoraResultItemHeaderDesc__xqeMY",nameHoraResultItemHeader:"name-hora-result_nameHoraResultItemHeader__Wdc5R",nameHoraResultCardControl:"name-hora-result_nameHoraResultCardControl__wkih3",nameHoraResultCardTitle:"name-hora-result_nameHoraResultCardTitle__TPoEi",nameHoraResultCardDesc:"name-hora-result_nameHoraResultCardDesc__F6Hfl",nameHoraResultStartControl:"name-hora-result_nameHoraResultStartControl__np4Oz",nameHoraResultStartButton:"name-hora-result_nameHoraResultStartButton___3ZRu"}},2331:e=>{e.exports={body:"share-button_body__4hG5E",bodyCustomMain:"share-button_bodyCustomMain__g8nlz",shareButton:"share-button_shareButton__WZ8gk",shareIcon:"share-button_shareIcon__dMOit"}},8754:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>p,getServerSideProps:()=>d,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>g,routeModule:()=>v,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var a=r(7093),o=r(5244),i=r(1323),n=r(7645),l=r(4238),u=r(9022),c=e([u]);u=(c.then?(await c)():c)[0];let p=(0,i.l)(u,"default"),m=(0,i.l)(u,"getStaticProps"),x=(0,i.l)(u,"getStaticPaths"),d=(0,i.l)(u,"getServerSideProps"),h=(0,i.l)(u,"config"),g=(0,i.l)(u,"reportWebVitals"),f=(0,i.l)(u,"unstable_getStaticProps"),j=(0,i.l)(u,"unstable_getStaticPaths"),_=(0,i.l)(u,"unstable_getStaticParams"),y=(0,i.l)(u,"unstable_getServerProps"),b=(0,i.l)(u,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/name-hora/result",pathname:"/name-hora/result",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:u});s()}catch(e){s(e)}})},5213:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>h});var a=r(997),o=r(6689),i=r(8474),n=r.n(i),l=r(6675),u=r(9907),c=r(3890),p=r.n(c),m=r(9217),x=r(5053),d=e([m]);m=(d.then?(await d)():d)[0];let h=({result:e})=>{let[t,r]=(0,o.useState)(),[s,i]=(0,o.useState)(null);(0,o.useEffect)(()=>{e&&r(e)},[e]),(0,o.useEffect)(()=>{t&&c(t.id)},[t]);let c=async e=>{try{let t=await fetch(`${u.Z.api.url}results/${e}/increment-view`,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Failed to increment view count");let r=await t.json();console.log("New view count:",r.newViewCount)}catch(e){console.error("Error incrementing view count:",e)}};return(0,o.useEffect)(()=>{},[]),a.jsx(a.Fragment,{children:t&&a.jsx("div",{className:n().bodyCustomMain,children:a.jsx("div",{className:n().nameHoraResult,children:(0,a.jsxs)("div",{className:n().nameHoraResultItem,children:[a.jsx("div",{className:"d-flex",children:a.jsx(m.Z,{url:u.Z.url+"name-hora/result?id="+t.id,title:t.result.title})}),t.imageUrl?a.jsx("img",{src:t.imageUrl,className:n().nameHoraResultCardImg}):a.jsx("div",{className:n().nameHoraResultCardIDControl,children:a.jsx("span",{className:n().nameHoraResultCardText,children:t.result.name_id})}),(0,a.jsxs)("div",{className:n().nameHoraResultCardControl,children:[a.jsx("span",{className:n().nameHoraResultCardTitle,children:"คำอธิบาย"}),a.jsx("span",{className:n().nameHoraResultCardDesc,children:t.result.explanation.replaceAll("<br>","")})]}),a.jsx("div",{className:n().nameHoraResultShareControl,children:a.jsx(l.Z,{url:u.Z.url+"name-hora/result?id="+t.id,title:t.result.title})}),a.jsx("div",{className:n().nameHoraResultStartControl,children:a.jsx(p(),{className:n().nameHoraResultStartButton,onClick:()=>{window.open(u.Z.app_url.name_hora,"_self")},children:"เริ่มดูเช็คดวงด้วยชื่อ"})}),a.jsx("div",{children:a.jsx(x.Z,{"data-ad-slot":u.Z.ads.ads_1_id,"data-ad-format":"auto","data-full-width-responsive":"true"})})]})})})})};s()}catch(e){s(e)}})},6675:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(997);r(6689);let a=require("next-share"),o=({url:e,title:t})=>(0,s.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[s.jsx(a.FacebookShareButton,{url:e,quote:t,children:s.jsx(a.FacebookIcon,{size:32,round:!0})}),s.jsx(a.TwitterShareButton,{url:e,title:t,children:s.jsx(a.TwitterIcon,{size:32,round:!0})}),s.jsx(a.LineShareButton,{url:e,children:s.jsx(a.LineIcon,{size:32,round:!0})}),s.jsx(a.WhatsappShareButton,{url:e,title:t,children:s.jsx(a.WhatsappIcon,{size:32,round:!0})})]})},9907:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",ads:{ads_1_id:"9145157698"},seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1",car_hora:"https://app.mamoodi.com/car-hora",tel_hora:"https://app.mamoodi.com/tel-hora",name_hora:"https://app.mamoodi.com/name-hora"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"},api_lotto:{base_url:"https://lotto.api.rayriffy.com",list:"/list",latest:"/latest",detail:"/lotto"}}},4238:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(997),a=r(9907);r(6689);let o=require("react-cookie-consent");var i=r.n(o);let n=()=>(0,s.jsxs)(i(),{location:"bottom",buttonText:"I understand",cookieName:"gdprConsent",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150,children:["This website uses cookies to enhance the user experience."," ",s.jsx("span",{style:{fontSize:"10px"},children:"This is required to comply with GDPR."})]});r(3716);let l=require("react-ga4");function u({Component:e,pageProps:t}){return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n,{}),s.jsx(e,{...t})]})}r.n(l)().initialize([{trackingId:a.Z.ga_4}])},7645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(997),a=r(6859),o=r(4298),i=r.n(o);function n(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),s.jsx("link",{rel:"manifest",href:"/manifest.json"}),s.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),s.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),s.jsx("meta",{name:"theme-color",content:"#ffffff"}),s.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),s.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),s.jsx(i(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",strategy:"lazyOnload",crossOrigin:"anonymous"})]}),(0,s.jsxs)("body",{style:{margin:"0px"},children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},9022:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d,getServerSideProps:()=>x});var a=r(997),o=r(5152),i=r.n(o),n=r(6689),l=r(968),u=r.n(l),c=r(9907),p=r(5213),m=e([p]);p=(m.then?(await m)():m)[0];let d=({result:e})=>{let t=i()(()=>r.e(682).then(r.bind(r,6682)),{loadableGenerated:{modules:["pages/name-hora/result/index.tsx -> ../../../components/header/header"]}});return i()(()=>r.e(913).then(r.bind(r,1913)),{loadableGenerated:{modules:["pages/name-hora/result/index.tsx -> ../../../components/footer/footer"]}}),(0,n.useEffect)(()=>{e&&console.log(e)},[e]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(u(),{children:[a.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx("link",{rel:"manifest",href:"/manifest.json"}),a.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),a.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),a.jsx("meta",{name:"theme-color",content:"#ffffff"}),a.jsx("title",{children:e.result.title}),a.jsx("meta",{name:"description",content:e.result.explanation}),a.jsx("meta",{name:"og:description",content:e.result.explanation}),a.jsx("meta",{property:"og:url",content:"https://mamoodi.com/name-hora/result?id="+e.id}),a.jsx("meta",{property:"og:type",content:"website"}),a.jsx("meta",{property:"og:title",content:e.result.title}),a.jsx("meta",{property:"og:image",content:e.imageUrl}),a.jsx("meta",{name:"keywords",content:c.Z.seo.keyword}),a.jsx("meta",{property:"og:keywords",content:c.Z.seo.keyword}),a.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),a.jsx(t,{}),a.jsx(p.Z,{result:e})]})};async function x(e){let{id:t}=e.query;if(!t)return{notFound:!0};let r=await fetch(c.Z.api.url+"results/"+t,{method:"GET"});return{props:{result:await r.json()}}}s()}catch(e){s(e)}})},5053:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(997),a=r(6689);let o=e=>((0,a.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.log(e)}},[]),s.jsx("ins",{className:"adsbygoogle adbanner-customize",style:{display:"block",overflow:"hidden"},"data-ad-client":"ca-pub-7304132375043084",...e}))},9217:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>c});var a=r(997);r(6689);var o=r(2331),i=r.n(o),n=r(7197),l=r(4563),u=e([l]);l=(u.then?(await u)():u)[0];let c=({title:e,url:t})=>{let r=async()=>{if(navigator.share)try{await navigator.share({title:e,url:t}),console.log("Successfully shared")}catch(e){console.error("Error sharing:",e)}else alert("คัดลอกลิงก์สำเร็จ"),navigator.clipboard.writeText(t)};return a.jsx(a.Fragment,{children:(0,a.jsxs)("button",{onClick:r,className:i().shareButton,children:["แชร์ ",a.jsx(n.FontAwesomeIcon,{icon:l.faShare,className:i().shareIcon})]})})};s()}catch(e){s(e)}})},3716:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},19:e=>{"use strict";e.exports=require("@mui/material/Box")},3819:e=>{"use strict";e.exports=require("@mui/material/Button")},7898:e=>{"use strict";e.exports=require("@mui/material/Drawer")},4192:e=>{"use strict";e.exports=require("@mui/material/List")},834:e=>{"use strict";e.exports=require("@mui/material/ListItem")},1011:e=>{"use strict";e.exports=require("@mui/material/ListItemButton")},8315:e=>{"use strict";e.exports=require("@mui/material/ListItemText")},7986:e=>{"use strict";e.exports=require("@mui/system")},9464:e=>{"use strict";e.exports=require("@mui/system/DefaultPropsProvider")},9590:e=>{"use strict";e.exports=require("@mui/system/colorManipulator")},9826:e=>{"use strict";e.exports=require("@mui/system/createStyled")},1573:e=>{"use strict";e.exports=require("@mui/system/createTheme")},2681:e=>{"use strict";e.exports=require("@mui/system/styleFunctionSx")},3543:e=>{"use strict";e.exports=require("@mui/utils/capitalize")},3559:e=>{"use strict";e.exports=require("@mui/utils/composeClasses")},697:e=>{"use strict";e.exports=require("@mui/utils/deepmerge")},2450:e=>{"use strict";e.exports=require("@mui/utils/elementTypeAcceptingRef")},1416:e=>{"use strict";e.exports=require("@mui/utils/formatMuiErrorMessage")},1392:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClass")},2558:e=>{"use strict";e.exports=require("@mui/utils/generateUtilityClasses")},515:e=>{"use strict";e.exports=require("@mui/utils/refType")},1459:e=>{"use strict";e.exports=require("@mui/utils/resolveProps")},6440:e=>{"use strict";e.exports=require("@mui/utils/useEventCallback")},1954:e=>{"use strict";e.exports=require("@mui/utils/useForkRef")},3157:e=>{"use strict";e.exports=require("@mui/utils/useIsFocusVisible")},9790:e=>{"use strict";e.exports=require("@mui/utils/useTimeout")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},4466:e=>{"use strict";e.exports=require("react-transition-group")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[803,26,711,890],()=>r(8754));module.exports=s})();