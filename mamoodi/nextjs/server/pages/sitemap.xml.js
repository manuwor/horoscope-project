(()=>{var e={};e.id=164,e.ids=[164,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},2473:(e,t,i)=>{"use strict";i.r(t),i.d(t,{config:()=>f,default:()=>g,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var s={};i.r(s),i.d(s,{default:()=>u,getServerSideProps:()=>p});var a=i(7093),n=i(5244),r=i(1323),o=i(7645),l=i(5974),c=i(9907);async function p({res:e}){let t=await ({fetchBlogPosts:async()=>fetch(c.Z.api.url+"articles",{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))}).fetchBlogPosts();if(t){let i=t.articles,s=[];i.map(e=>{s.push(e.id)});let a=`<?xml version="1.0" encoding="UTF-8"?>
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
       ${s.map(e=>`
            <url>
                <loc>https://mamoodi.com/articles/${e}</loc>
                <lastmod>2024-08-23</lastmod> 
                <changefreq>daily</changefreq>
                <priority>1.0</priority> 
            </url>
          `).join("")}
     </urlset>
   `;return e.setHeader("Content-Type","text/xml"),e.write(a),e.end(),{props:{}}}}function u(){}let g=(0,r.l)(s,"default"),d=(0,r.l)(s,"getStaticProps"),m=(0,r.l)(s,"getStaticPaths"),x=(0,r.l)(s,"getServerSideProps"),f=(0,r.l)(s,"config"),h=(0,r.l)(s,"reportWebVitals"),P=(0,r.l)(s,"unstable_getStaticProps"),j=(0,r.l)(s,"unstable_getStaticPaths"),y=(0,r.l)(s,"unstable_getStaticParams"),S=(0,r.l)(s,"unstable_getServerProps"),b=(0,r.l)(s,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},9907:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});let s={MAX_ATTACHMENT_SIZE:5e6,url:"https://mamoodi.com/",ga_4:"G-Z2MPLK12Y5",seo:{title:"ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",description:"มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",keyword:"ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"},app_url:{lotto:"https://app.mamoodi.com/lotto",tarot1:"https://app.mamoodi.com/tarot-1"},api:{url:"https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"}}},5974:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(997),a=i(9907);i(3716);let n=require("react-ga4");function r({Component:e,pageProps:t}){return s.jsx(e,{...t})}i.n(n)().initialize([{trackingId:a.Z.ga_4}])},7645:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(997),a=i(6859);function n(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),s.jsx("link",{rel:"manifest",href:"/manifest.json"}),s.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),s.jsx("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),s.jsx("meta",{name:"theme-color",content:"#ffffff"}),s.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7304132375043084"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-Z2MPLK12Y5"}),s.jsx("script",{children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2MPLK12Y5');
            `}),s.jsx("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7304132375043084",crossOrigin:"anonymous"})]}),(0,s.jsxs)("body",{style:{margin:"0px"},children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},3716:()=>{},5244:(e,t)=>{"use strict";var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[859],()=>i(2473));module.exports=s})();