"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Brave Wallet detection",l={unversionedId:"ethereum/wallet-detection",id:"ethereum/wallet-detection",title:"Brave Wallet detection",description:"We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask.",source:"@site/docs/ethereum/wallet-detection.md",sourceDirName:"ethereum",slug:"/ethereum/wallet-detection",permalink:"/ethereum/wallet-detection",draft:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/wallet-detection.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom chains",permalink:"/ethereum/custom-chains"},next:{title:"Local development environment",permalink:"/ethereum/use-cases/local-development-environment"}},c={},s=[{value:"Compatibility with MetaMask",id:"compatibility-with-metamask",level:2},{value:"Brave Wallet Provider injection &amp; detection via library",id:"brave-wallet-provider-injection--detection-via-library",level:2},{value:"Synchronous detection",id:"synchronous-detection",level:2},{value:"Asynchronous detection using <code>web3_clientVersion</code>",id:"asynchronous-detection-using-web3_clientversion",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"brave-wallet-detection"},"Brave Wallet detection"),(0,a.kt)("p",null,"We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Web3Modal/web3modal"},"Web3Modal")," is a useful library for handling this for you."),(0,a.kt)("h2",{id:"compatibility-with-metamask"},"Compatibility with MetaMask"),(0,a.kt)("p",null,"Since Brave Wallet aims to be compatible with MetaMask's exposed API, we set ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum.isMetaMask")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"brave-wallet-provider-injection--detection-via-library"},"Brave Wallet Provider injection & detection via library"),(0,a.kt)("p",null,"Check out these open-source libraries for off-the-shelf solutions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Web3Modal/web3modal"},"Web3Modal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/blocknative/web3-onboard"},"Web3-Onboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmm/wagmi"},"wagmi"))),(0,a.kt)("h2",{id:"synchronous-detection"},"Synchronous detection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isBraveWallet = window.ethereum.isBraveWallet\nconsole.log('Brave Wallet: ', isBraveWallet)\n")),(0,a.kt)("h2",{id:"asynchronous-detection-using-web3_clientversion"},"Asynchronous detection using ",(0,a.kt)("inlineCode",{parentName:"h2"},"web3_clientVersion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isBraveWallet = await window.ethereum.request({\n    method: 'web3_clientVersion'\n  }).then((clientVersion) => {\n    return clientVersion.split('/')[0] === 'BraveWallet'\n  })\nconsole.log('Brave Wallet: ', isBraveWallet)\n")),(0,a.kt)("p",null,"Or:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isBraveWallet = await window.ethereum.request({\n    method: 'web3_clientVersion'\n  }).then((clientVersion) => {\n    return window.ethereum.isMetaMask && clientVersion.split('/')[0] !== 'MetaMask'\n  })\nconsole.log('Brave Wallet: ', isBraveWallet)\n")))}p.isMDXComponent=!0}}]);