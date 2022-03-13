(function(){"use strict";var t={315:function(t,e,o){var s=o(9242),n=o(3396);const i={class:"main-wrapper"};function a(t,e,o,s,a,r){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l)])}var r={name:"App",components:{}},l=o(89);const d=(0,l.Z)(r,[["render",a]]);var c=d;const u={class:"main-wrapper"};function p(t,e,o,s,i,a){const r=(0,n.up)("Header"),l=(0,n.up)("PostList");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(r,{title:"Vue-Blog"}),(0,n.Wm)(l)])}var m=o(7139);const h=t=>((0,n.dD)("data-v-3489964c"),t=t(),(0,n.Cn)(),t),f={class:"main-header"},v={class:"header-wrapper"},w={class:"nav-bar"},_=(0,n.Uk)("Home"),y=(0,n.Uk)("Posts"),b=h((()=>(0,n._)("div",{class:"search-bar"},[(0,n._)("input",{type:"text",value:""}),(0,n.Uk)(" Search ")],-1)));function g(t,e,o,s,i,a){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("h1",null,(0,m.zw)(o.title),1),(0,n._)("div",v,[(0,n._)("nav",w,[(0,n.Wm)(r,{class:"nav-link",to:"/"},{default:(0,n.w5)((()=>[_])),_:1}),(0,n.Wm)(r,{class:"nav-link",to:"/posts"},{default:(0,n.w5)((()=>[y])),_:1})]),b])])}var C={name:"HeaderComponent",components:{},props:{title:String},methods:{async createPost(){const t=await fetch("https://jsonplaceholder.typicode.com/posts").then((t=>t.json()));this.posts=t}}};const P=(0,l.Z)(C,[["render",g],["__scopeId","data-v-3489964c"]]);var k=P;const x=t=>((0,n.dD)("data-v-d67e4470"),t=t(),(0,n.Cn)(),t),D={class:"posts-wrapper"},j=(0,n.Uk)("Create Post"),B=x((()=>(0,n._)("option",{value:"title"},"Post Title",-1))),W=x((()=>(0,n._)("option",{value:"body"},"Post Text",-1))),I=x((()=>(0,n._)("option",{value:"id"},"Post ID",-1))),M=[B,W,I],S={class:"post-item"},O={class:"post-buttons"},U=(0,n.Uk)(" Open Post "),$=(0,n.Uk)(" Update Post "),z=(0,n.Uk)(" Delete Post ");function L(t,e,o,i,a,r){const l=(0,n.up)("PostForm"),d=(0,n.up)("modal-box"),c=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("div",D,[(0,n.Wm)(d,{show:a.isModalBoxShow,onHide:r.toggleModalBox},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{onCreate:r.addPost},null,8,["onCreate"])])),_:1},8,["show","onHide"]),(0,n.Wm)(c,{onClick:r.toggleModalBox},{default:(0,n.w5)((()=>[j])),_:1},8,["onClick"]),(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.selectedSort=t),onChange:e[1]||(e[1]=(...e)=>t.sortPosts&&t.sortPosts(...e))},M,544),[[s.bM,a.selectedSort]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Search","onUpdate:modelValue":e[2]||(e[2]=t=>a.searchQuery=t)},null,512),[[s.nr,a.searchQuery]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.searchList,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"posts",key:e.id},[(0,n._)("div",S,[(0,n._)("h3",null,(0,m.zw)(e.title),1),(0,n._)("h3",null,(0,m.zw)(e.id),1),(0,n._)("p",null,(0,m.zw)(e.body),1),(0,n._)("div",O,[(0,n.Wm)(c,{class:"update-button",onClick:o=>t.$router.push(`/posts/${e.id}`)},{default:(0,n.w5)((()=>[U])),_:2},1032,["onClick"]),(0,n.Wm)(c,{onClick:t=>r.updatePost(e.id)},{default:(0,n.w5)((()=>[$])),_:2},1032,["onClick"]),(0,n.Wm)(c,{onClick:t=>r.deletePost(e.id),class:"delete-button"},{default:(0,n.w5)((()=>[z])),_:2},1032,["onClick"])])])])))),128))])}const T={class:"custom-button"};function Z(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("button",T,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var H={name:"CustomButton"};const E=(0,l.Z)(H,[["render",Z],["__scopeId","data-v-fe646a02"]]);var F=E;function Q(t,e,o,i,a,r){return o.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-box",onClick:e[1]||(e[1]=(...t)=>r.hideModalBox&&r.hideModalBox(...t))},[(0,n._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"modal-box__content"},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var V={name:"modal-box",props:{show:{type:Boolean,default:!1}},methods:{hideModalBox(){this.$emit("hide",!1)}}};const K=(0,l.Z)(V,[["render",Q],["__scopeId","data-v-3172f130"]]);var Y=K;const q={class:"post-form"},A={class:"input-wrapper"},J=["value"],N=["value"],G=(0,n.Uk)("Create Post");function R(t,e,o,i,a,r){const l=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("form",q,[(0,n._)("div",A,[(0,n._)("input",{value:a.post.title,onInput:e[0]||(e[0]=t=>a.post.title=t.target.value),type:"text",placeholder:"Title"},null,40,J),(0,n._)("input",{value:a.post.body,onInput:e[1]||(e[1]=t=>a.post.body=t.target.value),type:"text",placeholder:"Text"},null,40,N)]),(0,n.Wm)(l,{onClick:(0,s.iM)(r.createPost,["prevent"]),class:"update-button"},{default:(0,n.w5)((()=>[G])),_:1},8,["onClick"])])}var X={name:"PostList",components:{CustomButton:F},props:{modelValue:String},data(){return{post:{id:null,body:"",title:"",userId:1}}},methods:{createPost(){this.post={id:101,title:this.post.title,body:this.post.body},this.$emit("create",this.post),this.post={title:"",body:""}}}};const tt=(0,l.Z)(X,[["render",R],["__scopeId","data-v-db52def8"]]);var et=tt,ot={name:"PostList",components:{PostForm:et,CustomButton:F,ModalBox:Y},data(){return{posts:[],isModalBoxShow:!1,post:{body:"sdf",title:"sdfsdfsdfsdf"},selectedSort:"",searchQuery:""}},watch:{},computed:{sortedPosts(){return"id"===this.selectedSort?[...this.posts].sort(((t,e)=>t.id-e.id)):[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},searchList(){return this.sortedPosts.filter((t=>t.title.includes(this.searchQuery)))}},methods:{async getPosts(){const t=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((t=>t.json()));this.posts=t},async addPost(t){const e=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({id:this.posts[this.posts.length-1].id+1??1,title:t.title,body:t.body,userId:t.userId}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>t.json()));this.posts.unshift(e),this.toggleModalBox()},deletePost(t){fetch(`https://jsonplaceholder.typicode.com/posts/${t}`,{method:"DELETE"}),this.posts=this.posts.filter((e=>e.id!==t))},updatePost(t){const e={id:t,title:this.post.title,body:this.post.body,userId:1};this.posts.splice(t-1,1,e)},toggleModalBox(){this.isModalBoxShow=!this.isModalBoxShow}},mounted(){this.getPosts()}};const st=(0,l.Z)(ot,[["render",L],["__scopeId","data-v-d67e4470"]]);var nt=st,it={name:"MainWrapper",components:{Header:k,PostList:nt},props:{msg:String}};const at=(0,l.Z)(it,[["render",p]]);var rt=at;const lt={class:"posts-wrapper"};function dt(t,e,o,s,i,a){const r=(0,n.up)("Comment");return(0,n.wg)(),(0,n.iD)("div",lt,[(0,n._)("div",null,[(0,n._)("h3",null,(0,m.zw)(i.post.title),1),(0,n._)("p",null,(0,m.zw)(i.post.body),1),(0,n._)("p",null,(0,m.zw)(t.$route.params.id),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.comments,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"comments",key:t.id},[(0,n.Wm)(r,{comment:t,onEdit:a.editComment,onDelete:a.deleteComment},null,8,["comment","onEdit","onDelete"])])))),128))])}const ct={class:"comment-wrapper"},ut=(0,n.Uk)("Edit"),pt=(0,n.Uk)(" Delete ");function mt(t,e,o,s,i,a){const r=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("div",ct,[(0,n._)("h3",null,(0,m.zw)(o.comment.name),1),(0,n._)("h4",null,(0,m.zw)(o.comment.email),1),(0,n._)("p",null,(0,m.zw)(o.comment.body),1),(0,n.Wm)(r,{onClick:e[0]||(e[0]=t=>a.editComment(o.comment.id))},{default:(0,n.w5)((()=>[ut])),_:1}),(0,n.Wm)(r,{onClick:e[1]||(e[1]=t=>a.deleteComment(o.comment.id)),class:"delete-button"},{default:(0,n.w5)((()=>[pt])),_:1})])}var ht={name:"PostList",props:{comment:{id:null,title:"",body:"",email:""}},components:{CustomButton:F},data(){return{}},methods:{editComment(t){this.$emit("edit",t)},deleteComment(t){this.$emit("delete",t)}}};const ft=(0,l.Z)(ht,[["render",mt],["__scopeId","data-v-1ab77e1a"]]);var vt=ft,wt={name:"PostList",components:{Comment:vt},data(){return{post:{id:null,title:"",body:"",userId:1},comments:[]}},methods:{async getFullPost(){const t=await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then((t=>t.json()));this.post=t},async getComments(){const t=await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`).then((t=>t.json()));this.comments=t},editComment(t){console.log("edit",t)},deleteComment(t){this.comments=this.comments.filter((e=>e.id!==t))}},mounted(){this.getFullPost(),this.getComments()}};const _t=(0,l.Z)(wt,[["render",dt],["__scopeId","data-v-7ade27c0"]]);var yt=_t,bt=o(678);const gt=[{path:"/",component:rt},{path:"/posts/:id",component:yt}],Ct=(0,bt.p7)({routes:gt,history:(0,bt.PO)("/vue-test-blog/")});var Pt=Ct;(0,s.ri)(c).use(Pt).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,i){if(!s){var a=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],i=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,a=s[0],r=s[1],l=s[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var c=l(o)}for(e&&e(s);d<a.length;d++)i=a[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},s=self["webpackChunkvue_blog"]=self["webpackChunkvue_blog"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(315)}));s=o.O(s)})();
//# sourceMappingURL=app.a0df3afc.js.map