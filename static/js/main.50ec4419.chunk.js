(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{108:function(e){e.exports=JSON.parse('[{"id":1,"Question":"What links these?","Clues":["Scuba","Smart","Taser","Laser","Pin","Seal","Kiss","Sonar","Captcha","Who?","Wasp","Rip"],"Answer":"Acronyms"},{"id":2,"Question":"What links these?","Clues":["Atom","Peck","Hobbit","League","A lot","Spat","Rod","Faggot","Poncelet","Cable","Chain","Butt"],"Answer":"Obsolete units of measurement"},{"id":3,"Question":"What links these?","Clues":["Hot","Bubble","Foot","Eye","Public","Mats","Robe","House","Blood","Plug","Bird","Mud"],"Answer":"Baths"},{"id":4,"Question":"What links these?","Clues":["American","Humble","Cottage","Pumpkin","Mud","Lemon","Ocean","Cheese","Fish","Pecan","Sweet Potato","Funeral"],"Answer":"Types of Pie"},{"id":5,"Question":"What links these?","Clues":["Azerbaijan","Belarus","China","Estonia","Finland","Georgia","Kazakhstan","North Korea","Latvia","Lithuania","Mongolia","Norway","Poland","Ukraine"],"Answer":"Types of Pie"},{"id":6,"Question":"What links these?","Clues":["Rot","Note","Fall","Rest","Hills","Patrol","Loose","Stool","Wear","Path","Print","Ball"],"Answer":"Foot"},{"id":7,"Question":"What links these?","Clues":["Craft","Wall","Recycled","News","Sand","Wrapping","Litmus","Filter","Blotting","Note","Toilet","Waste"],"Answer":"Paper"}]')},163:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var c=n(106),i=n.n(c),r=n(128),s=n(139),a=n(111),o=n(6),l=n(0),j=n(24),u=n(240),d=n(241),h=n(140),x=n(67),b=n(37),O=n(247),p=n(47),m=n(245),f=n(246),y=n(52),g=n(23),v=n(249),C=n(250),k=n(129),w=(n(162),n(163),n(107)),A=n.n(w),P=n(130),S=n.n(P),F=n(131),W=n.n(F),I=n(84),T=n(108),Q=n(112),B=n(242),R=n(244),L=n(243),N=n(97),H=n(248),z=n(144),E=function(e){var t=e.FormItem,n=e.AddButton;return Object(o.jsx)(B.a.List,{name:"clues",children:function(e,c){var i=c.add,r=c.remove;return Object(o.jsxs)(o.Fragment,{children:[e.map((function(e,n){return Object(o.jsx)("div",{children:t({field:e,index:n,remove:r})},e.key)})),Object(o.jsx)(n,{add:i})]})}})},J=function(e){var t=Object(I.compressToEncodedURIComponent)(JSON.stringify(e));console.log(e);var n=window.location.origin+"/connections/#/play/"+t;R.a.confirm({title:"Game successfully created",content:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Open this link to play the game"}),Object(o.jsx)("a",{target:"_blank",href:n,children:n})]}),icon:Object(o.jsx)(N.a,{style:{color:"#52c41a"}}),maskClosable:!0,okText:"Play Game",cancelText:"Close",onOk:function(){window.open(n,"_blank")},onCancel:function(){}})},K=function(e){var t=e.label,n=void 0===t?null:t,c=e.children;return Object(o.jsxs)(x.a,{style:{marginLeft:"10px",marginRight:"20px"},children:[Object(o.jsx)(b.a,{span:8,style:{textAlign:"right",paddingRight:"10px",lineHeight:"32px"},children:n}),Object(o.jsx)(b.a,{span:16,children:c})]})},U=function(){return Object(o.jsx)("div",{style:{maxWidth:"500px"},children:Object(o.jsxs)(B.a,{layout:"horizontal",initialValues:{clues:Array(12).fill("")},onFinish:J,children:[Object(o.jsx)(K,{label:"Answer:",children:Object(o.jsx)(B.a.Item,{name:"answer",children:Object(o.jsx)(L.a,{placeholder:"The connection"})})}),Object(o.jsx)(E,{FormItem:function(e){var t=e.field,n=e.index,c=e.remove;return Object(o.jsx)(K,{label:n+1+":",children:Object(o.jsx)(B.a.Item,Object(Q.a)(Object(Q.a)({},t),{},{name:t.name,fieldKey:t.fieldKey,style:{marginBottom:"8px"},children:Object(o.jsx)(L.a,{placeholder:"Clue",suffix:Object(o.jsx)(H.a,{style:{color:"#F66"},onClick:function(){return c(t.name)}})})}))})},AddButton:function(e){var t=e.add;return Object(o.jsx)(K,{children:Object(o.jsx)(B.a.Item,{children:Object(o.jsx)(p.a,{type:"dashed",onClick:function(){return t()},block:!0,icon:Object(o.jsx)(z.a,{}),children:"Add Clue"})})})}}),Object(o.jsx)(K,{children:Object(o.jsx)(B.a.Item,{children:Object(o.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Start"})})})]})})},q=u.a.Footer,M=u.a.Content,G=function(e){var t=e.text,n=e.index,c=e.show,i=e.setShow;return Object(o.jsxs)(S.a,{isFlipped:c,children:[Object(o.jsx)(d.a,{style:{textAlign:"center",fontSize:"30px",height:"100px"},bodyStyle:{padding:"24px 0px",color:"white",background:"#3a3d3e"},onClick:function(){return i(!0)},children:n+1}),Object(o.jsx)(d.a,{style:{textAlign:"center",height:"100px"},bodyStyle:{padding:"5px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center"},onClick:function(){return i(!1)},children:Object(o.jsx)(k.Textfit,{mode:"single",max:30,children:t})})]})},_=function(e){var t=e.clues,n=e.setActiveQuestionIndex,c=void 0===n?null:n,j=e.activeQuestionIndex,u=void 0===j?null:j,d=Object(l.useState)(Array.from({length:12},(function(){return!1}))),m=Object(a.a)(d,2),f=m[0],y=m[1],g=function(e){return function(t){f[e]=t,y(Object(s.a)(f))}},v=t.map((function(e,t){return{clue:e,index:t}})),C=W()(v,4),k=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(Array.from({length:12},(function(){return!1}))),e.next=3,new Promise((function(e){return setTimeout(e,600)}));case 3:0!==u&&c?c(u-1):h.b.success("That's all folks");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:{maxWidth:"800px",width:"100%"},children:[C.map((function(e,t){return Object(o.jsx)(x.a,{gutter:[16,16],children:e.map((function(e){var t=e.clue,n=e.index;return Object(o.jsx)(b.a,{span:6,children:Object(o.jsx)(G,{text:t,index:n,show:f[n],setShow:g(n)})},n)}))},t)})),Object(o.jsxs)(O.b,{size:[8,8],wrap:!0,children:[Object(o.jsx)(p.a,{onClick:function(){y(Array.from({length:12},(function(){return!0})))},children:"Reveal All"}),Object(o.jsx)(p.a,{onClick:function(){y(Array.from({length:12},(function(){return!1})))},children:"Hide All"}),Object(o.jsx)(p.a,{onClick:k,children:"Next Question"})]})]})})},D=function(){var e=Object(l.useState)(T.length-1),t=Object(a.a)(e,2),n=t[0],c=t[1];console.log(n);for(var i=A()(T[n].Clues);i.length>12;)i.pop();return Object(o.jsx)(_,{clues:i,activeQuestionIndex:n,setActiveQuestionIndex:c})},V=function(){var e,t=Object(g.f)().encodedQuestion;try{e=JSON.parse(Object(I.decompressFromEncodedURIComponent)(t))}catch(c){return console.log(c),Object(o.jsx)(m.a,{status:"error",title:"Sorry, the URL is invalid",subTitle:"Please check the URL has been copied correctly.",extra:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y.b,{to:"/create",type:"primary",children:Object(o.jsx)(p.a,{type:"primary",children:"Create a new question"})}),Object(o.jsx)(y.b,{to:"/",children:Object(o.jsx)(p.a,{children:"Play sample questions"})})]})})}var n=A()(e.clues);return Object(o.jsx)(_,{clues:n})},X=function(){return Object(o.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(o.jsxs)(y.a,{children:[Object(o.jsxs)(f.a,{theme:"dark",mode:"horizontal",children:[Object(o.jsx)(f.a.Item,{icon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(y.b,{to:"/create",children:"Create your own questions"})}),Object(o.jsx)(f.a.Item,{icon:Object(o.jsx)(C.a,{}),children:Object(o.jsx)(y.b,{to:"/",children:"Play example questions"})})]}),Object(o.jsx)(M,{style:{maxWidth:"800px",width:"100%",margin:"auto",marginTop:"100px"},children:Object(o.jsxs)(g.c,{children:[Object(o.jsx)(g.a,{exact:!0,path:"/",children:Object(o.jsx)(D,{})}),Object(o.jsx)(g.a,{exact:!0,path:"/create",children:Object(o.jsx)(U,{})}),Object(o.jsx)(g.a,{path:"/play/:encodedQuestion",children:Object(o.jsx)(V,{})})]})})]}),Object(o.jsxs)(q,{style:{textAlign:"center"},children:["Connections \xa92021 Created by ",Object(o.jsx)("a",{target:"_blank",href:"https://github.com/tomgb/",children:"Tom Banister"})]})]})};Object(j.render)(Object(o.jsx)(X,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.50ec4419.chunk.js.map