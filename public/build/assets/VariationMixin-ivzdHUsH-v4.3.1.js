import{d as a}from"./vuedraggable-BDfjX5jl-v4.3.1.js";import{E as l}from"./Errors-Dscm1BJ0-v4.3.1.js";import{C as o}from"./@melloware-BTYRaMki-v4.3.1.js";const n={components:{draggable:a},data:{formSubmitting:!1,form:{},errors:new l},computed:{isEmptyVariationType(){return this.form.type===""}},mounted(){this.hideColorPicker()},methods:{uid(){return Math.random().toString(36).slice(3)},changeVariationType(e){const r=this.form.values;e!==""&&r.length===1&&this.$nextTick(()=>{$(`#values-${r[0].uid}-label`).trigger("focus")}),e==="text"?r.forEach(t=>{this.errors.clear(`values.${t.uid}.color`),this.errors.clear(`values.${t.uid}.image`)}):e==="color"?(r.forEach(t=>{this.errors.clear(`values.${t.uid}.image`)}),this.$nextTick(()=>{this.initColorPicker()})):e==="image"?(r.forEach((t,s)=>{t.image||this.$set(r[s],"image",{id:null,path:null})}),r.forEach(t=>{this.errors.clear(`values.${t.uid}.color`)})):this.clearValueErrors()},addRow(){const e=this.form.values,r=this.uid();e.push({uid:r,image:{id:null,path:null}}),this.$nextTick(()=>{$(`#values-${r}-label`).trigger("focus"),this.form.type==="color"&&this.initColorPicker()})},addRowOnPressEnter(e,r){const t=this.form.values;if(e.target.value!==""){if(t.length-1===r){this.addRow();return}r<t.length-1&&$(`#values-${t[r+1].uid}-label`).trigger("focus")}},deleteRow(e,r){const t=this.form.values;t.splice(e,1),t.length===0&&this.addRow(),this.clearValueRowErrors(r),this.updateColorThumbnails()},updateColorThumbnails(){if(this.form.type!=="color")return;const e=document.querySelectorAll(".clr-field");this.form.values.forEach((r,t)=>{e[t].style.color=r.color||""})},initColorPicker(){o.init(),o({el:".color-picker",alpha:!1,rtl:FleetCart.rtl,theme:"large",wrap:!0,format:"hex",selectInput:!0,swatches:["#D01C1F","#3AA845","#118257","#0A33AE","#0D46A0","#000000","#5F4C3A","#726E6E","#F6D100","#C0E506","#FF540A","#C5A996","#4B80BE","#A1C3DA","#C8BFC2","#A9A270"]})},hideColorPicker(){$(document).on("click","#clr-swatches button",e=>{$(e.currentTarget).parents("#clr-picker").removeClass("clr-open")})},chooseImage(e,r){new MediaPicker({type:"image"}).on("select",({id:s,path:i})=>{this.errors.clear(`values.${r}.image`),this.form.values[e].image={id:+s,path:i}})},resetForm(){this.setFormDefaultData(),this.focusInitialField()},clearValueErrors(){Object.keys(this.errors.errors).forEach(e=>{e.startsWith("values")&&this.errors.clear(e)})},clearValueRowErrors(e){Object.keys(this.errors.errors).forEach(r=>{r.startsWith(`values.${e}`)&&this.errors.clear(r)})},focusFirstErrorField(e){this.$nextTick(()=>{[...e].find(r=>r.name===Object.keys(this.errors.errors)[0]).focus()})},transformData(e){const r=JSON.parse(JSON.stringify(e)),t={text:["id","uid","label"],color:["id","uid","label","color"],image:["id","uid","label","image"]};return r.type===""?(r.values=[],r):(r.values=r.values.reduce((s,i)=>(i=_.pick(i,t[r.type]),r.type==="image"&&(i.image=i.image.id),{...s,[i.uid]:i}),{}),r)}}};export{n as V};
