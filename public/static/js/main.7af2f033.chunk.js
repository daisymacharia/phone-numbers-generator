(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},21:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),i=(a(21),a(11)),c=a(12),l=a(14),d=a(13),m=a(15),u=a(2),h=a.n(u),p=(a(42),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,data:null},a.generate=function(){a.setState({isLoading:!0}),h.a.post("/phonenumbers/generate").then(function(e){e.data&&a.setState({isLoading:!1,data:e.data,file:e.data.fileName})}).catch(function(){a.setState({error:"An error occured, please try again"})})},a.sortAscending=function(){a.setState({isLoading:!0}),h.a.post("/phonenumbers/change-sort-order?sortOrder=asc").then(function(e){e.data&&a.setState({isLoading:!1,file:e.data.fileName})}).catch(function(){a.setState({error:"An error occured, please try again"})})},a.sortDescending=function(){a.setState({isLoading:!0}),h.a.post("/phonenumbers/change-sort-order?sortOrder=desc").then(function(e){e.data&&a.setState({isLoading:!1,file:e.data.fileName})}).catch(function(){a.setState({error:"An error occured, please try again"})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("p",{className:"main-title"},"Random Phone Number Generator"),r.a.createElement("p",{className:"sub-title"},'Click "Generate" Button to generate a list of phone numbers'),r.a.createElement("div",{className:"sort-links"},"Sort: ",r.a.createElement("span",{onClick:this.sortAscending},"Ascending"),r.a.createElement("span",{onClick:this.sortDescending},"Descending")),r.a.createElement("div",{className:"stat-area"},this.state.isLoading&&r.a.createElement("div",{className:"loading"}),this.state.data&&r.a.createElement("div",{className:"generated-data"},r.a.createElement("span",null," Total Generated Numbers: ",this.state.data.count),r.a.createElement("br",null),r.a.createElement("span",null," Min Phone Number: ",this.state.data.min),r.a.createElement("br",null),r.a.createElement("span",null," Max Phone Number: ",this.state.data.max),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:this.state.file,download:!0},r.a.createElement("button",{type:"submit"},"Download File")))),this.state.error&&r.a.createElement("div",null,this.state.error)),r.a.createElement("button",{className:"generate-btn",onClick:this.generate},"Generate"))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.7af2f033.chunk.js.map