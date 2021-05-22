(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(4)),j=c(2),h=c(8),l=c.n(h),m=c(10),o=c(11),d=(c(28),c(0)),u=function(e){var t=e.match;if(!t)return null;var c=t.team1===e.teamName?t.team2:t.team1,a="/teams/".concat(c),n=e.teamName===t.matchWinner;return Object(d.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:a,children:c})}),Object(d.jsx)("h2",{className:"match-date",children:t.date}),Object(d.jsx)("h3",{className:"match-venue",children:t.venue}),Object(d.jsxs)("h3",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]}),Object(d.jsxs)("div",{className:"additional-detail",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:t.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:t.team2}),Object(d.jsx)("h3",{children:"Man of the match"}),Object(d.jsx)("p",{children:t.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[t.umpire1,",",t.umpire2]})]})]})},b=(c(35),function(e){var t=e.match,c=e.teamName,a=t.team1===c?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:n,children:a})}),Object(d.jsxs)("p",{children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}),O=(c(36),c(20)),x=function(){var e=Object(a.useState)({teamMatches:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"teamName",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(u,{teamName:c.teamName,match:c.teamMatches[0]})]}),c.teamMatches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(i.b,{to:"/team/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(d.jsx)("h1",{children:"Team Not Found"})},f=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/team/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=(c(38),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),c.length<1?Object(d.jsx)("h1",{children:"Data not found for this request"}):Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]})}),N=(c(39),c(40),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTiles",children:Object(d.jsxs)(i.b,{to:"/teams/".concat(t),children:[" ",Object(d.jsx)("h1",{children:t})]})})}),p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{children:"IPL DashBoard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(N,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/team/:teamName/matches/:year",children:Object(d.jsx)(v,{})}),Object(d.jsx)(j.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(p,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.66fe99f1.chunk.js.map