import{$ as r}from"./jquery-e7e446c0.js";import{G as g}from"./get_assets-400025f8.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{o as d,c as h,a,t as l,F as f,j as u,s as _,p as b,e as v}from"./index-84cea013.js";const j={name:"FindTheItem",data(){return{ObjPosition:[],ObjPositionRange:[],answered:[],btn:{},inputNumber:""}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},created(){for(var t=0;t<this.GameData.Question.ObjNum;t++)this.answered.push(0);for(var t in this.GameData.Question.ObjName)this.btn[t]=this.GameData.Question.ObjName[t]},mounted(){var t=document.getElementById("cvs");const s=t.getContext("2d");var o=new Image;o.src=g(this.id,this.GameData.img),console.log(o.src),o.addEventListener("load",function(){s.drawImage(this,0,0,t.width,t.height)},!1);var e=r("#cvs").offset().left,i=r("#cvs").offset().top;console.log("page offset:",e,i),this.ObjPosition=this.GameData.Question.ObjLocation,this.ObjPositionRange=this.GameData.Answer},methods:{outCircle(t,s){var o=document.getElementById("cvs"),e=o.getContext("2d"),i=50,c=2,n="red";e.beginPath(),e.arc(t,s,i,0,2*Math.PI),e.lineWidth=c,e.strokeStyle=n,e.stroke()},judge_position(t){console.log("detect the mouse position..."),console.log(t),console.log(t.pageX,t.pageY);var s=r("#cvs").offset().left,o=r("#cvs").offset().top;console.log(t.pageX+s,t.pageY+o),console.log(this.ObjPositionRange[0][0][0],this.ObjPositionRange[0][0][1]);for(var e=0;e<11;e++)t.pageX>=this.ObjPositionRange[e][0][0]+s&&t.pageX<=this.ObjPositionRange[e][0][1]+s&&t.pageY>=this.ObjPositionRange[e][1][0]+o&&t.pageY<=this.ObjPositionRange[e][1][1]+o&&this.RightAns(e)},RightAns(t){this.ObjPosition[t][0],this.ObjPosition[t][1],this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[t,"被找到","正確"]),this.outCircle(this.ObjPosition[t][0],this.ObjPosition[t][1]),r("#bt-"+t).css("background-color","red"),this.detect_win(t)},detect_win(t){this.answered[t]=1;var s=0;for(t in this.answered)this.answered[t]==0&&(s+=1);s==0&&this.win()},win(){console.log("FindTheItemGame CheckAnswer :Wrong"),this.$emit("play-effect","HarraySound"),this.$emit("add-record",["全對","","正確"]),this.$emit("next-question",!0)}}},O=t=>(b("data-v-45e1adf7"),t=t(),v(),t),w={class:"container"},G={class:"h1"},P={class:"Game"},y={class:"ObjList"},I=O(()=>a("p",{class:"h4"},"尚未被找到:",-1)),x={class:"Objects"};function C(t,s,o,e,i,c){return d(),h("div",w,[a("p",G,l(this.GameData.Question.Text),1),a("div",P,[a("canvas",{id:"cvs",class:"center",width:"600",height:"400",style:{border:"1px solid #000"},onClick:s[0]||(s[0]=n=>c.judge_position(n))}),a("div",y,[I,a("div",x,[(d(!0),h(f,null,u(i.btn,(n,p)=>(d(),h("button",{class:_(["Object",{activebutton:i.answered[p]==1}])},l(n),3))),256))])])])])}const F=m(j,[["render",C],["__scopeId","data-v-45e1adf7"]]);export{F as default};
