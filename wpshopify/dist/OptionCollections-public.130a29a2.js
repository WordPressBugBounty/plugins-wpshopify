"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["OptionCollections-public"],{"8N3t":function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n("WZtd"),o=n("2MD/"),i=n("jAHd"),s=n.n(i),a=n("LpH3"),l=n("3mso"),u=n.n(l),c=n("6lrK"),p=n.n(c),d=n("/FEU"),f=n.n(d),h=n("6LNs"),y=n("16zp"),x=n("dGr1"),g={name:"17q1cl9-secondaryButtonCSS",styles:"text-transform:capitalize;padding:5px 9px;background:white;font-size:14px;border:1px solid silver;appearance:none;font-family:inherit;&:hover{cursor:pointer;opacity:0.8;};label:secondaryButtonCSS;"},b=function(e){var t=e.onClick,n=e.settings,r=e.isBusy,o=void 0!==r&&r,i=e.extraCSS,s=void 0!==i&&i,l=g;return(0,a.tZ)("button",{onClick:t,disabled:o,css:[l,s,";label:ButtonSecondary;"]},o?n.loadMoreCollectionsBusyText:n.loadMoreCollectionsText)},m=n("V+k2"),v=wp.element.lazy((function(){return n.e("StorefrontFilterOptionsGroup-public").then(n.bind(n,"y3xO"))})),S=wp.element.lazy((function(){return n.e("StorefrontFilterOptionsGroupItems-public").then(n.bind(n,"Eg2F"))})),Z={name:"14roezz-LoadMoreCSS",styles:"margin:10px 0 15px 17px;border-radius:4px;label:LoadMoreCSS;"},w=function(e){var t=e.settings,n=wp.element,i=n.useState,l=n.useEffect,c=i(!0),d=(0,o.Z)(c,2),g=d[0],w=d[1],C=i(!1),k=(0,o.Z)(C,2),F=k[0],T=k[1],L=i(!1),O=(0,o.Z)(L,2),z=O[0],B=O[1],E=i([]),G=(0,o.Z)(E,2),M=G[0],H=G[1],I=i([]),K=(0,o.Z)(I,2),N=K[0],q=K[1],P=i([]),X=(0,o.Z)(P,2),j=X[0],A=X[1],D=(0,x.aX)(t,"collections"),R=(0,m.v)();function U(e){return e.edges.map((function(e){return{label:e.node.title,id:e.node.id}}))}function V(){return W.apply(this,arguments)}function W(){return W=(0,r.Z)(s().mark((function e(){var t,n,r,i,a,l,u,c,d=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]&&d[0],w(!0),n={query:"*",sortKey:"TITLE",first:wp.hooks.applyFilters("storefront.collectionsToFetch",shopwp.general.numPosts),reverse:!1},t&&(n.cursor=t),e.next=6,(0,h.Z)((0,y.XK)(n,R));case 6:if(r=e.sent,i=(0,o.Z)(r,2),a=i[0],l=i[1],w(!1),!(u=(0,y.HL)(a,l,!1))){e.next=15;break}return B(u),e.abrupt("return");case 15:l&&(q(l.edges),l.pageInfo.hasNextPage?T(!0):T(!1),c=wp.hooks.applyFilters("storefront.availableCollections",p()(M.concat(U(l)))),A(c),H(c));case 16:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function J(e){e&&(M.length?A(M):V())}function Q(){return(Q=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=N[N.length-1])&&f()(t,"cursor")&&V(t.cursor);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l((function(){J(!0)}),[]);var Y=Z;return(0,a.tZ)(v,{error:z,onOpen:J,openOnLoad:D,isLoadingItems:g,groupType:"collections",areFilterOptionsEmpty:u()(j),noFilterGroupFoundText:t.noFilterGroupFoundText,heading:t.collectionsHeading,items:(0,a.tZ)(React.Fragment,null,(0,a.tZ)(S,{filterOptions:j,isBusy:g,itemType:"collections"}),F&&(0,a.tZ)(b,{settings:t,isBusy:g,onClick:function(){return Q.apply(this,arguments)},extraCSS:Y}))})}}}]);