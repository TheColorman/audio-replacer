(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},5075:function(e,t,r){"use strict";r.r(t);var n=r(4051),s=r.n(n),l=r(5893),o=r(7294),a=r(9008),i=r(214),c=r.n(i),u=r(5857),d=r(2351),m=r(9104),x=r(5045),h=r(1163);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t,r,n,s,l,o){try{var a=e[l](o),i=a.value}catch(c){return void r(c)}a.done?t(i):Promise.resolve(i).then(n,s)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,l=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(i){a=!0,s=i}finally{try{o||null==r.return||r.return()}finally{if(a)throw s}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("h1",{className:c().title,children:"Audio Video Mixer"})})},b=function(e){var t=e.fileName;return(0,l.jsxs)("div",{className:"rounded-lg border-2 border-gray-300 flex justify-around items-center p-2 hover:bg-black/5 text-center max-w-xs",title:t,children:[(0,l.jsx)("img",{src:"/icons/".concat(t.split(".").pop(),".svg"),alt:"File icon",width:48,height:48}),(0,l.jsx)("p",{className:"text-sm font-mono",children:t.split(".").shift().length>25?"".concat(t.split(".").shift().slice(0,25),"..."):t.split(".").shift()})]})};t.default=function(){var e=v(o.useState(0),2),t=e[0],r=e[1],n=v(o.useState(null),2),i=n[0],f=n[1],w=v(o.useState(null),2),g=w[0],N=w[1],y=(0,h.useRouter)(),_=function(){r((function(e){return e+1}))},k=function(){r((function(e){return e-1}))},C=function(){y.reload()},S=function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];f(t)}},L=function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];N(t)}},P=function(){return(0,l.jsxs)("div",{className:"min-w-fit flex mt-8 items-center",children:[i&&(0,l.jsx)(b,{fileName:i.name}),g&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"text-8xl",children:"+"}),(0,l.jsx)(b,{fileName:g.name})]})]})},F=function(){var e=v(o.useState(null),2),t=e[0],r=e[1],n=Boolean(t);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:c().description,children:["Add or replace audio on a video. ",(0,l.jsx)("br",{}),"Get started by uploading a video or inserting a link."]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("label",{htmlFor:"upload-video",className:"".concat(c().buttonPrimary," hover:cursor-pointer inline-flex h-full"),children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})})}),"Upload video"]}),(0,l.jsx)("input",{className:"absolute w-0 h-0",id:"upload-video",type:"file",accept:"video/*",onChange:S})]}),(0,l.jsx)("div",{className:"mx-2 flex items-center text-center",children:(0,l.jsx)("p",{className:"text-lg text-slate-500",children:"or"})}),(0,l.jsxs)("div",{className:"flex flex-col relative",children:[(0,l.jsx)("div",{className:c().urlInput,children:(0,l.jsx)("input",{className:"focus:outline-none min-w-[20rem] cursor-not-allowed",id:"url-input",type:"url",placeholder:" Enter URL (e.g. https://youtu.be/...)",disabled:!0,title:"URLs are currently unavailable"})}),(0,l.jsxs)("p",{className:"absolute -bottom-4 left-1 text-xs text-blue-600 hover:underline hover:cursor-pointer",children:[(0,l.jsx)("a",{"aria-describedby":"links-popover",onClick:function(e){r(e.currentTarget)},children:"Supported URLs"}),(0,l.jsx)(m.Z,{children:(0,l.jsx)(u.ZP,{id:"links-popover",open:n,anchorEl:t,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,l.jsxs)("div",{className:"p-3 w-72",children:[(0,l.jsx)("p",{className:"text-base",children:"The following URLs are supported:"}),(0,l.jsxs)("p",{className:c().code+" text-sm",children:["youtu.be/ ",(0,l.jsx)("br",{}),"youtube.com/ ",(0,l.jsx)("br",{})]}),(0,l.jsx)("strong",{children:"NOTE: URLs are currently unavailable due to YouTube request policies."})]})})})]})]})]}),(0,l.jsxs)("div",{className:"flex mt-4 w-full space-x-4",children:[(0,l.jsx)("button",{className:"".concat(c().buttonSecondaryDisabled," w-full"),children:"Back"}),i?(0,l.jsx)("button",{className:"".concat(c().buttonPrimary," w-full"),onClick:_,children:"Continue"}):(0,l.jsx)("button",{className:"".concat(c().buttonPrimaryDisabled," w-full"),title:"Please choose a video",children:"Continue"})]})]}),(0,l.jsx)(P,{})]})},E=function(){var e=v(o.useState(null),2),t=e[0],r=e[1],n=Boolean(t);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:c().description,children:["Upload a video, audio or insert a link. ",(0,l.jsx)("br",{}),"This will be used as the audio source."]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("label",{htmlFor:"upload-video",className:"".concat(c().buttonPrimary," hover:cursor-pointer inline-flex h-full"),children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})})}),"Upload video/audio"]}),(0,l.jsx)("input",{className:"absolute w-0 h-0",id:"upload-video",type:"file",accept:"video/*, audio/*",onChange:L})]}),(0,l.jsx)("div",{className:"mx-2 flex items-center text-center",children:(0,l.jsx)("p",{className:"text-lg text-slate-500",children:"or"})}),(0,l.jsxs)("div",{className:"flex flex-col relative",children:[(0,l.jsx)("div",{className:c().urlInput,children:(0,l.jsx)("input",{className:"focus:outline-none min-w-[20rem] cursor-not-allowed",id:"url-input",type:"url",placeholder:" Enter URL (e.g. https://youtu.be/...)",disabled:!0,title:"URLs are currently unavailable"})}),(0,l.jsxs)("p",{className:"absolute -bottom-4 left-1 text-xs text-blue-600 hover:underline hover:cursor-pointer",children:[(0,l.jsx)("a",{"aria-describedby":"links-popover",onClick:function(e){r(e.currentTarget)},children:"Supported URLs"}),(0,l.jsx)(m.Z,{children:(0,l.jsx)(u.ZP,{id:"links-popover",open:n,anchorEl:t,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,l.jsxs)("div",{className:"p-3 pb-0",children:[(0,l.jsx)("p",{className:"text-base",children:"The following URLs are supported:"}),(0,l.jsxs)("p",{className:c().code+" text-sm",children:["youtu.be/ ",(0,l.jsx)("br",{}),"youtube.com/"]})]})})})]})]})]}),(0,l.jsxs)("div",{className:"flex mt-6 w-full space-x-4",children:[(0,l.jsx)("button",{className:"".concat(c().buttonSecondary," w-full"),onClick:k,children:"Back"}),g?(0,l.jsx)("button",{className:"".concat(c().buttonPrimary," w-full"),onClick:_,children:"Continue"}):(0,l.jsx)("button",{className:"".concat(c().buttonPrimaryDisabled," w-full"),title:"Please choose some audio",children:"Continue"})]})]}),(0,l.jsx)(P,{})]})},T=function(){var e=v(o.useState(0),2),t=e[0],r=e[1],n=v(o.useState(""),2),a=n[0],u=n[1],h=v(o.useState(""),2),f=h[0],j=h[1],b=v(o.useState(!1),2),w=b[0],N=b[1],y=v(o.useState(!1),2),_=y[0],k=y[1],S=function(){var e,t=(e=s().mark((function e(){var t,n,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==i&&null!==g){e.next=2;break}return e.abrupt("return","error");case 2:return t=(0,x.createFFmpeg)({corePath:"/ffmpeg/ffmpeg-core.js",log:!0}),u("Loading ffmpeg..."),e.next=6,t.load();case 6:return t.setProgress((function(e){var t=e.ratio;r(t>1?t:100*t)})),u("Writing video input..."),e.t0=t,e.next=11,(0,x.fetchFile)(i);case 11:return e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","video.mp4",e.t1),u("Writing audio input..."),e.t2=t,e.next=17,(0,x.fetchFile)(g);case 17:return e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","audio.mp3",e.t3),u("Transmuxing..."),e.next=22,t.run("-i","video.mp4","-i","audio.mp3","-c:v","copy","-map","0:v:0","-map","1:a:0","-shortest","-fflags","+shortest","-max_interleave_delta","100M","output.mp4");case 22:u("Exporting video..."),n=t.FS("readFile","output.mp4"),l=URL.createObjectURL(new Blob([n.buffer],{type:"video/mp4"})),r(100),N(!0),u("Done!"),j(l),setTimeout((function(){k(!0),t.exit()}),1e3);case 30:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var l=e.apply(t,r);function o(e){p(l,n,s,o,a,"next",e)}function a(e){p(l,n,s,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){w||S()}),[]),_?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().description,children:"Your video is ready!"}),(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("video",{controls:!0,className:"max-w-md",children:(0,l.jsx)("source",{src:f,type:"video/mp4"})}),(0,l.jsxs)("div",{className:"flex mt-4 w-full space-x-4",children:[(0,l.jsxs)("button",{className:"".concat(c().buttonSecondary," w-full"),children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),"Copy URL"]}),(0,l.jsxs)("a",{className:"".concat(c().buttonPrimary," w-full"),rel:"noreferrer",target:"_blank",href:f,download:"output.mp4",children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})}),"Download video"]})]}),(0,l.jsx)("div",{className:"flex mt-12 w-full",children:(0,l.jsx)("button",{className:"".concat(c().buttonPrimary," w-full"),onClick:C,children:"Create a new video"})})]}),(0,l.jsx)(P,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().description,children:"Creating your video..."}),(0,l.jsxs)("div",{className:"w-1/2 flex flex-col",children:[(0,l.jsx)("div",{className:"text-lg",children:a}),(0,l.jsx)(m.Z,{children:(0,l.jsx)(d.Z,{variant:"determinate",value:t})})]})]})},H=[(0,l.jsx)(F,{},0),(0,l.jsx)(E,{},1),(0,l.jsx)(T,{},2)];return(0,l.jsxs)("div",{className:c().container,children:[(0,l.jsxs)(a.default,{children:[(0,l.jsx)("title",{children:"Video Audio Mixer"}),(0,l.jsx)("meta",{name:"description",content:"Easily replace or add sound on a video"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon_io/favicon.ico"})]}),(0,l.jsxs)("main",{className:c().main,children:[(0,l.jsx)(j,{}),H[t]]}),(0,l.jsxs)("footer",{className:c().footer,children:[(0,l.jsx)("a",{href:"https://colorman.me",target:"_blank",rel:"noopener noreferrer",children:"Created by Colorman"}),(0,l.jsxs)("a",{href:"https://github.com/TheColorman/audio-replacer",target:"_blank",rel:"noopener noreferrer",children:["Powered by",(0,l.jsx)("svg",{className:"mx-1 ml-2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub Pages"," ",(0,l.jsx)("span",{className:c().logo})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",buttonPrimary:"Home_buttonPrimary__TbjMj",buttonPrimaryDisabled:"Home_buttonPrimaryDisabled__ETG3H",buttonSecondary:"Home_buttonSecondary__VpPmW",buttonSecondaryDisabled:"Home_buttonSecondaryDisabled__EidmQ",urlInput:"Home_urlInput__bkR1M"}}},function(e){e.O(0,[350,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);