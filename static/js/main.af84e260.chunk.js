(this["webpackJsonprobofriends-react-redux-v2"]=this["webpackJsonprobofriends-react-redux-v2"]||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(3),u=n(15),s=n(16),l=n.n(s),h=n(1),d="CHANGE_SEARCH_FIELD",b={searchField:""},m="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",f="REQUEST_ROBOTS_FAILED",E={isPending:!1,robots:[],error:void 0},v=Object(i.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(h.a)(Object(h.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)(Object(h.a)({},e),{},{isPending:!0});case p:return Object(h.a)(Object(h.a)({},e),{},{robots:t.payload,isPending:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});default:return e}}}),O=[l.a,u.a],g=Object(i.d)(v,i.a.apply(void 0,O)),j=n(7),y=(n(28),n(5)),S=n(6),C=n(9),R=n(8),w=function(){return function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:p,payload:e}}(t))})).catch((function(t){return e((n=t.message,{type:f,payload:n}));var n}))}},N=n(2),k=Object(N.a)([function(e){return e.search}],(function(e){return e.searchField})),F=function(e){return e.requestRobots},_=Object(N.a)([F],(function(e){return e.isPending})),P=Object(N.a)([F],(function(e){return e.robots})),T=(Object(N.a)([F],(function(e){return e.error})),function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2"},a.a.createElement("img",{alt:"robo",src:"https://robohash.org/".concat(t,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))}),D=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(T,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},L=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search your Friend",onChange:t}))},q=(n(29),function(e){return a.a.createElement("div",{className:"scroll-area"},e.children)}),x=function(e){Object(C.a)(n,e);var t=Object(R.a)(n);function n(e){var r;return Object(y.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(S.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops Something is not working"):this.props.children}}]),n}(r.Component),B=(n(30),function(e){Object(C.a)(n,e);var t=Object(R.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.isPending,o=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"robo friends"),a.a.createElement(L,{searchChange:n}),a.a.createElement(q,null,a.a.createElement(x,null,a.a.createElement(D,{robots:o}))))}}]),n}(r.Component)),I=Object(N.b)({searchField:k,isPending:_,robots:P}),U=Object(j.b)(I,(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onRequestRobots:function(){return e(w())}}}))(B);n(31);c.a.render(a.a.createElement(j.a,{store:g},a.a.createElement(U,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.af84e260.chunk.js.map