(this["webpackJsonpweb3solidity-test"]=this["webpackJsonpweb3solidity-test"]||[]).push([[0],{236:function(e,t,n){},251:function(e,t){},260:function(e,t){},278:function(e,t){},280:function(e,t){},297:function(e,t){},298:function(e,t){},362:function(e,t){},364:function(e,t){},373:function(e,t){},375:function(e,t){},400:function(e,t){},402:function(e,t){},403:function(e,t){},408:function(e,t){},410:function(e,t){},423:function(e,t){},435:function(e,t){},438:function(e,t){},443:function(e,t){},454:function(e,t){},457:function(e,t){},510:function(e,t,n){},512:function(e,t,n){},516:function(e,t,n){},517:function(e,t,n){},518:function(e,t,n){},520:function(e,t,n){},521:function(e,t,n){},523:function(e,t,n){},524:function(e,t,n){"use strict";n.r(t);var a,r,s=n(0),o=n.n(s),i=n(83),c=n.n(i),u=n(127),l=(n(236),n(49)),p=n(84),d=(n(237),n(18)),y=n(87),f=n(59),m=n(16),b=n.n(m),h=n(31),j=n(24),x=n(72),g=n.n(x),v=n(86),T=n.n(v),O=n(529),w=n(229),k=n(88),C=n(225),M=n.n(C),I="0x871e46Bf148d90d334a719dEf062Fd0ed33Bb3aF",A=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],name:"changeAge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"eyesColor",type:"string"}],name:"changeEyesColor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"hairColor",type:"string"}],name:"changeHairColor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"height",type:"uint256"}],name:"changeHeight",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"}],name:"changeName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"minter",type:"address"}],name:"grantMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"hairColor",type:"string"},{internalType:"string",name:"eyesColor",type:"string"},{internalType:"uint256",name:"height",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],name:"mintToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"exMinter",type:"address"}],name:"removeMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenData",outputs:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"mintedTimestamp",type:"uint256"},{internalType:"string",name:"hairColor",type:"string"},{internalType:"string",name:"eyesColor",type:"string"},{internalType:"uint256",name:"height",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokensLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];!function(e){e.Age="age",e.EyesColor="eyesColor",e.HairColor="hairColor",e.Name="name",e.Height="height"}(a||(a={})),function(e){e[e.GrantMinter=0]="GrantMinter",e[e.RemoveMinter=1]="RemoveMinter",e[e.TransferToken=2]="TransferToken",e[e.MintToken=3]="MintToken",e[e.ChangeAge=4]="ChangeAge",e[e.ChangeEyesColor=5]="ChangeEyesColor",e[e.ChangeHairColor=6]="ChangeHairColor",e[e.ChangeHeight=7]="ChangeHeight",e[e.ChangeName=8]="ChangeName"}(r||(r={}));var S,N,F=function(e,t,n){var r=t.tokenId,s=t.newInformation;switch(n){case a.Age:return e.contract.methods.changeAge(r,s).send(e.querySender);case a.EyesColor:return e.contract.methods.changeEyesColor(r,s).send(e.querySender);case a.HairColor:return e.contract.methods.changeHairColor(r,s).send(e.querySender);case a.Height:case a.Name:return e.contract.methods.changeHeight(r,s).send(e.querySender)}},H=function(e){return e.contract.methods.owner().call()},E=function(e){return e.contract.methods.tokensLength().call()},D=function(e,t){return e.contract.methods.tokenData(t).call()},q=[{title:"Grant Minter",forOwner:!0,forMinter:!1,formType:r.GrantMinter,fields:[{controlId:"address",label:"Address",value:"",type:"text"}],formFunc:function(e,t){var n=t.address;return e.contract.methods.grantMinter(n).send(e.querySender)}},{title:"Change Height",forOwner:!0,forMinter:!0,formType:r.ChangeHeight,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Height",value:"",type:"text"}],formFunc:F},{title:"Change Name",forOwner:!0,forMinter:!0,formType:r.ChangeName,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Name",value:"",type:"text"}],formFunc:F},{title:"Change Hair Color",forOwner:!0,forMinter:!0,formType:r.ChangeHairColor,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Hair Color",value:"",type:"text"}],formFunc:F},{title:"Mint Token",forOwner:!1,forMinter:!0,formType:r.MintToken,fields:[{controlId:"name",label:"Token Name",value:"",type:"text"},{controlId:"age",label:"Token Age",value:"",type:"text"},{controlId:"eyesColor",label:"Token Eyes Color",value:"",type:"text"},{controlId:"hairColor",label:"Token Hair Color",value:"",type:"text"},{controlId:"height",label:"Token Height",value:"",type:"text"}],formFunc:function(e,t){var n=t.name,a=t.hairColor,r=t.eyesColor,s=t.height,o=t.age;return e.contract.methods.mintToken(n,a,r,s,o).send(e.querySender)}},{title:"Remove Minter",forOwner:!0,forMinter:!1,formType:r.RemoveMinter,fields:[{controlId:"address",label:"Address",value:"",type:"text"}],formFunc:function(e,t){var n=t.address;return e.contract.methods.removeMinter(n).send(e.querySender)}},{title:"Change Age",forOwner:!0,forMinter:!0,formType:r.ChangeAge,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Age",value:"",type:"text"}],formFunc:F},{title:"Change Eyes Color",forOwner:!0,forMinter:!0,formType:r.ChangeEyesColor,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Eyes Color",value:"",type:"text"}],formFunc:F},{title:"Transfer Token",forOwner:!0,forMinter:!0,formType:r.TransferToken,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"address",label:"Transfer to (address):",value:"",type:"text"}],formFunc:function(e,t){var n=t.address,a=t.tokenId;return e.contract.methods.safeTransferFrom(e.querySender.from,n,a).send(e.querySender)}}],B=y.a.div(S||(S=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),G=n(531),R=n(532),W=(n(510),n(2)),Y=function(e){var t=e.title;return Object(W.jsx)("div",{className:"form-title",children:t.toUpperCase()})},L=(n(512),function(e){var t=e.formDetails,n=e.handleSubmit,a=t.formTitle,r=t.formType,o=t.fields,i=t.formFunc,c=Object(s.useState)(o),u=Object(j.a)(c,2),p=u[0],d=u[1],y=Object(s.useState)({}),m=Object(j.a)(y,2),b=m[0],h=m[1];Object(s.useEffect)((function(){h((function(e){var t=p.reduce((function(e,t){return e[t.controlId]=t.value,e}),{});return Object.assign({},t,e)}))}),[p]);return Object(W.jsx)("div",{className:"widget-container",children:Object(W.jsxs)("div",{className:"form-container",children:[Object(W.jsx)(Y,{title:a}),Object(W.jsxs)(G.a,{onSubmit:function(e){e.preventDefault();var t=Object(l.a)({},b);n(i,r,t),h((function(e){return Object.assign({})})),d((function(e){return Object(f.a)(e)}))},children:[p.map((function(e,t){return Object(W.jsx)(G.a.Group,{controlId:e.controlId,children:Object(W.jsx)(G.a.Control,{required:!0,placeholder:e.label,type:e.type||"text",onChange:function(t){return n=e.controlId,a=t.target.value,h((function(e){return e["".concat(n)]=a,e})),void d((function(e){return Object(f.a)(e)}));var n,a},value:b[e.controlId]||""})},t)})),Object(W.jsx)(R.a,{variant:"success",type:"submit",block:!0,children:"SUBMIT"})]})]})})}),P=(n(516),function(e){var t=e.title;return Object(W.jsx)("div",{className:"page-title",children:t.toUpperCase()})}),U=(n(517),n(528)),_=function(e){var t=e.rows;return Object(W.jsxs)("div",{className:"table-container",children:[Object(W.jsx)("div",{className:"table-title",children:"DATA TABLE"}),Object(W.jsxs)(U.a,{responsive:"lg",children:[Object(W.jsx)("thead",{children:Object(W.jsxs)("tr",{children:[Object(W.jsx)("th",{children:"#"}),Object(W.jsx)("th",{children:"Name"}),Object(W.jsx)("th",{children:"Age"}),Object(W.jsx)("th",{children:"Height"}),Object(W.jsx)("th",{children:"Hair Color"}),Object(W.jsx)("th",{children:"Eyes Color"}),Object(W.jsx)("th",{children:"Minted Timestamp"})]})}),Object(W.jsx)("tbody",{children:t.map((function(e,t){return Object(W.jsx)("tr",{children:Object.keys(e).map((function(t,n){return Object(W.jsx)("td",{children:e[t]},n)}))},t)}))})]})]})},J=(n(518),n(519),function(e){var t=Object(s.useState)({}),n=Object(j.a)(t,2),o=n[0],i=n[1],c=Object(s.useState)(),u=Object(j.a)(c,2),l=u[0],p=u[1],d=Object(s.useState)(!1),y=Object(j.a)(d,2),m=y[0],x=y[1],v=Object(s.useState)(!1),C=Object(j.a)(v,2),S=C[0],N=C[1],F=Object(s.useState)(!1),G=Object(j.a)(F,2),R=G[0],Y=G[1],U=Object(s.useState)([]),J=Object(j.a)(U,2),z=J[0],K=J[1],Q=Object(s.useState)(!1),V=Object(j.a)(Q,2),X=V[0],Z=V[1],$=Object(s.useCallback)((function(){return{contract:l,querySender:{from:o.walletAddress}}}),[l,o.walletAddress]),ee=Object(s.useCallback)(Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(t=$()).contract.methods.isMinter(t.querySender.from).call();case 2:if(!e.sent){e.next=6;break}N(!0),e.next=7;break;case 6:N(!1);case 7:return e.next=9,H($());case 9:if(e.t0=e.sent,e.t1=o.walletAddress,e.t0!==e.t1){e.next=13;break}x(!0);case 13:Y(!0);case 14:case"end":return e.stop()}var t}),e)}))),[o.walletAddress,$]),te=Object(s.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D($(),t);case 2:return n=e.sent,n={id:t,name:n.name,age:n.age,height:n.height,hairColor:n.hairColor,eyesColor:n.eyesColor,mintedTimeStamp:M.a.unix(n.mintedTimestamp).format("MM/DD/YYYY")},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[$]),ne=Object(s.useCallback)(Object(h.a)(b.a.mark((function e(){var t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.next=3,E($());case 3:t=e.sent,n=[],a=0;case 6:if(!(a<t)){e.next=18;break}return e.next=9,s=$(),i=a,s.contract.methods.ownerOf(i).call();case 9:if(e.sent!==o.walletAddress){e.next=15;break}return e.next=13,te(a);case 13:r=e.sent,n.push(r);case 15:a++,e.next=6;break;case 18:K(n);case 19:case"end":return e.stop()}var s,i}),e)}))),[$,te,o.walletAddress]);Object(s.useEffect)((function(){if(!l&&o.walletAddress){var e=new g.a(o.provider);p(new e.eth.Contract(A,I))}l&&!R&&ee(),l&&!X&&ne()}),[o,S,z,l,X,R,ee,ne]);var ae=function(e,t){return!!(e&&t||e&&m||t&&S)},re=function(){var t=Object(h.a)(b.a.mark((function t(){var n,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.connectWallet,a=e.history.location.state,t.next=4,T()({mustBeMetaMask:!0});case 4:r=t.sent,a&&a.address?i({walletAddress:a.address,provider:r}):n().then((function(e){i({walletAddress:e.address,provider:r})}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();o.walletAddress||re();var se=function(e,t){var n={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1};"success"===e&&k.b.success("Your action was successful!",n),"error"===e&&k.b.error("There was a problem with your request!",n)},oe=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:n=e.sent,K((function(e){return[].concat(Object(f.a)(e),[n])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(h.a)(b.a.mark((function e(t,n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t($(),n,a.EyesColor);case 2:K((function(e){var t=Object(f.a)(e);return t[n.tokenId][r]=n.newInformation,t}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),ce=function(){var e=Object(h.a)(b.a.mark((function e(t,n,s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next=e.t0===r.GrantMinter?3:e.t0===r.RemoveMinter?14:e.t0===r.MintToken?25:e.t0===r.TransferToken?41:e.t0===r.ChangeAge?51:e.t0===r.ChangeEyesColor?61:e.t0===r.ChangeHairColor?71:e.t0===r.ChangeHeight?81:e.t0===r.ChangeName?91:101;break;case 3:return e.prev=3,e.next=6,t($(),s);case 6:se("success"),ee(),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(3),se(e.t1.reason);case 13:return e.abrupt("return");case 14:return e.prev=14,e.next=17,t($(),s);case 17:se("success"),ee(),e.next=24;break;case 21:e.prev=21,e.t2=e.catch(14),se(e.t2.reason);case 24:return e.abrupt("return");case 25:return e.prev=25,e.next=28,t($(),s);case 28:return se("success"),e.t3=oe,e.next=32,E($());case 32:e.t4=e.sent,e.t5=e.t4-1,(0,e.t3)(e.t5),e.next=40;break;case 37:e.prev=37,e.t6=e.catch(25),se(e.t6.reason);case 40:return e.abrupt("return");case 41:return e.prev=41,e.next=44,t($(),s);case 44:se("success"),e.next=50;break;case 47:e.prev=47,e.t7=e.catch(41),se(e.t7.reason);case 50:return e.abrupt("return");case 51:return e.prev=51,e.next=54,ie(t,s,a.Age);case 54:se("success"),e.next=60;break;case 57:e.prev=57,e.t8=e.catch(51),se(e.t8.reason);case 60:return e.abrupt("return");case 61:return e.prev=61,e.next=64,ie(t,s,a.EyesColor);case 64:se("success"),e.next=70;break;case 67:e.prev=67,e.t9=e.catch(61),se(e.t9.reason);case 70:return e.abrupt("return");case 71:return e.prev=71,e.next=74,ie(t,s,a.HairColor);case 74:se("success"),e.next=80;break;case 77:e.prev=77,e.t10=e.catch(71),se(e.t10.reason);case 80:return e.abrupt("return");case 81:return e.prev=81,e.next=84,ie(t,s,a.Height);case 84:se("success"),e.next=90;break;case 87:e.prev=87,e.t11=e.catch(81),se(e.t11.reason);case 90:return e.abrupt("return");case 91:return e.prev=91,e.next=94,ie(t,s,a.Name);case 94:se("success"),e.next=100;break;case 97:e.prev=97,e.t12=e.catch(91),se(e.t12.reason);case 100:return e.abrupt("return");case 101:case"end":return e.stop()}}),e,null,[[3,10],[14,21],[25,37],[41,47],[51,57],[61,67],[71,77],[81,87],[91,97]])})));return function(t,n,a){return e.apply(this,arguments)}}(),ue=Math.ceil(q.length/2);return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(k.a,{}),Object(W.jsxs)(B,{className:"scrollable-area-container",children:[Object(W.jsx)(P,{title:"Dashboard"}),Object(W.jsxs)(O.a,{className:"dashboard-forms",children:[Object(W.jsx)(w.a,{xs:"5",children:q.slice(0,ue).map((function(e,t){return ae(e.forOwner,e.forMinter)?Object(W.jsx)(L,{formDetails:{formTitle:e.title,formType:e.formType,fields:e.fields,formFunc:e.formFunc},handleSubmit:ce},t):null}))}),Object(W.jsx)(w.a,{xs:"5",children:q.slice(ue).map((function(e,t){return ae(e.forOwner,e.forMinter)?Object(W.jsx)(L,{formDetails:{formTitle:e.title,formType:e.formType,fields:e.fields,formFunc:e.formFunc},handleSubmit:ce},t):null}))})]}),Object(W.jsx)(_,{rows:z})]})]})}),z=n(530),K=n.p+"static/media/metamask.a4d5e8f2.jpg",Q=(n(520),function(e){var t=e.connectWalletAndGetAddress;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(z.a,{className:"metamask-image",height:"175",onClick:t,src:K})})}),V=(n(521),function(e){var t=e.connectWallet,n=e.shouldAutoConnect,a=Object(s.useState)(""),r=Object(j.a)(a,2),o=r[0],i=r[1],c=Object(s.useState)(!1),u=Object(j.a)(c,2),l=u[0],p=u[1],y=Object(d.f)(),f=function(){var e=Object(h.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t(!1);case 3:n=e.sent,i(n.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n&&(o?y.push({pathname:"/dashboard",state:{address:o}}):t(!0).then((function(e){e.address&&y.push({pathname:"/dashboard",state:{address:e.address}})})).catch((function(e){console.log("Err while trying to connect wallet: ",e.status)})))}),[o,t,y,n]),Object(W.jsxs)(B,{children:[Object(W.jsx)(P,{title:"Wallet Connect"}),Object(W.jsx)(Q,{connectWalletAndGetAddress:f}),Object(W.jsx)("span",{className:"click-to-connect",children:"Click on the logo above if you want to connect your wallet to the app."}),l&&Object(W.jsx)("span",{className:"accept-wallet-warning",children:"Please accept Metamask request. If you closed the metamask window, press the logo again."})]})}),X=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()({mustBeMetaMask:!0});case 2:if(!(n=e.sent)){e.next=23;break}if(e.prev=4,!t){e.next=11;break}return e.next=8,new g.a(n).eth.getAccounts();case 8:a=e.sent,e.next=14;break;case 11:return e.next=13,new g.a(n).eth.requestAccounts();case 13:a=e.sent;case 14:return r={connectedStatus:!0,address:a[0]},e.abrupt("return",r);case 18:return e.prev=18,e.t0=e.catch(4),e.abrupt("return","\ud83e\udd8a Connect to Metamask using the button on the top right.");case 21:e.next=24;break;case 23:return e.abrupt("return","\ud83e\udd8a You must install Metamask into your browser: https://metamask.io/download.html");case 24:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),Z=[{exact:!0,path:"/",render:function(e){return Object(W.jsx)(V,Object(l.a)({connectWallet:X,shouldAutoConnect:!0},e))}},{exact:!0,path:"/dashboard",render:function(e){return Object(W.jsx)(J,Object(l.a)({connectWallet:X},e))}}],$=(n(523),y.a.div(N||(N=Object(p.a)(["\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  flex-direction: column;\n"]))));var ee=function(){return Object(W.jsxs)($,{children:[Object(W.jsx)("h1",{className:"App-title",children:"ERC-721"}),Object(W.jsx)("div",{className:"App-route",children:Object(W.jsx)(d.c,{children:Z.map((function(e,t){return Object(W.jsx)(d.a,Object(l.a)({},e),t)}))})})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,533)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};c.a.render(Object(W.jsx)(o.a.StrictMode,{children:Object(W.jsx)(u.a,{children:Object(W.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[524,1,2]]]);
//# sourceMappingURL=main.2dfc1b19.chunk.js.map