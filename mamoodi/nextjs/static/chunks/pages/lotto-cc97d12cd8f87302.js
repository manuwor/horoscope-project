(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{9502:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lotto",function(){return o(8170)}])},8170:function(t,e,o){"use strict";o.r(e),o.d(e,{__N_SSP:function(){return _},default:function(){return m}});var l=o(5893),r=o(5152),n=o.n(r),s=o(7294),a=o(9008),i=o.n(a),c=o(2109),u=o.n(c);o(1377);var h=o(9888),p=o(1157),d=o(3875),C=t=>{let{resultList:e}=t,[o,r]=(0,s.useState)(),[n,a]=(0,s.useState)(""),[i,c]=(0,s.useState)(null),[C,_]=(0,s.useState)("");(0,s.useEffect)(()=>{e&&r(e)},[e]);let m=t=>{c(null),console.log(t),a(t)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:u().lottoControl,children:(0,l.jsx)("div",{className:u().lottoItemControl,children:(0,l.jsxs)("div",{className:u().lottoCurrentControl,children:[(0,l.jsx)("div",{className:u().lottoCurrentHeaderControl,children:(0,l.jsx)("span",{className:u().lottoCurrentHeaderLink,onClick:()=>{window.open("/lotto/past","_self")},children:"ตรวจรางวัลย้อนหลัง"})}),(0,l.jsx)("span",{className:u().lottoCurrentHeader,children:"ตรวจสลากกินแบ่งรัฐบาล"}),o&&(0,l.jsxs)("div",{className:u().lottoFlexControl,children:[(0,l.jsxs)("span",{className:u().lottoCurrentHeader,children:["งวดประจำวันที่ ",o.response.date]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(h.Z,{className:u().lottoFlexControl,children:(0,l.jsxs)(h.Z.Group,{controlId:"formLottoNumber",className:u().lottoCurrentFormGroup,children:[(0,l.jsx)(h.Z.Label,{className:u().lottoCurrentInputLabel,children:"กรอกหมายเลขสลากของท่าน (6 หลัก)"}),(0,l.jsxs)("div",{className:u().lottoCurrentSearchControl,children:[(0,l.jsx)(d.Z,{type:"text",placeholder:"เช่น 095867",value:n,onChange:t=>m(t.target.value),inputProps:{maxLength:6},fullWidth:!0,variant:"outlined"}),(0,l.jsx)(p.Z,{className:u().lottCurrentSearchButton,onClick:()=>{if(6!==n.length){_("กรุณากรอกหมายเลข 6 หลัก"),c("");return}let t=!1;if(o){let e=[];o.response.prizes.forEach(o=>{console.log(o),o.number.includes(n)&&(console.log(n),e.push({name:o.name,reward:o.reward}),t=!0)}),t||o.response.runningNumbers.forEach(o=>{(o.number.includes(n.slice(-3))||o.number.includes(n.slice(-2)))&&(e.push({name:o.name,reward:o.reward}),t=!0)}),c(e),console.log(e),t?_(""):(_("ไม่พบหมายเลขของท่านในรางวัล"),c(null))}},variant:"contained",color:"primary",children:"ตรวจหวย"})]})]})}),C&&(0,l.jsxs)("div",{className:u().lottoCurrentFailedControl,children:["กรุณากรอกหมายเลข 6 หลัก"!==C&&(0,l.jsx)("span",{className:u().lottoCurrentFailedSubHeader,children:"เสียใจด้วย"}),(0,l.jsx)("span",{className:u().lottoCurrentFailedHeader,children:C})]}),i&&(0,l.jsxs)("div",{className:u().lottoCurrentSuccessControl,children:[(0,l.jsx)("span",{className:u().lottoCurrentSuccessSubHeader,children:"ยินดีด้วย"}),(0,l.jsx)("span",{className:u().lottoCurrentSuccessHeader,children:i.name}),(0,l.jsx)("span",{className:u().lottoCurrentSuccessSubHeader,children:i&&i.length>0&&(0,l.jsxs)("div",{className:u().lottoCurrentSuccessHeaderControl,children:[(0,l.jsx)("span",{className:u().lottoCurrentSuccessHeader,children:n}),"หมายเลขของท่านถูกรางวัล",i.map((t,e)=>(0,l.jsxs)("span",{children:["- ",t.name,": ",Number(t.reward).toLocaleString()," บาท"]},e))]})})]})]}),(0,l.jsxs)("div",{className:u().lottoCurrentShowAllControl,children:[(0,l.jsx)("span",{className:u().lottoCurrentShowAllTitle,children:"รางวัลที่ 1"}),(0,l.jsx)("span",{className:u().lottoCurrentShowAllValue1,children:o.response.prizes[0].number}),(0,l.jsx)("div",{className:u().lottoCurrentShowAllDivider}),(0,l.jsx)("div",{className:u().lottoCurrentShowAllRunningControl,children:o.response.runningNumbers&&o.response.runningNumbers.map((t,e)=>(0,l.jsxs)("div",{className:u().lottoCurrentShowAllRunningItem,children:[(0,l.jsx)("span",{className:u().lottoCurrentShowAllTitle,children:t.name}),t.number.map((t,e)=>(0,l.jsx)("span",{className:u().lottoCurrentShowAllValue1,children:t},e))]},e))}),(0,l.jsx)("div",{className:u().lottoCurrentShowAllDivider}),o.response.prizes&&o.response.prizes.filter(t=>"prizeFirst"!==t.id).map((t,e)=>(0,l.jsxs)("div",{className:u().lottoCurrentShowAllOtherControl,children:[(0,l.jsx)("span",{className:u().lottoCurrentShowAllOtherTitle,children:t.name}),(0,l.jsxs)("span",{className:u().lottoCurrentShowAllOtherSubTitle,children:[t.amount," รางวัล รางวัลละ ",Number(t.reward).toLocaleString()," บาท"]}),(0,l.jsx)("div",{className:u().lottoCurrentShowAllOtherValueControl,children:t.number.map((t,e)=>(0,l.jsx)("span",{className:u().lottoCurrentShowAllOtherValue,children:t},e))}),(0,l.jsx)("div",{className:u().lottoCurrentShowAllDivider})]},e))]})]})]})})})})},_=!0,m=t=>{let{result:e}=t,r=n()(()=>Promise.all([o.e(756),o.e(976),o.e(48),o.e(436),o.e(945),o.e(642)]).then(o.bind(o,6682)),{loadableGenerated:{webpack:()=>[6682]}});return n()(()=>Promise.all([o.e(299),o.e(913)]).then(o.bind(o,1913)),{loadableGenerated:{webpack:()=>[1913]}}),(0,s.useEffect)(()=>{e&&console.log(e)},[e]),(0,l.jsxs)("div",{children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,l.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,l.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,l.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,l.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,l.jsx)("title",{children:"ตรวจสลากกินแบ่งรัฐบาลงวดล่าสุด | เช็คผลหวยงวดล่าสุดที่นี่"}),(0,l.jsx)("meta",{name:"description",content:"ตรวจผลสลากกินแบ่งรัฐบาลงวดล่าสุดได้ที่นี่ รู้ผลทันใจ อัปเดตทุกงวด พร้อมข้อมูลรางวัลที่ 1 และรางวัลอื่นๆ ครบถ้วน ไม่พลาดทุกการตรวจหวย"}),(0,l.jsx)("meta",{name:"og:description",content:"ตรวจผลสลากกินแบ่งรัฐบาลงวดล่าสุดได้ที่นี่ รู้ผลทันใจ อัปเดตทุกงวด พร้อมข้อมูลรางวัลที่ 1 และรางวัลอื่นๆ ครบถ้วน ไม่พลาดทุกการตรวจหวย"}),(0,l.jsx)("meta",{property:"og:url",content:"https://mamoodi.com/articles/"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:title",content:"ตรวจสลากกินแบ่งรัฐบาลงวดล่าสุด | เช็คผลหวยงวดล่าสุดที่นี่"}),(0,l.jsx)("meta",{property:"og:image",content:"https://mamoodi.com/assets/images/share-cover.jpg"}),(0,l.jsx)("meta",{name:"keywords",content:"ตรวจสลากกินแบ่งงวดล่าสุด, ผลสลากกินแบ่งรัฐบาลล่าสุด, ตรวจหวยล่าสุด, ผลหวยล่าสุด, ผลสลากกินแบ่งวันนี้, ตรวจลอตเตอรี่งวดนี้"}),(0,l.jsx)("meta",{property:"og:keywords",content:"ตรวจสลากกินแบ่งงวดล่าสุด, ผลสลากกินแบ่งรัฐบาลล่าสุด, ตรวจหวยล่าสุด, ผลหวยล่าสุด, ผลสลากกินแบ่งวันนี้, ตรวจลอตเตอรี่งวดนี้"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(r,{}),(0,l.jsx)(C,{resultList:e})]})}},1377:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var l=o(7066),r=o(9907);function n(){let t={headers:{"Content-Type":"application/json"}};return{getLottoPage:async()=>l.Z.get(r.Z.api_lotto.base_url+r.Z.api_lotto.list+"/1",t).then(t=>t).catch(t=>console.log(t)),getLottoCurrent:async e=>l.Z.get(r.Z.api_lotto.base_url+r.Z.api_lotto.detail+"/"+e,t).then(t=>t).catch(t=>console.log(t))}}},2109:function(t){t.exports={body:"lotto_body__mFtYu",bodyCustomMain:"lotto_bodyCustomMain__hmfO4",lottoControl:"lotto_lottoControl__wdYZD",lottoItemControl:"lotto_lottoItemControl__GXr0r",lottoCurrentControl:"lotto_lottoCurrentControl__f_b8V",lottoFlexControl:"lotto_lottoFlexControl__zsD0U",lottoCurrentHeaderControl:"lotto_lottoCurrentHeaderControl__wQefD",lottoCurrentHeader:"lotto_lottoCurrentHeader__7_LnQ",lottoCurrentHeaderLink:"lotto_lottoCurrentHeaderLink__omFW_",lottoCurrentFormGroup:"lotto_lottoCurrentFormGroup__74qG3",lottoCurrentInputLabel:"lotto_lottoCurrentInputLabel__m76Ay",lottoCurrentSearchControl:"lotto_lottoCurrentSearchControl__q__AT",lottCurrentSearchButton:"lotto_lottCurrentSearchButton__htnJh",lottoCurrentSuccessControl:"lotto_lottoCurrentSuccessControl__itA_l",lottoCurrentSuccessSubHeader:"lotto_lottoCurrentSuccessSubHeader__ooyvU",lottoCurrentSuccessHeaderControl:"lotto_lottoCurrentSuccessHeaderControl__Ka_cz",lottoCurrentSuccessHeader:"lotto_lottoCurrentSuccessHeader__OL9pA",lottoCurrentFailedControl:"lotto_lottoCurrentFailedControl__RonCC",lottoCurrentFailedSubHeader:"lotto_lottoCurrentFailedSubHeader__39Ks9",lottoCurrentFailedHeader:"lotto_lottoCurrentFailedHeader__FbxQN",lottoCurrentShowAllControl:"lotto_lottoCurrentShowAllControl___weUi",lottoCurrentShowAllTitle:"lotto_lottoCurrentShowAllTitle__RG2xD",lottoCurrentShowAllValue1:"lotto_lottoCurrentShowAllValue1__ah9yQ",lottoCurrentShowAllDivider:"lotto_lottoCurrentShowAllDivider__hbwYE",lottoCurrentShowAllRunningControl:"lotto_lottoCurrentShowAllRunningControl__GeYpk",lottoCurrentShowAllRunningItem:"lotto_lottoCurrentShowAllRunningItem__SvW3J",lottoCurrentShowAllOtherControl:"lotto_lottoCurrentShowAllOtherControl__ry89b",lottoCurrentShowAllOtherTitle:"lotto_lottoCurrentShowAllOtherTitle__QApAo",lottoCurrentShowAllOtherSubTitle:"lotto_lottoCurrentShowAllOtherSubTitle__NOUX5",lottoCurrentShowAllOtherValueControl:"lotto_lottoCurrentShowAllOtherValueControl__wHm4R",lottoCurrentShowAllOtherValue:"lotto_lottoCurrentShowAllOtherValue__ckzH1"}}},function(t){t.O(0,[794,218,314,888,774,179],function(){return t(t.s=9502)}),_N_E=t.O()}]);