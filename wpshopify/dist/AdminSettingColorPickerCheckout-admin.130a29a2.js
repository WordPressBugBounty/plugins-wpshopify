"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["AdminSettingColorPickerCheckout-admin"],{"31mL":function(o,t,e){var n=e("oYSA"),l=e("ALIA"),p=e("qZpH"),a={name:"149qvms-CustomColorPickerCSS",styles:"margin-bottom:0!important;position:relative;.components-base-control__label{left:-9px;color:black;padding:3px 10px;margin-top:15px;position:relative;top:-24px;display:inline-block;}.component-color-indicator{margin-top:38px;right:0!important;}.components-color-palette__custom-color{align-items:center!important;}.components-circular-option-picker__dropdown-link-action .components-button{right:35px;top:1px;position:relative;};label:CustomColorPickerCSS;"},i={name:"13ned5d-stylesInner",styles:"margin-top:0;top:-25px;position:relative;padding-left:0;margin-bottom:-10px;label:stylesInner;"};t.Z=wp.element.memo((function(o){var t=o.settingName,e=o.help,r=void 0!==e&&e,c=o.label,s=void 0!==c&&c,m=React,u=m.useContext,d=m.useState,h=wp.components,k=h.ColorPalette,C=h.BaseControl,b=h.ColorIndicator,g=u(l.Z),v=(0,n.Z)(g,2),w=v[0],x=v[1],f=d(!1),S=(0,n.Z)(f,2),Z=S[0],_=(S[1],i),y=a;return(0,p.tZ)(C,{help:r,label:s,className:[Z&&"shopwp-is-open","shopwp-color-picker"],css:y},w[t]&&(0,p.tZ)(b,{colorValue:w[t]}),(0,p.tZ)(k,{css:_,colors:[],value:w[t],onChange:function(o){x({type:"UPDATE_SETTING",payload:{key:t,value:o}})},clearable:!1}))}))},rSMh:function(o,t,e){e.r(t);var n=e("31mL");t.default=function(){return React.createElement(n.Z,{settingName:"checkoutColor",label:wp.i18n.__("Checkout Button Background","shopwp")})}}}]);