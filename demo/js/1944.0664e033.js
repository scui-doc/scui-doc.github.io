"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[1944],{1944:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(6252),a=i(3577),r=i(9963);function s(e,t,i,s,u,l){return(0,n.wg)(),(0,n.iD)("div",{class:"sc-code-editor",style:(0,a.j5)({height:l._height})},[(0,n.wy)((0,n._)("textarea",{ref:"textarea","onUpdate:modelValue":t[0]||(t[0]=e=>u.contentValue=e)},null,512),[[r.nr,u.contentValue]])],4)}var u=i(2262),l=i(4631),h=i.n(l),o=(i(17),i(7319),i(4086),{props:{modelValue:{type:String,default:""},mode:{type:String,default:"javascript"},height:{type:[String,Number],default:300},options:{type:Object,default:()=>{}},theme:{type:String,default:"idea"},readOnly:{type:Boolean,default:!1}},data(){return{contentValue:this.modelValue,coder:null,opt:{theme:this.theme,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!1,tabSize:4,indentUnit:4,indentWithTabs:!0,mode:this.mode,readOnly:this.readOnly,...this.options}}},computed:{_height(){return Number(this.height)?Number(this.height)+"px":this.height}},watch:{modelValue(e){this.contentValue=e,e!==this.coder.getValue()&&this.coder.setValue(e)}},mounted(){this.init()},methods:{init(){this.coder=(0,u.Xl)(h().fromTextArea(this.$refs.textarea,this.opt)),this.coder.on("change",(e=>{this.contentValue=e.getValue(),this.$emit("update:modelValue",this.contentValue)}))},formatStrInJson(e){return JSON.stringify(JSON.parse(e),null,4)}}}),d=i(3744);const c=(0,d.Z)(o,[["render",s],["__scopeId","data-v-a0186eba"]]);var p=c}}]);