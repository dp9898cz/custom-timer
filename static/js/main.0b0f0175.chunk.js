(this["webpackJsonpcustom-timer"]=this["webpackJsonpcustom-timer"]||[]).push([[0],{17:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var i,r,c,o,a,d,s,l,u=t(0),b=t.n(u),j=t(9),m=t.n(j),h=(t(17),t(2)),f=t(4),O=t(3),p=t.p+"static/media/save.6e28cebf.svg",x=t(1);function v(e,n){var t=Object(u.useState)((function(){var t=window.localStorage.getItem(n);return null!==t?JSON.parse(t):e})),i=Object(f.a)(t,2),r=i[0],c=i[1];return Object(u.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,c]}var w=function(){var e=Object(u.useState)(Date.now()),n=Object(f.a)(e,2),t=n[0],i=n[1],r=v(Date.parse("1 Jan 2025")),c=Object(f.a)(r,2),o=c[0],a=c[1],d=v("Year 2025","eventName"),s=Object(f.a)(d,2),l=s[0],b=s[1];Object(u.useEffect)((function(){var e=setInterval((function(){return i(Date.now())}),1e3);return function(){return clearInterval(e)}}),[]);var j=function(e){return e<10?"0"+e:e};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(g,{children:l}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(k,{children:[Object(x.jsx)(N,{children:o>t?Math.floor((o-t)/1e3/3600/24):"0"}),Object(x.jsx)(S,{children:"days"})]}),Object(x.jsxs)(k,{children:[Object(x.jsx)(N,{children:o>t?j(Math.floor((o-t)/1e3/3600%24)):"00"}),Object(x.jsx)(S,{children:"hours"})]}),Object(x.jsxs)(k,{children:[Object(x.jsx)(N,{children:o>t?j(Math.floor((o-t)/1e3/60%60)):"00"}),Object(x.jsx)(S,{children:"minutes"})]}),Object(x.jsxs)(k,{children:[Object(x.jsx)(N,{children:o>t?j(Math.floor((o-t)/1e3%60)):"00"}),Object(x.jsx)(S,{children:"seconds"})]})]}),Object(x.jsxs)(I,{children:[Object(x.jsx)(D,{children:Object(x.jsx)("input",{id:"eventName",placeholder:"Event name",maxLength:"18"})}),Object(x.jsx)(E,{children:Object(x.jsx)("input",{id:"eventDate",type:"datetime-local"})}),Object(x.jsx)("button",{onClick:function(){var e=document.getElementById("eventName"),n=document.getElementById("eventDate"),i=e.value,r=n.value,c=Date.parse(r),o=!1;""===i&&(e.style.border="1px solid red",setTimeout((function(){e.style.border="1px solid white"}),600),o=!0),(isNaN(c)||c<=t)&&(n.style.border="1px solid red",setTimeout((function(){n.style.border="1px solid white"}),600),o=!0),o||(a(c),b(i),n.value=null,e.value=null)},children:Object(x.jsx)("img",{src:p,alt:"Save"})})]})]})},g=O.a.div(i||(i=Object(h.a)(["\n    display: flex;\n    font-weight: 500;\n    font-size: 4rem;\n"]))),y=O.a.div(r||(r=Object(h.a)(["\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]))),k=O.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem 1.8rem;\n"]))),N=O.a.div(o||(o=Object(h.a)(["\n    font-size: 5rem;\n"]))),S=O.a.div(a||(a=Object(h.a)(["\n    font-size: 1.5rem;\n"]))),I=O.a.div(d||(d=Object(h.a)(["\n    margin-top: 16rem;\n    display: flex;\n    button {\n        background: none;\n        outline: none;\n        border: none;\n        margin-left: 1rem;\n        color: white;\n        cursor: pointer;\n        img {\n            width: 3rem;\n            height: 3rem;\n        }\n        :active {\n            filter: invert(0.3);\n        }\n    }\n"]))),D=O.a.div(s||(s=Object(h.a)(["\n    input {\n        background: none;\n        border: 1px solid white;\n        border-radius: 7px;\n        padding: 0.6rem;\n        width: 13rem;\n        outline: none;\n        color: white;\n        font-size: 1.2rem;\n        height: 3rem;\n        cursor: pointer;\n        margin-right: 1rem;\n        ::placeholder {\n            color: white;\n            opacity: 0.5;\n        }\n    }\n"]))),E=O.a.div(l||(l=Object(h.a)(["\n    input {\n        background: none;\n        color: white;\n        border: 1px solid white;\n        border-radius: 7px;\n        font-size: 1.2rem;\n        width: 16.5rem;\n        height: 3rem;\n        outline: none;\n        padding: 0.6rem;\n        ::-webkit-calendar-picker-indicator {\n            filter: invert(1);\n        }\n        ::-webkit-datetime-edit-day-field:focus,\n        ::-webkit-datetime-edit-month-field:focus,\n        ::-webkit-datetime-edit-hour-field:focus,\n        ::-webkit-datetime-edit-minute-field:focus,\n        ::-webkit-datetime-edit-year-field:focus {\n            background-color: #bfa8a6;\n            color: white;\n            outline: none;\n        }\n    }\n"])));m.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0b0f0175.chunk.js.map