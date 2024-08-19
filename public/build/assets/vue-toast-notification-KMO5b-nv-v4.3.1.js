import{c as y,g as _}from"./blueimp-md5-ClWCTRan-v4.3.1.js";var h={exports:{}};(function(d,B){(function(r,a){d.exports=a()})(y,()=>(()=>{var r={d:(t,s)=>{for(var e in s)r.o(s,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})},o:(t,s)=>Object.prototype.hasOwnProperty.call(t,s)},a={};r.d(a,{default:()=>f});class v{constructor(s,e){this.startedAt=Date.now(),this.callback=s,this.delay=e,this.timer=setTimeout(s,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const i=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"}),c={all:n=n||new Map,on:function(t,s){var e=n.get(t);e?e.push(s):n.set(t,[s])},off:function(t,s){var e=n.get(t);e&&(s?e.splice(e.indexOf(s)>>>0,1):n.set(t,[]))},emit:function(t,s){var e=n.get(t);e&&e.slice().map(function(o){o(s)}),(e=n.get("*"))&&e.slice().map(function(o){o(t,s)})}};var n,g=function(t,s,e,o,m,p,w,x){var O,u=typeof t=="function"?t.options:t;return s&&(u.render=s,u.staticRenderFns=e,u._compiled=!0),{exports:t,options:u}}({name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:i.BOTTOM_RIGHT,validator:t=>Object.values(i).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),c.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{var t;this.onDismiss.apply(null,arguments),this.$destroy(),(t=this.$el).remove!==void 0?t.remove():t.parentNode.removeChild(t)},150)},showNotice(){this.shouldQueue()?this.queueTimer=setTimeout(this.showNotice,250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.duration&&(this.timer=new v(this.dismiss,this.duration)))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(t){this.pauseOnHover&&this.timer&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case i.TOP:case i.TOP_RIGHT:case i.TOP_LEFT:return this.parentTop;case i.BOTTOM:case i.BOTTOM_RIGHT:case i.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case i.TOP:case i.TOP_RIGHT:case i.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case i.BOTTOM:case i.BOTTOM_RIGHT:case i.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeDestroy(){c.off("toast-clear",this.dismiss)}},function(){var t=this,s=t._self._c;return s("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"v-toast__item",class:["v-toast__item--".concat(t.type),"v-toast__item--".concat(t.position)],attrs:{role:"alert"},on:{mouseover:function(e){return t.toggleTimer(!0)},mouseleave:function(e){return t.toggleTimer(!1)},click:t.whenClicked}},[s("div",{staticClass:"v-toast__icon"}),t._v(" "),s("p",{staticClass:"v-toast__text",domProps:{innerHTML:t._s(t.message)}})])])},[]);const l=g.exports,T=function(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{open(e){let o;typeof e=="string"&&(o=e);const m={message:o},p=Object.assign({},m,s,e);return new(t.extend(l))({el:document.createElement("div"),propsData:p})},clear(){c.emit("toast-clear")},success(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:e,type:"success"},o))},error(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:e,type:"error"},o))},info(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:e,type:"info"},o))},warning(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:e,type:"warning"},o))},default(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:e,type:"default"},o))}}};l.install=function(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=T(t,s);t.$toast=e,t.prototype.$toast=e};const f=l;return a=a.default})())})(h);var b=h.exports;const E=_(b);export{E as V};
