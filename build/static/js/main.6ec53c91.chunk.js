(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(8),r=a.n(i),s=a(16),c=a(165),l=a(163),o=a(44),d=a.n(o),u=a(63),p=a(64),j=a.n(p),b=function(){var e=Object(u.a)(d.a.mark((function e(t,a,n){var i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-in-boundary"),{params:{bl_latitude:a.lat,bl_longitude:a.lng,tr_longitude:n.lng,tr_latitude:n.lat},headers:{"x-rapidapi-host":"travel-advisor.p.rapidapi.com","x-rapidapi-key":"2a6f7cec7cmsha4ae3ca3e7766eep1b34f9jsn148121e61479"}});case 3:return i=e.sent,r=i.data.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t||!a){e.next=7;break}return e.next=4,j.a.get("https://community-open-weather-map.p.rapidapi.com/find",{params:{lat:t,lon:a},headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"2a6f7cec7cmsha4ae3ca3e7766eep1b34f9jsn148121e61479"}});case 4:return n=e.sent,i=n.data,e.abrupt("return",i);case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),m=a(87),g=a(153),O=a(154),f=a(155),x=a(167),y=a(168),v=a(81),w=a.n(v),C=a(58),T=a(151),k=a(11),_=Object(T.a)((function(e){return{title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),N=a(5),S=function(e){var t=e.onPlaceChanged,a=e.onLoad,n=_();return Object(N.jsx)(g.a,{position:"static",children:Object(N.jsxs)(O.a,{className:n.toolbar,children:[Object(N.jsx)(f.a,{variant:"h5",className:n.title,children:"Travel Advisor"}),Object(N.jsxs)(x.a,{display:"flex",children:[Object(N.jsx)(f.a,{variant:"h6",className:n.title,children:"Explore new places"}),Object(N.jsx)(m.a,{onLoad:a,onPlaceChanged:t,children:Object(N.jsxs)("div",{className:n.search,children:[Object(N.jsx)("div",{className:n.searchIcon,children:Object(N.jsx)(w.a,{})}),Object(N.jsx)(y.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})]})})]})]})})},R=a(161),E=a(162),P=a(171),I=a(166),A=a(172),B=a(156),L=a(157),z=a(158),D=a(170),F=a(159),K=a(160),W=a(82),H=a.n(W),U=a(83),G=a.n(U),J=a(169),V=Object(T.a)((function(){return{chip:{margin:"5px 5px 5px 0"},subtitle:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"},spacing:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),M=function(e){var t,a,n,i=e.place,r=e.selected,s=e.refProp;r&&(null===s||void 0===s||null===(t=s.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var c=V();return Object(N.jsxs)(B.a,{elevation:6,children:[Object(N.jsx)(L.a,{style:{height:350},image:i.photo?i.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:i.name}),Object(N.jsxs)(z.a,{children:[Object(N.jsx)(f.a,{gutterBottom:!0,variant:"h5",children:i.name}),Object(N.jsxs)(x.a,{display:"flex",justifyContent:"space-between",my:2,children:[Object(N.jsx)(J.a,{name:"read-only",value:Number(i.rating),readOnly:!0}),Object(N.jsxs)(f.a,{component:"legend",children:[i.num_reviews," review",i.num_reviews>1&&"s"]})]}),Object(N.jsxs)(x.a,{display:"flex",justifyContent:"space-between",children:[Object(N.jsx)(f.a,{component:"legend",children:"Price"}),Object(N.jsx)(f.a,{gutterBottom:!0,variant:"subtitle1",children:i.price_level})]}),Object(N.jsxs)(x.a,{display:"flex",justifyContent:"space-between",children:[Object(N.jsx)(f.a,{component:"legend",children:"Ranking"}),Object(N.jsx)(f.a,{gutterBottom:!0,variant:"subtitle1",children:i.ranking})]}),null===i||void 0===i||null===(a=i.awards)||void 0===a?void 0:a.map((function(e){return Object(N.jsxs)(x.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:[Object(N.jsx)("img",{src:e.images.small}),Object(N.jsx)(f.a,{variant:"subtitle2",color:"textSecondary",children:e.display_name})]})})),null===i||void 0===i||null===(n=i.cuisine)||void 0===n?void 0:n.map((function(e){var t=e.name;return Object(N.jsx)(D.a,{size:"small",label:t,className:c.chip},t)})),i.address&&Object(N.jsxs)(f.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",className:c.subtitle,children:[Object(N.jsx)(H.a,{}),i.address]}),i.phone&&Object(N.jsxs)(f.a,{variant:"body2",color:"textSecondary",className:c.spacing,children:[Object(N.jsx)(G.a,{})," ",i.phone]})]}),Object(N.jsxs)(F.a,{children:[Object(N.jsx)(K.a,{size:"small",color:"primary",onClick:function(){return window.open(i.web_url,"_blank")},children:"Trip Advisor"}),Object(N.jsx)(K.a,{size:"small",color:"primary",onClick:function(){return window.open(i.website,"_blank")},children:"Website"})]})]})},Y=Object(T.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),Z=function(e){var t=e.places,a=e.type,i=e.setType,r=e.rating,c=e.setRating,o=e.childClicked,d=e.isLoading,u=Object(n.useState)([]),p=Object(s.a)(u,2),j=p[0],b=p[1],h=Y();return Object(n.useEffect)((function(){b((function(e){return Array(t.length).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[t]),Object(N.jsxs)("div",{className:h.container,children:[Object(N.jsx)(f.a,{variant:"h4",children:"Food & Dining around you"}),d?Object(N.jsx)("div",{className:h.loading,children:Object(N.jsx)(R.a,{size:"5rem"})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(E.a,{className:h.formControl,children:[Object(N.jsx)(P.a,{id:"type",children:"Type"}),Object(N.jsxs)(I.a,{id:"type",value:a,onChange:function(e){return i(e.target.value)},children:[Object(N.jsx)(A.a,{value:"restaurants",children:"Restaurants"}),Object(N.jsx)(A.a,{value:"hotels",children:"Hotels"}),Object(N.jsx)(A.a,{value:"attractions",children:"Attractions"})]})]}),Object(N.jsxs)(E.a,{className:h.formControl,children:[Object(N.jsx)(P.a,{id:"rating",children:"Rating"}),Object(N.jsxs)(I.a,{id:"rating",value:r,onChange:function(e){return c(e.target.value)},children:[Object(N.jsx)(A.a,{value:"",children:"All"}),Object(N.jsx)(A.a,{value:"3",children:"Above 3.0"}),Object(N.jsx)(A.a,{value:"4",children:"Above 4.0"}),Object(N.jsx)(A.a,{value:"4.5",children:"Above 4.5"})]})]}),Object(N.jsx)(l.a,{container:!0,spacing:3,className:h.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(N.jsx)(l.a,{ref:j[t],item:!0,xs:12,children:Object(N.jsx)(M,{selected:Number(o)===t,refProp:j[t],place:e})},t)}))})]})]})},q=a(84),Q=a(164),X=a(89),$=a(86),ee=a.n($),te=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],ae=Object(T.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}})),ne=function(e){var t,a=e.coords,n=e.places,i=e.setCoords,r=e.setBounds,s=e.setChildClicked,c=e.weatherData,l=Object(Q.a)("(min-width:600px)"),o=ae();return Object(N.jsx)("div",{className:o.mapContainer,children:Object(N.jsxs)(q.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_MAP_API_KEY},defaultCenter:a,center:a,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!0,zoomControl:!0,styles:te},onChange:function(e){i({lat:e.center.lat,lng:e.center.lng}),r({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return s(e)},children:[n.length&&n.map((function(e,t){return Object(N.jsx)("div",{className:o.markerContainer,lat:Number(e.latitude),lng:Number(e.longitude),children:l?Object(N.jsxs)(X.a,{elevation:3,className:o.paper,children:[Object(N.jsxs)(f.a,{className:o.typography,variant:"subtitle2",gutterBottom:!0,children:[" ",e.name]}),Object(N.jsx)("img",{className:o.pointer,src:e.photo?e.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}),Object(N.jsx)(J.a,{name:"read-only",size:"small",value:Number(e.rating),readOnly:!0})]}):Object(N.jsx)(ee.a,{color:"primary",fontSize:"large"})},t)})),(null===c||void 0===c||null===(t=c.list)||void 0===t?void 0:t.length)&&c.list.map((function(e,t){return Object(N.jsx)("div",{lat:e.coord.lat,lng:e.coord.lon,children:Object(N.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),height:"100px"})},t)}))]})})},ie=function(){var e=Object(n.useState)("restaurants"),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),j=Object(s.a)(p,2),m=j[0],g=j[1],O=Object(n.useState)(null),f=Object(s.a)(O,2),x=f[0],y=f[1],v=Object(n.useState)([]),w=Object(s.a)(v,2),C=w[0],T=w[1],k=Object(n.useState)([]),_=Object(s.a)(k,2),R=_[0],E=_[1],P=Object(n.useState)([]),I=Object(s.a)(P,2),A=I[0],B=I[1],L=Object(n.useState)(null),z=Object(s.a)(L,2),D=z[0],F=z[1],K=Object(n.useState)(null),W=Object(s.a)(K,2),H=W[0],U=W[1],G=Object(n.useState)(!1),J=Object(s.a)(G,2),V=J[0],M=J[1];Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;g({lat:a,lng:n})}))}),[]),Object(n.useEffect)((function(){var e=A.filter((function(e){return Number(e.rating)>d}));E(e)}),[d]),Object(n.useEffect)((function(){x&&(M(!0),h(m.lat,m.lng).then((function(e){return T(e)})),b(a,x.sw,x.ne).then((function(e){console.log(e),B(e.filter((function(e){return e.name&&e.num_reviews>0}))),E([]),u(""),M(!1)})))}),[x,a]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(c.a,{}),Object(N.jsx)(S,{onPlaceChanged:function(){var e=D.getPlace().geometry.location.lat(),t=D.getPlace().geometry.location.lng();g({lat:e,lng:t})},onLoad:function(e){return F(e)}}),Object(N.jsxs)(l.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(N.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(N.jsx)(Z,{isLoading:V,childClicked:H,places:R.length?R:A,type:a,setType:i,rating:d,setRating:u})}),Object(N.jsx)(l.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(ne,{setChildClicked:U,setBounds:y,setCoords:g,coords:m,places:R.length?R:A,weatherData:C})})]})]})};r.a.render(Object(N.jsx)(ie,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.6ec53c91.chunk.js.map