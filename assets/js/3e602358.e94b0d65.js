"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},i="Methods",o={unversionedId:"ethereum/rpc-api/methods",id:"ethereum/rpc-api/methods",title:"Methods",description:"eth_sendTransaction",source:"@site/docs/ethereum/rpc-api/methods.md",sourceDirName:"ethereum/rpc-api",slug:"/ethereum/rpc-api/methods",permalink:"/ethereum/rpc-api/methods",draft:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/rpc-api/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ethereum/rpc-api/overview"},next:{title:"Overview",permalink:"/solana"}},c={},l=[{value:"<code>eth_sendTransaction</code>",id:"eth_sendtransaction",level:2},{value:"<code>eth_signTransaction</code>",id:"eth_signtransaction",level:2},{value:"<code>eth_sendRawTransaction</code>",id:"eth_sendrawtransaction",level:2},{value:"<code>eth_subscribe</code>",id:"eth_subscribe",level:2},{value:"<code>eth_unsubscribe</code>",id:"eth_unsubscribe",level:2},{value:"<code>wallet_addEthereumChain</code>",id:"wallet_addethereumchain",level:2},{value:"<code>wallet_switchEthereumChain</code>",id:"wallet_switchethereumchain",level:2},{value:"<code>wallet_watchAsset</code>",id:"wallet_watchasset",level:2},{value:"<code>eth_getEncryptionPublicKey</code> (deprecated)",id:"eth_getencryptionpublickey-deprecated",level:2},{value:"Example:",id:"example",level:3},{value:"Setup a new wallet:",id:"setup-a-new-wallet",level:4},{value:"Get the public key:",id:"get-the-public-key",level:4},{value:"Run these commands in a test directory:\u2028",id:"run-these-commands-in-a-test-directory",level:4},{value:"In UI:",id:"in-ui",level:4},{value:"Issuing the decrypt command",id:"issuing-the-decrypt-command",level:4},{value:"<code>eth_decrypt</code> (deprecated)",id:"eth_decrypt-deprecated",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("h2",{id:"eth_sendtransaction"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_sendTransaction")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction"},"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction")),(0,a.kt)("h2",{id:"eth_signtransaction"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_signTransaction")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction"},"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction")),(0,a.kt)("h2",{id:"eth_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_sendRawTransaction")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction"},"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction")),(0,a.kt)("h2",{id:"eth_subscribe"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_subscribe")),(0,a.kt)("p",null,"Allows for a new subscription to be created. When a subscription is created, ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," events will be fired with new block information."),(0,a.kt)("p",null,"Unlike the ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/tutorials/using-websockets/#eth-subscribe"},"documentation here"),", you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_subscribe")," even with an HTTPS RPC URLs configured in Brave Wallet.\nOnly ",(0,a.kt)("inlineCode",{parentName:"p"},"newHeads")," is currently supported."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/tutorials/using-websockets/#eth-subscribe"},"https://ethereum.org/en/developers/tutorials/using-websockets/#eth-subscribe")),(0,a.kt)("h2",{id:"eth_unsubscribe"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_unsubscribe")),(0,a.kt)("p",null,"Allows for a previous subscription to be removed.\n",(0,a.kt)("inlineCode",{parentName:"p"},"message")," events will stop being fired after a subscription is unsubscribed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/tutorials/using-websockets/#eth-unsubscribe"},"https://ethereum.org/en/developers/tutorials/using-websockets/#eth-unsubscribe")),(0,a.kt)("h2",{id:"wallet_addethereumchain"},(0,a.kt)("inlineCode",{parentName:"h2"},"wallet_addEthereumChain")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface AddEthereumChainParameter {\n  chainId: string;\n  blockExplorerUrls?: string[];\n  chainName?: string;\n  iconUrls?: string[];\n  nativeCurrency?: {\n    name: string;\n    symbol: string;\n    decimals: number;\n  };\n  rpcUrls?: string[];\n}\n")),(0,a.kt)("h2",{id:"wallet_switchethereumchain"},(0,a.kt)("inlineCode",{parentName:"h2"},"wallet_switchEthereumChain")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface SwitchEthereumChainParameter {\n  chainId: string;\n}\n")),(0,a.kt)("h2",{id:"wallet_watchasset"},(0,a.kt)("inlineCode",{parentName:"h2"},"wallet_watchAsset")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface WatchAssetParameters {\n  type: string; // The asset's interface, e.g. 'ERC20'\n  options: {\n    address: string; // The hexadecimal Ethereum address of the token contract\n    symbol?: string; // A ticker symbol or shorthand, up to 5 alphanumerical characters\n    decimals?: number; // The number of asset decimals\n    image?: string; // A string url of the token logo\n  };\n}\n")),(0,a.kt)("h2",{id:"eth_getencryptionpublickey-deprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_getEncryptionPublicKey")," (deprecated)"),(0,a.kt)("p",null,"Requests that the user shares their public encryption key. Returns a Promise that resolve to the public encryption key, or rejects if the user denied the request."),(0,a.kt)("p",null,"The public key is computed from entropy associated with the specified user account, using the nacl (opens new window)implementation of the X25519_XSalsa20_Poly1305 algorithm."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("h4",{id:"setup-a-new-wallet"},"Setup a new wallet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Seed:\nhome various adjust motion canvas stand combine gravity cluster behave despair dove\n\nPrivate key:\n72d388592fb23300948c9eaf2dfaa60b8c3297903f2ea698d489d7c12116e2e6\n\nAddress is: \n0xB884707865B85990e6a140a12C3e5f5D24FE5736\n")),(0,a.kt)("h4",{id:"get-the-public-key"},"Get the public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var x= await window.ethereum.request({method:'eth_getEncryptionPublicKey', params:['0xB884707865B85990e6a140a12C3e5f5D24FE5736']})\n")),(0,a.kt)("p",null,"Check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2028",(0,a.kt)("inlineCode",{parentName:"p"},"'eui9/fqCHT7aSUkKK9eooQFnOCD9COK9Mi1ZtOxIj2A='"))),(0,a.kt)("h4",{id:"run-these-commands-in-a-test-directory"},"Run these commands in a test directory:\u2028"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @metamask/eth-sig-util\nnpm install ethereumjs-util\n\nAnd then run this script:\u2028\n```js\nconst ethUtil = require('ethereumjs-util');\nconst sigUtil  = require('@metamask/eth-sig-util');\n\nconst encryptedMessage = ethUtil.bufferToHex(\n  Buffer.from(\n    JSON.stringify(\n      sigUtil.encrypt({\n        publicKey: 'eui9/fqCHT7aSUkKK9eooQFnOCD9COK9Mi1ZtOxIj2A=',\n        data: 'Ode to Anthony!',\n        version: 'x25519-xsalsa20-poly1305',\n      })\n    ),\n    'utf8'\n  )\n);\n")),(0,a.kt)("h4",{id:"in-ui"},"In UI:"),(0,a.kt)("p",null,"If you then check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptedMessage")," you'll see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'0x7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d'\n")),(0,a.kt)("p",null,"You can get back at the string with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"JSON.parse(Buffer.from('7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d', 'hex'))\n")),(0,a.kt)("p",null,"Which gives:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  version: 'x25519-xsalsa20-poly1305',\n  nonce: '2forT3nCPBRye9DeM1QSuWN8WvGZVpXN',\n  ephemPublicKey: 'mjgeR52JCGDl9336uQwN29qkbYR0WLKCginBPDFtyXY=',\n  ciphertext: 'e3xpKp2vGmpd9ecOjRJ6xltVr0Feo+Pm/C/gTMCyDg=='\n}\n")),(0,a.kt)("h4",{id:"issuing-the-decrypt-command"},"Issuing the decrypt command"),(0,a.kt)("p",null,"Finally run the decrypt command with your encrypted string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const encryptedMessage = '0x7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d'\nethereum\n  .request({\n    method: 'eth_decrypt',\n    params: [encryptedMessage, '0xB884707865B85990e6a140a12C3e5f5D24FE5736']\n  })\n  .then((decryptedMessage) =>\n    console.log('The decrypted message is:', decryptedMessage)\n  )\n  .catch((error) => console.log(error.message));\n")),(0,a.kt)("p",null,"It will popup the UI to decrypt the message for the user. And if you press approve it will send it back to the Dapp. Check the JS console in dev tools to see."),(0,a.kt)("h2",{id:"eth_decrypt-deprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"eth_decrypt")," (deprecated)"),(0,a.kt)("p",null,"This method requests that Brave Wallet decrypts the given encrypted message."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A serialized JSON object which is base64 encoded and contains amongst other things the encrypted message and the seed"),(0,a.kt)("li",{parentName:"ul"},"The ethereum account that can decrypt the message as the second.")),(0,a.kt)("p",null,"If the user doesn't approve, then the operation results in an error (user rejected).\nThe user can peak at the data at any time to see what the encrypted blob contains before decrypting it to the dapp.\nThe decrypted message is only returned to the Dapp if the decrypt request is approved.\nSince this is not trusted content, when decrypting the message, Brave will sanitize first, then parse the JSON object. "),(0,a.kt)("p",null,"The message must have been encrypted using the public encryption key of the given Ethereum address.  See also ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_getEncryptionPublicKey"),".\nThis method returns a Promise that resolves to the decrypted message, or rejects if the decryption attempt fails."))}d.isMDXComponent=!0}}]);