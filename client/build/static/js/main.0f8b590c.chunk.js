(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(30),i=n.n(r),c=n(11),o=n(2),h=n(3),u=n(5),l=n(4),j=(n(36),n(10)),d=n(6),b=n.n(d),p=function(e,t,n){return b.a.post("/api/auth/signup",{name:e,email:t,password:n}).then((function(e){return e.data})).catch((function(e){return e}))},m=function(e,t,n){return b.a.post("/api/auth/signupHousehold",{name:e,username:t,pin:n}).then((function(e){return e.data})).catch((function(e){return e}))},O=function(e,t){return b.a.post("/api/auth/login",{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return e}))},g=function(e,t,n){return b.a.post("/api/auth/loginHousehold",{name:e,username:t,pin:n}).then((function(e){return e.data})).catch((function(e){return e}))},x=function(){return b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e}))},f=(n(55),n(0)),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",name:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(j.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.email,r=n.password;p(a,s,r).then((function(t){t.message?e.setState({message:t.message,name:"",email:"",password:""}):(e.props.setUser(t),e.props.history.push("/createOrJoinHousehold"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"formContainer",children:[Object(f.jsxs)("p",{className:"fontFix",children:[" Did you know around ",Object(f.jsx)("span",{children:"98.2%"})," of households' worldwide forget one item per shopping session? "]}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(f.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Sign up!"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(j.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,s=n.password;O(a,s).then((function(t){console.log(t),t.message?e.setState({message:t.message,email:"",password:""}):(e.props.setUser(t),console.log(e.props.user,"im here"),e.props.user.household?(console.log("i am here, where there is a household, even tho false"),e.props.history.push("/household")):e.props.history.push("/createOrJoinHousehold"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"formContainer",children:[Object(f.jsx)("h2",{children:"Log in"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"email",children:"email: "}),Object(f.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Log in!"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),C=n(7),S=(n(57),n(9)),F=n.p+"static/media/background.70d3c97c.gif",q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)("section",{children:Object(f.jsxs)("div",{className:"mainDiv",children:[Object(f.jsx)("div",{className:"backgroundImage",children:Object(f.jsx)("img",{src:F,alt:"background-img"})}),Object(f.jsx)("div",{className:"introBox",children:Object(f.jsxs)("div",{className:"banner",children:[Object(f.jsx)("h1",{children:"PlanEss"}),Object(f.jsx)("h2",{children:" planning your pantry should not be hard"}),Object(f.jsxs)("button",{className:"signUpUnder",children:[" ",Object(f.jsxs)(S.b,{to:"signup",children:[" ",Object(f.jsx)("span",{className:"hoverfun",children:" Start planning Now"})," "]})]})]})})]})})}}]),n}(a.Component),k=(n(66),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(){x().then((function(){e.props.setUser(null)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return console.log("this are the props",this.props),Object(f.jsx)(f.Fragment,{children:this.props.user?Object(f.jsxs)("nav",{children:[Object(f.jsx)("div",{className:"togetherFront",children:Object(f.jsx)(S.b,{to:"/household",children:Object(f.jsx)("h3",{children:"PlanEss"})})}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/",onClick:function(){return e.handleLogout()},style:{textDecoration:"none",color:"rgb(236, 217, 238)"},children:Object(f.jsx)("h4",{children:"Log out"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/profile",children:" See my profile ?? "})})]})]}):Object(f.jsxs)("nav",{children:[Object(f.jsx)("div",{className:"togetherFront",children:Object(f.jsx)(S.b,{to:"/",children:Object(f.jsx)("h3",{children:"PlanEss"})})}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/signup",style:{textDecoration:"none"},children:Object(f.jsx)("h4",{className:"authbutton2",children:" Sign up"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/login",style:{textDecoration:"none"},children:Object(f.jsx)("h4",{className:"authbutton2",children:"Log in"})})})]})]})})}}]),n}(a.Component)),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",username:"",pin:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(j.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.username,r=n.pin;m(a,s,r).then((function(t){t.message?e.setState({message:t.message,name:"",username:"",pin:""}):(console.log("should be saving"),e.props.setHousehold(t),e.props.history.push("/household"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"formContainer",children:[Object(f.jsxs)("h1",{children:["Hi ",this.props.user.name," !!! "]}),Object(f.jsx)("h1",{children:"Create a Household"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name your home: "}),Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(f.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"pin",children:"Set a 4-digit pin: "}),Object(f.jsx)("input",{type:"password",name:"pin",value:this.state.password,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Sign up!"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",username:"",pin:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(j.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.username,r=n.pin;g(a,s,r).then((function(t){console.log(t),t.message?e.setState({message:t.message,name:"",username:"",pin:""}):(e.props.setHousehold(t),e.props.history.push("/household"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"formContainer",children:[Object(f.jsxs)("h1",{children:["Hi ",this.props.user.name," !!! "]}),Object(f.jsx)("h1",{children:"Join an existing Household"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(f.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"pin",children:"Set a 4-digit pin: "}),Object(f.jsx)("input",{type:"password",name:"pin",value:this.state.password,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Sign up!"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),N=function(e,t,n,a,s){return b.a.post("/api/items/",{name:e,quantity:t,quantityType:n,addedBy:a,urgent:s}).then((function(e){return e.data})).catch((function(e){return e}))},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",quantity:"",quantityType:"",addedBy:"",urgent:!1},e.handleChange=function(t){var n=t.target.name,a="checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(j.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.quantity,r=n.quantityType,i=n.urgent,c=e.props.user.name;N(a,s,r,c,i).then((function(t){e.setState({name:"",quantity:"",quantityType:"",addedBy:""}),e.props.getItems()}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(f.jsx)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"quantityType",children:"Quantity Type:"}),Object(f.jsx)("input",{type:"text",name:"quantityType",value:this.state.quantityType,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"urgent",children:"Is it urgent?:"}),Object(f.jsx)("input",{type:"checkbox",name:"urgent",value:this.state.urgent,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.Component),H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).deleteItem=function(t){b.a.delete("/api/items/".concat(t)).then((function(){e.props.getItems()})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.filter((function(t){return t.name.toLowerCase().includes(e.props.query.toLowerCase())}));return this.props.urgent&&(t=t.filter((function(e){return e.urgent}))),Object(f.jsxs)("div",{children:[this.props.items.length<0&&Object(f.jsx)("h2",{children:"You have no Items added in your Shopping list"}),t.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(S.b,{to:"/household/items/".concat(t._id),children:Object(f.jsx)("h3",{children:t.name})}),Object(f.jsxs)("p",{children:[t.quantity," ",t.quantityType]}),Object(f.jsxs)("p",{children:["Added by: ",t.addedBy]}),Object(f.jsx)("p",{children:t.addedAt.slice(0,10)}),t.urgent?Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"URGENT!"})}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)("button",{onClick:function(){return e.deleteItem(t._id)},children:"Delete"})]},t._id)}))]})}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleQueryChange=function(t){e.props.setQuery(t.target.value)},e.handleChange=function(t){e.props.setUrgent(t.target.checked)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{type:"text",value:this.props.query,placeholder:"Search items",onChange:this.handleQueryChange}),Object(f.jsx)("label",{children:"Only Urgent:"}),Object(f.jsx)("input",{type:"checkbox",checked:this.props.urgent,onChange:this.handleChange})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={items:[],addForm:!1,query:"",urgent:!1},e.setQuery=function(t){e.setState({query:t})},e.setUrgent=function(t){e.setState({urgent:t})},e.toggleAddForm=function(){e.setState((function(e){return{addForm:!e.addForm}}))},e.getItems=function(){b.a.get("/api/items").then((function(t){e.setState({items:t.data.basket})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Shopping List:"}),Object(f.jsx)("button",{onClick:this.toggleAddForm,children:"Add Item"}),this.state.addForm?Object(f.jsx)(T,{user:this.props.user,getItems:this.getItems}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)(I,{query:this.state.query,urgent:this.state.urgent,setQuery:this.setQuery,setUrgent:this.setUrgent}),Object(f.jsx)(H,{items:this.state.items,getItems:this.getItems,query:this.state.query,urgent:this.state.urgent})]})}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{children:["Hello, ",this.props.user.name,"!"]}),Object(f.jsx)(A,{user:this.props.user})]})}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(f.jsx)("input",{type:"text",name:"name",value:this.props.name,onChange:this.props.handleChange}),Object(f.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(f.jsx)("input",{type:"number",name:"quantity",value:this.props.quantity,onChange:this.props.handleChange}),Object(f.jsx)("label",{htmlFor:"quantityType",children:"Quantity Type:"}),Object(f.jsx)("input",{type:"text",name:"quantityType",value:this.props.quantityType||!1,onChange:this.props.handleChange}),Object(f.jsx)("label",{htmlFor:"urgent",children:"Is it urgent?:"}),Object(f.jsx)("input",{type:"checkbox",name:"urgent",checked:this.props.urgent,onChange:this.props.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Confirm"})]})}}]),n}(a.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={item:null,name:"",quantity:"",quantityType:"",urgent:!1,editForm:!1,error:null},e.getItem=function(){var t=e.props.match.params.id;b.a.get("/api/items/".concat(t)).then((function(t){e.setState({item:t.data,name:t.data.name,quantity:t.data.quantity,quantityType:t.data.quantityType,urgent:t.data.urgent})})).catch((function(t){console.log(t),404===t.response.status&&e.setState({error:"Item not Found"})}))},e.deleteItem=function(){b.a.delete("/api/items/".concat(e.state.item._id)).then((function(){e.props.history.push("/household")})).catch((function(e){return console.log(e)}))},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e.handleChange=function(t){var n=t.target.name,a="checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(j.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.quantity,r=n.quantityType,i=n.urgent;b.a.put("/api/items/".concat(e.state.item._id),{name:a,quantity:s,quantityType:r,urgent:i}).then((function(t){e.setState({item:t.data,name:t.data.name,quantity:t.data.quantity,quantityType:t.data.quantityType,urgent:t.data.urgent,editForm:!1})})).catch((function(e){console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getItem()}},{key:"render",value:function(){return this.state.error?Object(f.jsx)("h2",{children:this.state.error}):this.state.item?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h3",{children:["Item: ",this.state.item.name]}),Object(f.jsxs)("h3",{children:["Quantity: ",this.state.item.quantity," ",this.state.item.quantityType]}),Object(f.jsxs)("h3",{children:["Added by: ",this.state.item.addedBy," in ",this.state.item.addedAt.slice(0,10)]}),this.state.urgent?Object(f.jsx)("h3",{children:"URGENT!"}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)("button",{onClick:this.deleteItem,children:"Delete"}),Object(f.jsx)("button",{onClick:this.toggleEditForm,children:"Edit"}),this.state.editForm&&Object(f.jsx)(E,Object(c.a)(Object(c.a)({},this.state),{},{handleSubmit:this.handleSubmit,handleChange:this.handleChange}))]}):Object(f.jsx)(f.Fragment,{})}}]),n}(a.Component),Q=(n(67),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"linksJoinOrCreate",children:[Object(f.jsx)(S.b,{to:"/loginHousehold",children:Object(f.jsx)("h3",{children:"Joining an existing household?"})}),Object(f.jsxs)(S.b,{to:"/SignupHousehold",children:[Object(f.jsx)("h3",{children:" Create a new household :-)"})," "]})]})}}]),n}(a.Component)),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(f.jsx)("input",{type:"text",name:"name",value:this.props.name,onChange:this.props.handleChange}),Object(f.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(f.jsx)("input",{type:"text",name:"email",value:this.props.email,onChange:this.props.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Confirm"})]})}}]),n}(a.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:e.props.user.name,email:e.props.user.email,user:e.props.user,household:null,editForm:!1,error:null},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(j.a)({},a,s))},e.getHousehold=function(){b.a.get("/api/household").then((function(t){e.setState({household:t.data})}))},e.getUser=function(){b.a.get("/api/household/user").then((function(t){e.setState({user:t.data})}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,s=n.email;b.a.put("/api/household/profile",{name:a,email:s}).then((function(t){console.log(t.data),e.setState({name:t.data.name,email:t.data.email,editForm:!1}),e.props.setUser(t.data),e.getUser()})).catch((function(e){console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getUser(),this.getHousehold()}},{key:"render",value:function(){return this.state.household?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h1",{children:["Welcome to ",this.state.household.name]}),Object(f.jsxs)("h3",{children:["Name: ",this.state.user.name]}),Object(f.jsxs)("h3",{children:["Email: ",this.state.user.email]}),Object(f.jsx)("button",{onClick:this.toggleEditForm,children:"Edit"}),this.state.editForm&&Object(f.jsx)(B,Object(c.a)(Object(c.a)({},this.state),{},{handleSubmit:this.handleSubmit,handleChange:this.handleChange}))]}):Object(f.jsx)(f.Fragment,{children:" "})}}]),n}(a.Component),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,household:e.props.household},e.setUser=function(t){e.setState({user:t})},e.setHousehold=function(t){e.setState({household:t})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(k,{user:this.state.user,setUser:this.setUser}),Object(f.jsx)(C.b,{exact:!0,path:"/",render:function(t){return Object(f.jsx)(q,Object(c.a)({setUser:e.setUser},t))}}),Object(f.jsx)(C.b,{exact:!0,path:"/login",render:function(t){return Object(f.jsx)(v,Object(c.a)({user:e.state.user,setUser:e.setUser},t))}}),Object(f.jsx)(C.b,{exact:!0,path:"/signup",render:function(t){return Object(f.jsx)(y,Object(c.a)({setUser:e.setUser},t))}}),Object(f.jsx)(C.b,{exact:!0,path:"/signupHousehold",render:function(t){return Object(f.jsx)(w,Object(c.a)({user:e.state.user,setUser:e.setUser,setHousehold:e.setHousehold},t))}}),Object(f.jsx)(C.b,{exact:!0,path:"/loginHousehold",render:function(t){return Object(f.jsx)(U,Object(c.a)({user:e.state.user,setUser:e.setUser,setHousehold:e.setHousehold},t))}}),Object(f.jsx)(C.b,{exact:!0,path:"/household",render:function(t){return e.state.user?Object(f.jsx)(D,Object(c.a)({user:e.state.user},t)):Object(f.jsx)(C.a,{to:"/"})}}),Object(f.jsx)(C.b,{exact:!0,path:"/createOrJoinHousehold",render:function(e){return Object(f.jsx)(Q,{})}}),Object(f.jsx)(C.b,{exact:!0,path:"/household/items/:id",render:function(t){return e.state.user?Object(f.jsx)(L,Object(c.a)({user:e.state.user},t)):Object(f.jsx)(C.a,{to:"/"})}}),Object(f.jsx)(C.b,{exact:!0,path:"/profile",render:function(t){return e.state.user?Object(f.jsx)(J,Object(c.a)({user:e.state.user,setUser:e.setUser,household:e.state.household},t)):Object(f.jsx)(C.a,{to:"/"})}})]})}}]),n}(s.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};b.a.get("/api/auth/loggedin").then((function(e){console.log("logged in user: ",e.data);var t=e.data;i.a.render(Object(f.jsx)(S.a,{children:Object(f.jsx)(P,{user:t})}),document.getElementById("root"))})),_()}},[[68,1,2]]]);
//# sourceMappingURL=main.0f8b590c.chunk.js.map