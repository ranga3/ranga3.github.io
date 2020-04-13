webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},i={name:"App",components:{Navbar:a("VU/8")(null,n,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(i,s,!1,null,null,null).exports,r=a("/ocq"),p=a("yviF"),d=a.n(p),c=(a("881v"),d.a.initializeApp({apiKey:"AIzaSyA0Re_O9jgQtmsyGu4vSWqHAbNyn795sZc",authDomain:"vuefs-prod-c085e.firebaseapp.com",databaseURL:"https://vuefs-prod-c085e.firebaseio.com",projectId:"vuefs-prod-c085e",storageBucket:"vuefs-prod-c085e.appspot.com",messagingSenderId:"16800849086",appId:"1:16800849086:web:ed80aaf550cf60a633d2ef",measurementId:"G-SMSZZG0T2S"}).firestore()),m={name:"dashboard",data:function(){return{Employees:[]}},created:function(){var e=this;c.collection("Employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_Id:t.data().employee_Id,name:t.data().name,dept:t.data().dept,position:t.data().position};console.log(t.employee_id),e.Employees.push(a)})})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.Employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n "+e._s(t.employee_Id)+":"+e._s(t.name)+"\n"),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_Id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"new-employee"}}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees manger")])])}]},v=a("VU/8")(m,u,!1,null,null,null).exports,_={name:"edit-employee",data:function(){return{employee_Id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("Employees").where("employee_Id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_Id=e.data().employee_Id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("Employees").where("employee_Id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_Id=t.data().employee_Id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("Employees").where("employee_Id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_Id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_Id}})})})})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v(" Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[e._v(" Employee ID#\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_Id,expression:"employee_Id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_Id},on:{input:function(t){t.target.composing||(e.employee_Id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[e._v(" Name\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[e._v(" Department\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[e._v(" Position\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},f=a("VU/8")(_,y,!1,null,null,null).exports,h={name:"new-employee",data:function(){return{employee_Id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("Employees").add({employee_Id:this.employee_Id,name:this.name,dept:this.dept,position:this.position}).then(function(t){console.log("Client added: ",t.id),e.$router.push("/")}).catch(function(e){return console.log(err)})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v(" New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_Id,expression:"employee_Id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_Id},on:{input:function(t){t.target.composing||(e.employee_Id=t.target.value)}}}),e._v(" "),a("label",[e._v("EmployeeId#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field cols12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},C=a("VU/8")(h,g,!1,null,null,null).exports,w={name:"view-Employee",data:function(){return{employee_Id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("Employees").where("employee_Id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_Id=e.data().employee_Id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("Employees").where("employee_Id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_Id=t.data().employee_Id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure you to delete?")&&c.collection("Employees").where("employee_Id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name)+" ")])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_Id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee"}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},I=a("VU/8")(w,E,!1,null,null,null).exports;o.a.use(r.a);var b=new r.a({routes:[{path:"/",name:"Dashboard",component:v},{path:"/edit/:employee_id",name:"edit-employee",component:f},{path:"/:employee_id",name:"view-employee",component:I},{path:"/new",name:"new-employee",component:C}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:b,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.779a43818c025558c7de.js.map