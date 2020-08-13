(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(70)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=a(9),i=a(3),s=a(4),u=a(6),m=a(5),g=(a(25),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.changeHandler=function(t){e.setState({query:t.currentTarget.value})},e.submitHandler=function(t){t.preventDefault(),e.state.query&&(e.props.onSubmit(e.state.query),e.setState({query:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.submitHandler},r.a.createElement("button",{className:"SearchForm-button",type:"submit"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",value:this.state.query,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeHandler})))}}]),a}(n.Component)),h=(a(26),function(e){var t=e.item;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{className:"ImageGalleryItem-image",url:t.urls.full,src:t.urls.small,alt:t.description}))}),d=(a(27),function(e){var t=e.images,a=e.onClick;return r.a.createElement("ul",{className:"ImageGallery",onClick:function(e){return a(e)}},t.map((function(e){return r.a.createElement(h,{key:e.id,item:e})})))}),f=a(19),p=a.n(f),y=(a(49),function(e){var t=e.onClick;return r.a.createElement("button",{className:"Button",type:"button",onClick:t},"Load more")}),b=(a(50),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).modalRootRef=document.querySelector("#modal-root"),e.keyDownHandler=function(t){"Escape"===t.code&&e.props.toggleModal()},e.clickHandler=function(t){"DIV"===t.target.nodeName&&e.props.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler),this.props.clearUrl()}},{key:"render",value:function(){return Object(o.createPortal)(r.a.createElement("div",{className:"Overlay",onClick:this.clickHandler},r.a.createElement("img",{className:"Modal",src:this.props.url,alt:""})),this.modalRootRef)}}]),a}(n.Component)),v=a(8),E=a.n(v);E.a.defaults.baseURL="https://api.unsplash.com/search/photos/",E.a.defaults.headers.common.Authorization="Client-ID x9AhgqdVedkj92knzoynGC04XskWUCMDGAsuL6NaIdM";var k=function(e,t){return E.a.get("?query=".concat(e,"&per_page=12&page=").concat(t)).then((function(e){return e.data.results}))},S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,isLoading:!1,error:null,showModal:!1,largeImageUrl:""},e.formSubmitHandler=function(t){e.setState({images:[],searchQuery:t,page:1,error:null})},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({isLoading:!0}),k(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.openLargeImage=function(t){var a=t.target;e.setState({largeImageUrl:a.attributes.url.value})},e.clearUrl=function(){e.setState({largeImageUrl:""})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.images,r=a.searchQuery,o=a.largeImageUrl;t.searchQuery!==r&&this.fetchImages(),n&&t.images!==n&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.largeImageUrl!==o&&o&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.showModal,l=e.largeImageUrl,c=t.length>0&&!a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onSubmit:this.formSubmitHandler}),n&&r.a.createElement("h1",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430."),r.a.createElement(d,{images:t,onClick:this.openLargeImage}),r.a.createElement("div",{className:"LoaderWrapper"},r.a.createElement(p.a,{visible:a,type:"BallTriangle",color:"#3f51b5",height:80,width:80})),c&&r.a.createElement(y,{onClick:this.fetchImages}),o&&r.a.createElement(b,{url:l,toggleModal:this.toggleModal,clearUrl:this.clearUrl}))}}]),a}(n.Component);a(68),a(69);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.000d0af6.chunk.js.map