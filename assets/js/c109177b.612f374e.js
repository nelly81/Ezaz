"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},c="Adding EVM compatible chains",s={unversionedId:"ethereum/use-cases/adding-evm-compatible-chains",id:"ethereum/use-cases/adding-evm-compatible-chains",title:"Adding EVM compatible chains",description:"Websites can request that alternate chains be added by using the wallet_addEthereumChain method.",source:"@site/docs/ethereum/use-cases/adding-evm-compatible-chains.md",sourceDirName:"ethereum/use-cases",slug:"/ethereum/use-cases/adding-evm-compatible-chains",permalink:"/ethereum/use-cases/adding-evm-compatible-chains",draft:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/use-cases/adding-evm-compatible-chains.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Signing data",permalink:"/ethereum/use-cases/signing-data"},next:{title:"Switching to EVM compatible chains",permalink:"/ethereum/use-cases/switching-evm-compatible-chains"}},o={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-evm-compatible-chains"},"Adding EVM compatible chains"),(0,a.kt)("p",null,"Websites can request that alternate chains be added by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function addEthereumChain() {\n  const params = [{\n    chainId: '0x38',\n    chainName: 'Binance1 Smart Chain',\n    nativeCurrency: {\n      name: 'BNB',\n      symbol: 'BNB',\n      decimals: 18\n    },\n    rpcUrls: ['https://bsc-dataseed.binance.org/'],\n    iconUrls: [],\n    blockExplorerUrls: ['https://bscscan.com/'],\n  }]\n  return await window.ethereum.request({ method: 'wallet_addEthereumChain', params })\n}\nconsole.log(await addEthereumChain());\n")),(0,a.kt)("p",null,"After a chain is added, a switch request is shown to the user to switch to the new chain."))}d.isMDXComponent=!0}}]);