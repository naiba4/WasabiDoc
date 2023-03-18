import{_ as d,r as s,o as c,c as h,a as t,d as a,w as o,b as e,e as l}from"./app.09e56f9a.js";const u={},w=t("h1",{id:"cold-wasabi-hardware-wallet-mode",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cold-wasabi-hardware-wallet-mode","aria-hidden":"true"},"#"),e(" Cold-Wasabi Hardware Wallet Mode")],-1),p={class:"table-of-contents"},b=t("h2",{id:"using-hardware-wallet-step-by-step",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#using-hardware-wallet-step-by-step","aria-hidden":"true"},"#"),e(" Using hardware wallet step-by-step")],-1),m=l("<li>Start your Wasabi Wallet and go to <code>Add Wallet</code>.</li><li>Click on <code>Connect to hardware wallet</code> and then connect the hardware wallet via cable. Alternatively, you can import a Coldcard skeleton file via SD card by using <code>Import Wallet</code> at the <code>Add Wallet</code> dialog.</li><li>Confirm that the detected hardware wallet is correct.</li><li>Click <code>Open</code>, and wait for the wallet to load.</li>",4),f=t("code",null,"Send",-1),g={class:"custom-container warning"},y=t("p",{class:"custom-container-title"},"No coinjoin",-1),v=l('<h2 id="what-is-cold-storage" tabindex="-1"><a class="header-anchor" href="#what-is-cold-storage" aria-hidden="true">#</a> What is Cold Storage</h2><p>Cold storage refers to generating and storing private keys completely offline. This is an often-used security precaution, especially dealing with large amounts of bitcoin. Because the private keys are not on a computer that is connected to the internet, many remote attack vectors are nullified.</p><p>Methods of cold storage include keeping private keys on a:</p><ul><li>USB drive or other data storage medium</li><li>Paper wallet</li><li>Bearer item such as a physical bitcoin</li><li>Hardware wallet</li></ul><div class="custom-container tip"><p class="custom-container-title">Use a hardware wallet for cold storage</p><p>There are multiple ways to exercise cold storage, however it is highly reccommended to use a hardware wallet. This is by far the best and most secure way of using bitcoin for almost all users.</p></div><h2 id="hardware-wallet-with-wasabi" tabindex="-1"><a class="header-anchor" href="#hardware-wallet-with-wasabi" aria-hidden="true">#</a> Hardware Wallet with Wasabi</h2>',6),_={href:"https://github.com/bitcoin-core/hwi",target:"_blank",rel:"noopener noreferrer"},k={href:"https://trezor.io",target:"_blank",rel:"noopener noreferrer"},W={href:"https://ledger.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://coldcard.com",target:"_blank",rel:"noopener noreferrer"},C=l('<h3 id="connecting-via-usb" tabindex="-1"><a class="header-anchor" href="#connecting-via-usb" aria-hidden="true">#</a> Connecting via USB</h3><h4 id="import-the-wallet" tabindex="-1"><a class="header-anchor" href="#import-the-wallet" aria-hidden="true">#</a> Import the wallet</h4><ol><li>Go to <code>Add wallet</code>.</li><li>Click on <code>Connect to hardware wallet</code>.</li><li>Give the wallet a name.</li><li>Connect the hardware wallet to the PC and enter the pin on the hardware wallet to unlock it.</li><li>Confirm that the correct hardware wallet is detected.</li><li>Open the wallet.</li></ol><div class="custom-container tip"><p class="custom-container-title">This wallet can be used as a watch-only wallet when the hardware wallet device is not connected.</p><p>Wasabi remembers the wallet&#39;s information like xpub, wallet fingerprint and addresses etc. But it never knows the private keys, which are on the hardware wallet. So, you can see the balance and all it&#39;s transactions in Wasabi and you can generate addresses, but you cannot send without the hardware wallet being connected. Because you need to sign (confirm) the outgoing transactions on the hardware wallet.</p></div><h4 id="receiving-bitcoin" tabindex="-1"><a class="header-anchor" href="#receiving-bitcoin" aria-hidden="true">#</a> Receiving bitcoin</h4>',5),x=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"Verify the receive address on the hardware wallet for extra security"),t("p",null,[e("It's always a good practice to verify that the receive address on Wasabi corresponds to the one on the hardware wallet, before receiving (large amounts of) bitcoin. This could prevent malicious firmware which replaces a receive address with a fake one. You can do this by clicking on "),t("code",null,"Show on the hardware wallet"),e(" at a receive address. The address will now be displayed on the hardware wallet, check that the addresses correspond and then confirm this on the hardware wallet.")])],-1),T=t("h4",{id:"sending-bitcoin",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#sending-bitcoin","aria-hidden":"true"},"#"),e(" Sending bitcoin")],-1),B=l('<ol><li>Click the <code>Send</code> button.</li><li>Enter the amount and destination address.</li><li>Enter the label of whom you are sending to.</li><li>At the <code>Preview Transaction</code> screen, check that everything is correct.</li><li>Click <code>Send Now</code>.</li><li>Connect the hardware wallet &amp; unlock it.</li><li>Check on the hardware wallet that everything is correct.</li><li>Confirm on the hardware wallet.</li><li>The transaction is sent!</li></ol><p>The private keys are not on the computer, thus the transaction is signed on the hardware wallet after you confirm with a physical button click. The final transaction is automatically broadcast over Tor with Wasabi Wallet.</p><h3 id="connecting-coldcard-via-sd-card" tabindex="-1"><a class="header-anchor" href="#connecting-coldcard-via-sd-card" aria-hidden="true">#</a> Connecting Coldcard via SD card</h3>',3),j={href:"https://coldcard.com/docs/microsd",target:"_blank",rel:"noopener noreferrer"},I=l('<h4 id="import-the-skeleton-wallet" tabindex="-1"><a class="header-anchor" href="#import-the-skeleton-wallet" aria-hidden="true">#</a> Import the skeleton wallet</h4><p>Power your Coldcard on a power bank or electricity socket, then unlock it with your pin. Put in a MicroSD card and go to <code>Advanced &gt; MicroSD Card &gt; Export Wallet &gt; Wasabi Wallet</code>. This will write the public keys, wallet fingerprint, derivation path and other metadata to a skeleton file <code>new-wallet.json</code>.</p><div class="custom-container warning"><p class="custom-container-title">Protect your public keys!</p><p>This file does not include your private keys, so an attacker cannot use it to spend your bitcoin. However, he can use it to derive a full transaction history, thus it is a potential privacy leak.</p></div><p>Now insert the SD card to your computer, and open Wasabi Wallet. Go to the <code>Add Wallet</code> dialog, and click <code>Import a wallet</code>, browse to the SD card and select the <code>new-wallet.json</code> file. Wasabi will automatically import and modify this skeleton file and store it in your <code>Wallets</code> and <code>WalletBackups</code> folders.</p><h4 id="receiving-bitcoin-1" tabindex="-1"><a class="header-anchor" href="#receiving-bitcoin-1" aria-hidden="true">#</a> Receiving bitcoin</h4>',5),N=t("code",null,"NavBar",-1),A=l('<h4 id="sending-bitcoin-1" tabindex="-1"><a class="header-anchor" href="#sending-bitcoin-1" aria-hidden="true">#</a> Sending bitcoin</h4><p>Sending bitcoin airgapped works as follows:</p><ol><li>Click the <code>Send</code> button.</li><li>Enter the amount and destination address.</li><li>Enter the label of whom you are sending to.</li><li>At the <code>Preview Transaction</code> screen, check that everything is correct.</li><li>Click <code>Save PSBT file</code>, and save the file on the MicroSD card.</li><li>Remove the MicroSD card from the computer and put it into your Coldcard.</li><li>On the Coldcard, click <code>Ready to Sign</code>.</li><li>Verify the transaction details shown on the Coldcard, and approve to sign the transaction.</li><li>Remove the MicroSD card from Coldcard and insert it into the computer.</li><li>In Wasabi, click on <code>Broadcaster</code> (in the search bar).</li><li>Select <code>Import Transaction</code>.</li><li>Select the final signed transaction, which looks like this <code>xxx-final.txn</code>.</li><li>Broadcast the transaction.</li></ol><div class="custom-container tip"><p class="custom-container-title">Enable PSBT workflow in the settings</p><p>If enabled, a Broadcast button will appear next to the <code>Send</code> button for an easier workflow.</p></div><h2 id="cold-wasabi-protocol" tabindex="-1"><a class="header-anchor" href="#cold-wasabi-protocol" aria-hidden="true">#</a> Cold-Wasabi protocol</h2><p>This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after coinjoining with Wasabi Wallet. Because you cannot do coinjoin with the private keys on the hardware wallet, you will need to generate and load two different wallets in Wasabi. A &#39;hot&#39; (coinjoin) and a &#39;cold&#39; (storage) wallet will both be running in parallel, label them accordingly so you don&#39;t mix them up.</p><h2 id="gui-tutorial" tabindex="-1"><a class="header-anchor" href="#gui-tutorial" aria-hidden="true">#</a> GUI tutorial</h2><h3 id="coinjoin-on-the-hot-wasabi" tabindex="-1"><a class="header-anchor" href="#coinjoin-on-the-hot-wasabi" aria-hidden="true">#</a> Coinjoin on the hot Wasabi</h3><div class="custom-container tip"><p class="custom-container-title">First</p><p>You should make your existing coins private. It is useful to generate a complete new hot wallet for this, so as to keep the coinjoin transaction history separate from other wallets.</p></div>',9),R=t("li",null,"Send bitcoin into this Hot-Wasabi Wallet.",-1),U=l('<h3 id="set-up-your-cold-wasabi" tabindex="-1"><a class="header-anchor" href="#set-up-your-cold-wasabi" aria-hidden="true">#</a> Set up your cold-Wasabi</h3><div class="custom-container tip"><p class="custom-container-title">Second</p><p>In order to separate these new private coins, you should generate a fresh wallet on your hardware device.</p></div><ol start="5"><li>Generate a new set of keys on your hardware wallet and make a backup.</li><li>Load your hardware wallet device to Wasabi, either via USB or SD card.</li><li>Label and generate a receive address for the hardware wallet. For the first setup, you need to connect the hardware wallet to the computer that runs Wasabi, afterwards, you can generate receive addresses without the device being connected.</li><li>Copy the receiving address from the cold-Wasabi.</li></ol><h3 id="send-bitcoins-from-hot-to-cold-wasabi" tabindex="-1"><a class="header-anchor" href="#send-bitcoins-from-hot-to-cold-wasabi" aria-hidden="true">#</a> Send bitcoins from hot to cold Wasabi</h3><div class="custom-container tip"><p class="custom-container-title">Third</p><p>When your coins are private, it is a good practice to send them out in multiple batches in order to not consolidate all your coins. Wait some time in-between sending them, so that timing analysis becomes more difficult.</p></div><ol start="9"><li>Go to the hot-Wasabi <code>Send</code> dialog and enter the amount.</li><li>Paste the cold-Wasabi address.</li></ol><h3 id="send-bitcoins-from-cold-wasabi" tabindex="-1"><a class="header-anchor" href="#send-bitcoins-from-cold-wasabi" aria-hidden="true">#</a> Send bitcoins from cold Wasabi</h3><div class="custom-container tip"><p class="custom-container-title">Finally</p><p>You can at any time spend the bitcoin from the cold-Wasabi.</p></div><ol start="11"><li>Connect your hardware wallet to the computer.</li><li>Load the cold Wasabi wallet.</li><li>Go to the <code>Send</code> dialog, enter the amount and the destination address, then sign the transaction with the hardware wallet.</li></ol><div class="custom-container tip"><p class="custom-container-title">Success!</p><p>おめでとうございます!</p><p>You are now eating Cold Wasabi!</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The anonymity score is tied to the wallet that you used to coinjoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity score of 1 (and will be marked as non-private) because this wallet doesn&#39;t know that the coin was coinjoined.</p><p>You should use a meaningful label when you generate a receive address in your hardware wallet, e.g. &quot;Myself coinjoin private&quot; (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).</p></div>',11);function D(G,P){const i=s("router-link"),n=s("RouterLink"),r=s("ExternalLinkIcon");return c(),h("div",null,[w,t("nav",p,[t("ul",null,[t("li",null,[a(i,{to:"#using-hardware-wallet-step-by-step"},{default:o(()=>[e("Using hardware wallet step-by-step")]),_:1})]),t("li",null,[a(i,{to:"#what-is-cold-storage"},{default:o(()=>[e("What is Cold Storage")]),_:1})]),t("li",null,[a(i,{to:"#hardware-wallet-with-wasabi"},{default:o(()=>[e("Hardware Wallet with Wasabi")]),_:1}),t("ul",null,[t("li",null,[a(i,{to:"#connecting-via-usb"},{default:o(()=>[e("Connecting via USB")]),_:1})]),t("li",null,[a(i,{to:"#connecting-coldcard-via-sd-card"},{default:o(()=>[e("Connecting Coldcard via SD card")]),_:1})])])]),t("li",null,[a(i,{to:"#cold-wasabi-protocol"},{default:o(()=>[e("Cold-Wasabi protocol")]),_:1})]),t("li",null,[a(i,{to:"#gui-tutorial"},{default:o(()=>[e("GUI tutorial")]),_:1}),t("ul",null,[t("li",null,[a(i,{to:"#coinjoin-on-the-hot-wasabi"},{default:o(()=>[e("Coinjoin on the hot Wasabi")]),_:1})]),t("li",null,[a(i,{to:"#set-up-your-cold-wasabi"},{default:o(()=>[e("Set up your cold-Wasabi")]),_:1})]),t("li",null,[a(i,{to:"#send-bitcoins-from-hot-to-cold-wasabi"},{default:o(()=>[e("Send bitcoins from hot to cold Wasabi")]),_:1})]),t("li",null,[a(i,{to:"#send-bitcoins-from-cold-wasabi"},{default:o(()=>[e("Send bitcoins from cold Wasabi")]),_:1})])])])])]),b,t("ol",null,[m,t("li",null,[e("Now you can "),a(n,{to:"/using-wasabi/Receive.html"},{default:o(()=>[e("receive")]),_:1}),e(" bitcoin to addresses controlled by the hardware wallet.")]),t("li",null,[e("You can "),a(n,{to:"/using-wasabi/Send.html"},{default:o(()=>[e("spend")]),_:1}),e(" these coins in the "),f,e(" dialog, though the hardware wallet must be connected via USB to sign the transaction. Alternatively, you can "),a(n,{to:"/using-wasabi/ColdWasabi.html#connecting-coldcard-via-sd-card"},{default:o(()=>[e("build a PSBT")]),_:1}),e(", export this via SD card to your Coldcard wallet for signing, then import the final transaction to Wasabi for broadcasting.")])]),t("div",g,[y,t("p",null,[e("Unfortunately, as of now, you cannot "),a(n,{to:"/using-wasabi/CoinJoin.html"},{default:o(()=>[e("coinjoin")]),_:1}),e(" with just the private keys on your hardware wallet. The keys need to be on the internet-connected computer to be able to coinjoin.")])]),v,t("p",null,[e("You can use Wasabi Wallet with almost any hardware wallet out there because Wasabi utilizes "),t("a",_,[e("Bitcoin Core Hardware Wallet Interface [HWI]"),a(r)]),e(". The setup is thoroughly tested for "),t("a",k,[e("Trezor model T"),a(r)]),e(", "),t("a",W,[e("Ledger Nano S, Nano S Plus and Nano X"),a(r)]),e(", and "),t("a",S,[e("Coldcard"),a(r)]),e(".")]),C,t("p",null,[e("After the first time you loaded a new device, the public keys will be stored locally on the computer, and you can use Wasabi to "),a(n,{to:"/using-wasabi/Receive.html"},{default:o(()=>[e("receive bitcoin")]),_:1}),e(" to the hardware wallet without having it connected.")]),x,T,t("p",null,[e("Only when you want to "),a(n,{to:"/using-wasabi/Send.html"},{default:o(()=>[e("send bitcoin")]),_:1}),e(" you need to connect the device over USB again.")]),B,t("p",null,[e("You can use Wasabi Wallet together with Coldcard without ever connecting it via USB, thus further reducing possible attack vectors. For more details see the "),t("a",j,[e("Coldcard documentation"),a(r)]),e(".")]),I,t("p",null,[e("After the skeleton wallet is imported, you can open the wallet from the wallet list at the "),N,e(", without having to power on the Coldcard. Generate a "),a(n,{to:"/using-wasabi/Receive.html"},{default:o(()=>[e("receive address")]),_:1}),e(" as usual. The private key corresponding to this address is on the hardware wallet.")]),A,t("ol",null,[t("li",null,[a(n,{to:"/using-wasabi/WalletGeneration.html"},{default:o(()=>[e("Generate a new hot-Wasabi Wallet")]),_:1}),e(".")]),t("li",null,[e("Open the "),a(n,{to:"/using-wasabi/Receive.html"},{default:o(()=>[e("Receive")]),_:1}),e(" dialog to get a new address.")]),R,t("li",null,[e("Start the automatic "),a(n,{to:"/using-wasabi/CoinJoin.html"},{default:o(()=>[e("coinjoin")]),_:1}),e(" process and wait for the coinjoin to be done (i.e. privacy progress 100%).")])]),U])}const H=d(u,[["render",D],["__file","ColdWasabi.html.vue"]]);export{H as default};
