(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{112:function(e){e.exports=JSON.parse('[{"id":1,"Question":"What links these?","Clues":["Scuba","Smart","Taser","Laser","Pin","Seal","Kiss","Sonar","Captcha","Who?","Wasp","Rip"],"Answer":"Acronyms"},{"id":2,"Question":"What links these?","Clues":["Atom","Peck","Hobbit","League","A lot","Spat","Rod","Faggot","Poncelet","Cable","Chain","Butt"],"Answer":"Obsolete units of measurement"},{"id":3,"Question":"What links these?","Clues":["Hot","Bubble","Foot","Eye","Public","Mats","Robe","House","Blood","Plug","Bird","Mud"],"Answer":"Baths"},{"id":4,"Question":"What links these?","Clues":["American","Humble","Cottage","Pumpkin","Mud","Lemon","Ocean","Cheese","Fish","Pecan","Sweet Potato","Funeral"],"Answer":"Types of Pie"},{"id":5,"Question":"What links these?","Clues":["Azerbaijan","Belarus","China","Estonia","Finland","Georgia","Kazakhstan","North Korea","Latvia","Lithuania","Mongolia","Norway","Poland","Ukraine"],"Answer":"Types of Pie"},{"id":6,"Question":"What links these?","Clues":["Rot","Note","Fall","Rest","Hills","Patrol","Loose","Stool","Wear","Path","Print","Ball"],"Answer":"Foot"},{"id":7,"Question":"What links these?","Clues":["Craft","Wall","Recycled","News","Sand","Wrapping","Litmus","Filter","Blotting","Note","Toilet","Waste"],"Answer":"Paper"}]')},154:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var c=n(6),i=n(0),r=n(24),s=n(240),a=n(246),o=n(51),l=n(23),j=n(249),u=n(250),d=(n(153),n(154),n(113)),h=n(242),x=n(244),b=n(67),p=n(37),O=n(243),m=n(47),f=n(100),y=n(248),g=n(145),C=n(84),k=function(e){var t=e.FormItem,n=e.AddButton;return Object(c.jsx)(h.a.List,{name:"clues",children:function(e,i){var r=i.add,s=i.remove;return Object(c.jsxs)(c.Fragment,{children:[e.map((function(e,n){return Object(c.jsx)("div",{children:t({field:e,index:n,remove:s})},e.key)})),Object(c.jsx)(n,{add:r})]})}})},v=function(e){var t=Object(C.compressToEncodedURIComponent)(JSON.stringify(e));console.log(e);var n=window.location.origin+"/connections/#/play/"+t;x.a.confirm({title:"Game successfully created",content:Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Open this link to play the game"}),Object(c.jsx)("a",{target:"_blank",href:n,children:n})]}),icon:Object(c.jsx)(f.a,{style:{color:"#52c41a"}}),maskClosable:!0,okText:"Play Game",cancelText:"Close",onOk:function(){window.open(n,"_blank")},onCancel:function(){}})},w=function(e){var t=e.label,n=void 0===t?null:t,i=e.children;return Object(c.jsxs)(b.a,{style:{marginLeft:"10px",marginRight:"20px"},children:[Object(c.jsx)(p.a,{span:8,style:{textAlign:"right",paddingRight:"10px",lineHeight:"32px"},children:n}),Object(c.jsx)(p.a,{span:16,children:i})]})},A=function(){return Object(c.jsx)("div",{style:{maxWidth:"500px"},children:Object(c.jsxs)(h.a,{layout:"horizontal",initialValues:{clues:Array(12).fill("")},onFinish:v,children:[Object(c.jsx)(w,{label:"Answer:",children:Object(c.jsx)(h.a.Item,{name:"answer",children:Object(c.jsx)(O.a,{placeholder:"The connection"})})}),Object(c.jsx)(k,{FormItem:function(e){var t=e.field,n=e.index,i=e.remove;return Object(c.jsx)(w,{label:n+1+":",children:Object(c.jsx)(h.a.Item,Object(d.a)(Object(d.a)({},t),{},{name:t.name,fieldKey:t.fieldKey,style:{marginBottom:"8px"},children:Object(c.jsx)(O.a,{placeholder:"Clue",suffix:Object(c.jsx)(y.a,{style:{color:"#F66"},onClick:function(){return i(t.name)}})})}))})},AddButton:function(e){var t=e.add;return Object(c.jsx)(w,{children:Object(c.jsx)(h.a.Item,{children:Object(c.jsx)(m.a,{type:"dashed",onClick:function(){return t()},block:!0,icon:Object(c.jsx)(g.a,{}),children:"Add Clue"})})})}}),Object(c.jsx)(w,{children:Object(c.jsx)(h.a.Item,{children:Object(c.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Generate"})})})]})})},P=n(245),S=n(95),F=n.n(S),W=n(109),I=n.n(W),Q=n(135),T=n(141),B=n(97),R=n(140),L=n(247),N=n(136),H=n.n(N),z=n(241),E=n(137),J=n.n(E),K=n(138),U=n.n(K),q=function(e){var t=e.text,n=e.index,i=e.show,r=e.setShow;return Object(c.jsxs)(U.a,{isFlipped:i,children:[Object(c.jsx)(z.a,{style:{textAlign:"center",fontSize:"30px",height:"100px"},bodyStyle:{padding:"24px 0px",color:"white",background:"#3a3d3e"},onClick:function(){return r(!0)},children:n+1}),Object(c.jsx)(z.a,{style:{textAlign:"center",height:"100px"},bodyStyle:{padding:"5px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center"},onClick:function(){return r(!1)},children:Object(c.jsx)(J.a,{mode:"single",max:30,children:t})})]})},G=function(e){var t=e.clues,n=e.setActiveQuestionIndex,r=void 0===n?null:n,s=e.activeQuestionIndex,a=void 0===s?null:s,o=Object(i.useState)(Array.from({length:12},(function(){return!1}))),l=Object(B.a)(o,2),j=l[0],u=l[1],d=function(e){return function(t){j[e]=t,u(Object(T.a)(j))}},h=t.map((function(e,t){return{clue:e,index:t}})),x=H()(h,4),O=function(){var e=Object(Q.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(Array.from({length:12},(function(){return!1}))),e.next=3,new Promise((function(e){return setTimeout(e,600)}));case 3:0!==a&&r?r(a-1):R.b.success("That's all folks");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return u(Array(12).fill(e))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{style:{maxWidth:"800px",width:"100%"},children:[Object(c.jsx)(b.a,{gutter:[16,16],children:x.map((function(e){return e.map((function(e){var t=e.clue,n=e.index;return Object(c.jsx)(p.a,{sm:6,xs:8,children:Object(c.jsx)(q,{text:t,index:n,show:j[n],setShow:d(n)})},n)}))}))}),Object(c.jsxs)(L.b,{size:[8,8],wrap:!0,children:[Object(c.jsx)(m.a,{onClick:function(){return f(!0)},children:"Reveal All"}),Object(c.jsx)(m.a,{onClick:function(){return f(!1)},children:"Hide All"}),Object(c.jsx)(m.a,{onClick:O,children:"Next Question"})]})]})})},M=function(){var e,t=Object(l.f)().encodedQuestion;try{for(var n=JSON.parse(Object(C.decompressFromEncodedURIComponent)(t)),i=F()(n.clues);i.length>12;)i.pop();e=i}catch(r){return console.log(r),Object(c.jsx)(P.a,{status:"error",title:"Sorry, the URL is invalid",subTitle:"Please check the URL has been copied correctly.",extra:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.b,{to:"/create",type:"primary",children:Object(c.jsx)(m.a,{type:"primary",children:"Create a new question"})}),Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)(m.a,{children:"Play sample questions"})})]})})}return Object(c.jsx)(G,{clues:e})},_=n(112),D=function(){for(var e=Object(i.useState)(_.length-1),t=Object(B.a)(e,2),n=t[0],r=t[1],s=F()(_[n].Clues);s.length>12;)s.pop();return Object(c.jsx)(G,{clues:s,activeQuestionIndex:n,setActiveQuestionIndex:r})},V=s.a.Footer,X=s.a.Content,Y=function(){return Object(c.jsxs)(s.a,{style:{minHeight:"100vh"},children:[Object(c.jsxs)(o.a,{children:[Object(c.jsxs)(a.a,{theme:"dark",mode:"horizontal",children:[Object(c.jsx)(a.a.Item,{icon:Object(c.jsx)(j.a,{}),children:Object(c.jsx)(o.b,{to:"/create",children:"Create your own questions"})}),Object(c.jsx)(a.a.Item,{icon:Object(c.jsx)(u.a,{}),children:Object(c.jsx)(o.b,{to:"/",children:"Play example questions"})})]}),Object(c.jsx)(X,{style:{maxWidth:"800px",width:"100%",margin:"auto",marginTop:"100px"},children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(D,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/create",children:Object(c.jsx)(A,{})}),Object(c.jsx)(l.a,{path:"/play/:encodedQuestion",children:Object(c.jsx)(M,{})})]})})]}),Object(c.jsxs)(V,{style:{textAlign:"center"},children:["Connections \xa92021 Created by ",Object(c.jsx)("a",{target:"_blank",href:"https://github.com/tomgb/",children:"Tom Banister"})]})]})};Object(r.render)(Object(c.jsx)(Y,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.153d93ad.chunk.js.map