webpackJsonp([0],[,,function(t,e,n){function s(t){n(17)}var a=n(0)(n(11),n(30),s,null,null);t.exports=a.exports},function(t,e,n){"use strict";var s=n(1),a=n(36),i=n(26),o=n.n(i),r=n(24),u=n.n(r),c=n(28),l=n.n(c),h=n(27),v=n.n(h);s.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"loading",component:o.a},{path:"/about_me",name:"about_me",component:u.a},{path:"/skills",name:"skills",component:l.a},{path:"/project",name:"project",component:v.a}]})},function(t,e){},function(t,e){},,function(t,e,n){function s(t){n(22)}var a=n(0)(n(9),n(35),s,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=n(7),i=n.n(a),o=n(3),r=n(6),u=n.n(r),c=n(4);n.n(c);n(5),s.default.config.productionTip=!1,s.default.use(u.a),new s.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),a=n.n(s);e.default={name:"app",components:{list:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(2),i=n.n(a);e.default={name:"about_me",data:function(){return{text:[],index:0,zz:"",istrue:!1}},components:{gAnimation:i.a},methods:{show:function(){var t=(new Date).getFullYear()-1993,e=(new Date).getMonth()+0-7,n=(new Date).getDate(),s=(new Date).getHours(),a=(new Date).getMinutes(),i=(new Date).getSeconds(),o='\n        <h1 id="c3">Keep dreaming</h1>\n        <h1>姓名：高权</h1>\n        <h1>性别：男</h1>\n        <h1>籍贯：山东</h1>\n        <h1>年龄：'+t+"岁"+e+"个月"+n+"天</h1>\n        <h1>"+s+"小时"+a+"分钟"+i+"秒</h1>\n        <h1>毕业于烟台大学文经学院</h1>\n        <h1>计算机科学与技术专业</h1>\n        <h1>手机：17602178970</h1>\n        <h1>邮箱：kevinl7@163.com</h1>\n        <h1>github : <a href='https://github.com/Kevinl7' target='_blank'>点击进入</a></h1>\n      ";this.zz=o.substring(0,this.index++)}},mounted:function(){var t=this;s=setInterval(function(){t.show()},100)},watch:{index:function(t,e){t>=399&&(window.clearInterval(s),this.index=0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gAanimation"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list",data:function(){return{bottomNav:"about me"}},methods:{handleChange:function(t){this.bottomNav=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",data:function(){return{activeTab:"tab1"}},methods:{handleTabChange:function(t){this.activeTab=t}},mounted:function(){var t=this;setTimeout(function(){t.$router.push({name:"about_me"})},3e3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n.n(s);e.default={name:"project",components:{gAnimation:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n.n(s);e.default={name:"skills",data:function(){return{open:!1,open2:!1,open3:!1}},methods:{z:function(){this.open?(this.open2=!0,this.open=!1,this.open3=!1):(this.open=!0,this.open2=!1,this.open3=!1)},zz:function(){this.open2?(this.open3=!0,this.open2=!1,this.open=!1):(this.open2=!0,this.open3=!1,this.open=!1)},zzz:function(){this.open3?(this.open=!0,this.open2=!1,this.open3=!1):(this.open3=!0,this.open2=!1,this.open=!1)}},components:{gAnimation:a.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"static/img/xhr.837a61f.jpeg"},function(t,e,n){function s(t){n(16)}var a=n(0)(n(10),n(29),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(20)}var a=n(0)(n(12),n(33),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(21)}var a=n(0)(n(13),n(34),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(18)}var a=n(0)(n(14),n(31),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(19)}var a=n(0)(n(15),n(32),s,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_me"},[n("h1",{domProps:{innerHTML:t._s(t.zz)}}),t._v(" "),t.istrue?n("gAnimation"):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gAnimation"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("mu-list",[n("mu-list-item",[n("h1",[t._v("传统PC端网站")]),t._v(" "),n("span",{staticClass:"b1",attrs:{id:"box"}},[t._v("html")]),n("span",{staticClass:"b2",attrs:{id:"box"}},[t._v("css")]),n("span",{staticClass:"b3",attrs:{id:"box"}},[t._v("jquery")]),t._v(" "),n("h3",[n("a",{attrs:{href:"https://github.com/Kevinl7/jinshuiqi",target:"_blank"}},[t._v("查看源码")]),t._v(" "),n("a",{attrs:{href:"https://kevinl7.github.io/jinshuiqi/",target:"_blank"}},[t._v("在线预览")])])]),t._v(" "),n("mu-list-item",[n("h1",[t._v("外卖app")]),t._v(" "),n("span",{staticClass:"b5",attrs:{id:"box"}},[t._v("vue")]),n("span",{staticClass:"b4",attrs:{id:"box"}},[t._v("ES6")]),n("span",{staticClass:"b6",attrs:{id:"box"}},[t._v("webpack")]),t._v(" "),n("h3",[n("a",{attrs:{href:"https://github.com/Kevinl7/aaaaaa",target:"_blank"}},[t._v("查看源码")]),t._v(" "),n("a",{attrs:{href:"https://kevinl7.github.io/#/goods",target:"_blank"}},[t._v("在线预览")])])]),t._v(" "),n("mu-list-item",[n("h1",[t._v("移动端简历")]),t._v(" "),n("span",{staticClass:"b5",attrs:{id:"box"}},[t._v("vue")]),n("span",{staticClass:"b4",attrs:{id:"box"}},[t._v("ES6")]),n("span",{staticClass:"b7",attrs:{id:"box"}},[t._v("ESlint")]),t._v(" "),n("h3",[n("a",{attrs:{href:"https://github.com/Kevinl7/aaaaaa",target:"_blank"}},[t._v("查看源码")]),t._v(" "),n("a",{attrs:{href:"https://kevinl7.github.io/#/goods",target:"_blank"}},[t._v("在线预览")])])]),t._v(" "),n("mu-list-item",[n("h1",{staticStyle:{padding:"30px 0 20px 0"}},[n("a",{attrs:{href:"https://github.com/Kevinl7",target:"_blank"}},[t._v("查看更多")])])])],1),t._v(" "),n("gAnimation")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills"},[n("mu-list",[n("mu-list-item",{attrs:{toggleNested:"",open:t.open,id:"mucss"},on:{click:t.z}},[n("h1",[t._v("技术栈")]),t._v(" "),n("mu-list-item",{slot:"nested"},[n("h2",{attrs:{id:"hcss"}},[t._v("HTML   CSS3")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("javaScript")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("Vue   jquery")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("Node   ES6")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("svn   git")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("ESlint   webpack")]),t._v(" "),n("h2",{attrs:{id:"hcss"}},[t._v("微信公众号")])])],1),t._v(" "),n("mu-list-item",{attrs:{toggleNested:"",open:t.open2},on:{click:t.zz}},[n("h1",[t._v("工作经历")]),t._v(" "),n("mu-list-item",{slot:"nested"},[n("h2",{attrs:{id:"hcss2"}},[t._v("2015.08 ~2016.12")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("烟台佳创网络科技有限公司")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("主要使用div+css+jq")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("负责网站前端页面实现")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("2017.03 ~至今")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("苏州益发特科技有限公司")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("主要使用vue+ES6+node")]),t._v(" "),n("h2",{attrs:{id:"hcss2"}},[t._v("负责项目页面实现后端数据交互")])])],1),t._v(" "),n("mu-list-item",{attrs:{toggleNested:"",open:t.open3},on:{click:t.zzz}},[n("h1",[t._v("自我评价")]),t._v(" "),n("mu-list-item",{slot:"nested"},[n("h2",{attrs:{id:"hcss3"}},[t._v("一个性格幽默、做事认真的人")]),t._v(" "),n("h2",{attrs:{id:"hcss3"}},[t._v("喜欢研究碰到的各种新技术")]),t._v(" "),n("h2",{attrs:{id:"hcss3"}},[t._v("善于沟通有较强的团队交流能力")]),t._v(" "),n("h2",{attrs:{id:"hcss3"}},[t._v("对工作充满热情, 吃苦耐劳")]),t._v(" "),n("h2",{attrs:{id:"hcss3"}},[t._v("能在较大的压力下保持良好的工作状态")])])],1)],1),t._v(" "),t.open3||!t.open&&!t.open2&&!t.open3?n("gAnimation"):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-paper",[n("mu-bottom-nav",{attrs:{value:t.bottomNav,id:"list-nav"},on:{change:t.handleChange}},[n("mu-bottom-nav-item",{attrs:{to:"/about_me",value:"about me",title:"me"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{to:"/skills",value:"skills",title:"skills"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{to:"/project",value:"project",title:"project"}})],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{src:n(23),alt:"",id:"loadingImg"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),"/"!==t.$route.path?n("list"):t._e()],1)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.dbad44f919a8d44af0f0.js.map