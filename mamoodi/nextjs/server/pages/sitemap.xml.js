(()=>{var e={};e.id=164,e.ids=[164,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},2473:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>x,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>m,reportWebVitals:()=>f,routeModule:()=>_,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>j});var o={};s.r(o),s.d(o,{default:()=>u,getServerSideProps:()=>p});var a=s(7093),i=s(5244),r=s(1323),n=s(7645),l=s(4238),c=s(9907);async function p({res:e}){let t=await ({fetchBlogPosts:async()=>fetch(c.Z.api.url+"articles",{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),fetchResults:async()=>fetch(c.Z.api.url+"results",{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))}).fetchBlogPosts();if(t){let s=t.articles,o=[];s.map(e=>{o.push(e.id)});let a=`<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
       <!-- Add the static URLs manually -->
       <url>
          <loc>https://mamoodi.com</loc>
          <lastmod>2024-08-23</lastmod> 
          <changefreq>daily</changefreq>
          <priority>1.0</priority> 
       </url>
       <url>
         <loc>https://mamoodi.com/articles</loc>
         <lastmod>2024-03-25</lastmod> 
         <changefreq>daily</changefreq>
         <priority>1.0</priority> 
       </url>
       ${o.map(e=>`
            <url>
                <loc>https://mamoodi.com/articles/${e}</loc>
                <lastmod>2024-08-23</lastmod> 
                <changefreq>daily</changefreq>
                <priority>1.0</priority> 
            </url>
          `).join("")}
      
     </urlset>
   `;return e.setHeader("Content-Type","text/xml"),e.write(a),e.end(),{props:{}}}}function u(){}let d=(0,r.l)(o,"default"),m=(0,r.l)(o,"getStaticProps"),g=(0,r.l)(o,"getStaticPaths"),h=(0,r.l)(o,"getServerSideProps"),x=(0,r.l)(o,"config"),f=(0,r.l)(o,"reportWebVitals"),j=(0,r.l)(o,"unstable_getStaticProps"),P=(0,r.l)(o,"unstable_getStaticPaths"),y=(0,r.l)(o,"unstable_getStaticParams"),S=(0,r.l)(o,"unstable_getServerProps"),b=(0,r.l)(o,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:o})},9907:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});let o={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",ads:{ads_1_id:"9145157698"},seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1",car_hora:"https://app.mamoodi.com/car-hora",tel_hora:"https://app.mamoodi.com/tel-hora",name_hora:"https://app.mamoodi.com/name-hora"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"},api_lotto:{base_url:"https://lotto.api.rayriffy.com",list:"/list",latest:"/latest",detail:"/lotto"}}},4238:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var o=s(997),a=s(9907);s(6689);let i=require("react-cookie-consent");var r=s.n(i);let n=()=>(0,o.jsxs)(r(),{location:"bottom",buttonText:"I understand",cookieName:"gdprConsent",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150,children:["This website uses cookies to enhance the user experience."," ",o.jsx("span",{style:{fontSize:"10px"},children:"This is required to comply with GDPR."})]});s(3716);let l=require("react-ga4");function c({Component:e,pageProps:t}){return(0,o.jsxs)(o.Fragment,{children:[o.jsx(n,{}),o.jsx(e,{...t})]})}s.n(l)().initialize([{trackingId:a.Z.ga_4}])},7645:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var o=s(997),a=s(6859),i=s(4298),r=s.n(i);function n(){return(0,o.jsxs)(a.Html,{lang:"en",children:[(0,o.jsxs)(a.Head,{children:[o.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),o.jsx("link",{rel:"manifest",href:"/manifest.json"}),o.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),o.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),o.jsx("meta",{name:"theme-color",content:"#ffffff"}),o.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),o.jsx("link",{rel:"icon",href:"/favicon.ico"}),o.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),o.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),o.jsx(r(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",strategy:"lazyOnload",crossOrigin:"anonymous"})]}),(0,o.jsxs)("body",{style:{margin:"0px"},children:[o.jsx(a.Main,{}),o.jsx(a.NextScript,{})]})]})}},3716:()=>{},5244:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[803],()=>s(2473));module.exports=o})();