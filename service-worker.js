if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>d(e,r),b={module:{uri:r},exports:s,require:n};i[r]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-48c34d16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/03/31/apple/index.html",revision:"496ac030eb8aed479b8b6a53ae1a65ec"},{url:"2024/03/31/hello-world/index.html",revision:"597983c408191a6895d18cf50594632b"},{url:"2024/03/31/homekit/index.html",revision:"f8d7ef6d1fcf359ea8bfd9c19b112234"},{url:"2024/03/31/ios-dev-note/index.html",revision:"afb82324cc13b791f05615b87286e1ec"},{url:"2024/03/31/life/index.html",revision:"ae91038003a2372b59200977cd8f84e1"},{url:"404.html",revision:"8549388bc1bea82cd888d2e6ea31342d"},{url:"about/index.html",revision:"b9dbdf4cbec03279eb5921c058be8b2f"},{url:"album/index.html",revision:"5032a9e924f3b71cec8814623c70ea0d"},{url:"anzhiyu/random.js",revision:"a0e9dc253c5ef7b8a47856972386a580"},{url:"archives/2024/03/index.html",revision:"96619f314ebd39ba5e3e89f44a42b309"},{url:"archives/2024/index.html",revision:"5dd3771e6f5ef22497741574a2a5e2fe"},{url:"archives/index.html",revision:"4f09d6672294fe8d66d97817b78a46d8"},{url:"categories/Apple/index.html",revision:"bed6bde09774abca35ac6ba7f398ea42"},{url:"categories/HomeKit/index.html",revision:"aa71af402cf360f32e9a9051483feed7"},{url:"categories/index.html",revision:"cbd282d991fe423f33d8c452a0f75432"},{url:"categories/iOS开发/index.html",revision:"f2dcb5ebf759b66a416024df96cac4b9"},{url:"categories/生活/index.html",revision:"cb35d43bf4c8108ebef22e10ef6af185"},{url:"categories/随笔/index.html",revision:"7d5917ee38f261b0d67a09e1c4d05688"},{url:"comments/index.html",revision:"cc0ae13aacb5514fc2b83a626eb19546"},{url:"css/index.css",revision:"35fdd36deb8ec93ec3c516911da8c89b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"9a2d3b1cc1909b2fa5b8edd499a69f64"},{url:"fcircle/index.html",revision:"b5f0a3e1b6bc9b2924e2d851bdfe78ec"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"c865dcc1614063cd985d79d9b8e96c5a"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"a58a3129576f8bb42f2ee1b116536caa"},{url:"img/siteicon/32.png",revision:"28be9de0b615fad2b1adfc559ba469dc"},{url:"img/siteicon/apple-icon-180.png",revision:"5bfb1d8ebf17baf5ee27880d821b72ec"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"efb97dc5c51c4ae0b8a8dd3d89600a32"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"c865dcc1614063cd985d79d9b8e96c5a"},{url:"index.html",revision:"ced7d3faf547c76ce82871f7c95ad68f"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"music/index.html",revision:"8e8d2b5f4208cf8b941992f9aadcd123"},{url:"shot-by-iphone/index.html",revision:"cbf2b2aa10df09fcb6ae0bcaa9d59b69"},{url:"tags/Apple/index.html",revision:"d0db525858d961d6e3d19b0613e30e12"},{url:"tags/HomeKit/index.html",revision:"d7f97c06f78af6dd2c4fd50ce1cc719c"},{url:"tags/index.html",revision:"1af480f2f86f989fa5adc9179f00013c"},{url:"tags/iOS开发/index.html",revision:"1f3ee98d4258c11c9c2c2172f5c8f11a"},{url:"tags/生活/index.html",revision:"1cbe28a3c0b938ed93bd07195945f9c4"},{url:"tags/随笔/index.html",revision:"100151c52248fd462f6eb4e4554023c9"}],{})}));
//# sourceMappingURL=service-worker.js.map
