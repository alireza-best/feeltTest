import{n as c,d as a}from"./main-DDU3_2Uq-v4.3.1.js";import"./axios-B4uVmeYG-v4.3.1.js";import"./bootstrap-DTBfG_ne-v4.3.1.js";import"./@popperjs-WhmJkuoZ-v4.3.1.js";import"./jquery-nice-select-BpWpCirC-v4.3.1.js";import"./slick-animation-oqHwU7l4-v4.3.1.js";import"./vue-DkJ1Kgzj-v4.3.1.js";import"./vue-toast-notification-KMO5b-nv-v4.3.1.js";import"./blueimp-md5-ClWCTRan-v4.3.1.js";import"./v-click-outside-C9eqkxfZ-v4.3.1.js";import"./lodash-TQOuIzOY-v4.3.1.js";import"./dateformat-oVxhnyrt-v4.3.1.js";import"./nouislider--DU6hECO-v4.3.1.js";import"./drift-zoom-KJ3HkKpL-v4.3.1.js";import"./glightbox-BzZTJpaq-v4.3.1.js";const l={components:{ProductCardVertical:a},props:["flashSaleEnabled","title","url"],data(){return{products:[]}},computed:{hasAnyProduct(){return this.products.length!==0}},created(){this.fetchProducts()},methods:{async fetchProducts(){await axios.get(this.url).then(s=>{this.products=s.data,this.$nextTick(()=>{$(this.$refs.productsPlaceholder).slick(this.slickOptions())})})},slickOptions(){return{rows:0,dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,rtl:window.FleetCart.rtl}}}};var d=function(){var t=this,r=t._self._c;return t.hasAnyProduct?r("div",{class:t.flashSaleEnabled?"col-xl-4 col-lg-6":"col-xl-6 col-lg-6"},[r("div",{staticClass:"vertical-products"},[r("div",{staticClass:"vertical-products-header"},[r("h4",{staticClass:"section-title"},[t._v(t._s(t.title))])]),r("div",{ref:"productsPlaceholder",staticClass:"vertical-products-slider"},t._l(t.$chunk(t.products,5),function(i,e){return r("div",{key:e,staticClass:"vertical-products-slide"},t._l(i,function(o){return r("ProductCardVertical",{key:o.id,attrs:{product:o}})}),1)}),0)])]):t._e()},n=[],p=c(l,d,n);const V=p.exports;export{V as default};
