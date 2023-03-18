import{_ as d}from"./WalletSynchronizing.d188367c.js";import{_ as h,r as n,o as c,c as u,a as e,d as a,w as o,b as t,e as s}from"./app.09e56f9a.js";const f="/WalletOpen.png",w={},p=e("h1",{id:"wallet-load",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wallet-load","aria-hidden":"true"},"#"),t(" Wallet Load")],-1),b={class:"table-of-contents"},_=e("h2",{id:"loading-wallet-step-by-step",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loading-wallet-step-by-step","aria-hidden":"true"},"#"),t(" Loading wallet step-by-step")],-1),y=e("p",null,"To load a wallet and start the synchonization process, you need to open your wallet by typing in the password. The first time synchronization of your wallet might take some time depending on the size of its history.",-1),k=e("h3",{id:"wallet-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wallet-list","aria-hidden":"true"},"#"),t(" Wallet list")],-1),m=e("code",null,"Wallet list",-1),g=s('<p>Click the wallet you want to view, type in the password and press <code>Open</code>.</p><p><img src="'+f+'" alt="Type your password to open the wallet" title="Type your password to open the wallet"></p><h2 id="synchronization" tabindex="-1"><a class="header-anchor" href="#synchronization" aria-hidden="true">#</a> Synchronization</h2><h3 id="filter-download" tabindex="-1"><a class="header-anchor" href="#filter-download" aria-hidden="true">#</a> Filter download</h3>',4),W={href:"https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki",target:"_blank",rel:"noopener noreferrer"},x=s('<p><img src="'+d+'" alt="Wallet is synchronizing itself with the Bitcoin network" title="Wallet is synchronizing itself with the Bitcoin network"></p><h3 id="filter-scanning" tabindex="-1"><a class="header-anchor" href="#filter-scanning" aria-hidden="true">#</a> Filter scanning</h3><p>When you load a wallet, it checks if the generated addresses within the gap limit hit against a block filter. Most filters do not hit, and then the wallet is certain that this block does not contain a transaction of yours so it will not download it. If a transaction of yours is in a block, then the corresponding filter will always be hit, and the wallet will know this is a relevant block for you. There can be a small chance for a false positive where the filter matches, but the block actually does not contain a transaction.</p><h3 id="block-download" tabindex="-1"><a class="header-anchor" href="#block-download" aria-hidden="true">#</a> Block download</h3>',4);function v(B,z){const l=n("router-link"),i=n("RouterLink"),r=n("ExternalLinkIcon");return c(),u("div",null,[p,e("nav",b,[e("ul",null,[e("li",null,[a(l,{to:"#loading-wallet-step-by-step"},{default:o(()=>[t("Loading wallet step-by-step")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#wallet-list"},{default:o(()=>[t("Wallet list")]),_:1})])])]),e("li",null,[a(l,{to:"#synchronization"},{default:o(()=>[t("Synchronization")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#filter-download"},{default:o(()=>[t("Filter download")]),_:1})]),e("li",null,[a(l,{to:"#filter-scanning"},{default:o(()=>[t("Filter scanning")]),_:1})]),e("li",null,[a(l,{to:"#block-download"},{default:o(()=>[t("Block download")]),_:1})])])])])]),_,y,k,e("p",null,[t("On the left side of Wasabi Wallet is the "),m,t(", where you see an alphabetically sorted list of all the previously "),a(i,{to:"/using-wasabi/WalletGeneration.html"},{default:o(()=>[t("generated")]),_:1}),t(" wallets.")]),g,e("p",null,[t("As soon as you start Wasabi, it connects to the backend server with a new Tor identity and requests the "),e("a",W,[t("BIP 158 block filters"),a(r)]),t(". At the first start, this can take a while because all filters need to be downloaded, but for the subsequent starts, this is faster as only the most recent filters are requested.")]),x,e("p",null,[t("When a block filter hits, either a true match or a false positive, then this block is important for you, so the wallet will download it. If you have "),a(i,{to:"/using-wasabi/BitcoinFullNode.html"},{default:o(()=>[t("a Bitcoin full node connected")]),_:1}),t(", then it will fetch the verified block locally. If not, then Wasabi will connect to a random Bitcoin P2P node with a new Tor identity, request only this block for download, and then disconnect. In this step, your Wasabi behaves like any other full node, and cannot be differentiated.")])])}const I=h(w,[["render",v],["__file","WalletLoad.html.vue"]]);export{I as default};
