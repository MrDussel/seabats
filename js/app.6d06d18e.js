(function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/seabats/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07eb":function(e,t,n){},1:function(e,t){},3548:function(e,t,n){},"3a2e":function(e,t,n){"use strict";n("6a1f")},"3e1c":function(e,t,n){"use strict";n("79f5")},"3fca":function(e,t,n){"use strict";n("5f72")},"4f42":function(e,t,n){},5476:function(e,t,n){"use strict";n("fede")},"55e3":function(e,t,n){},"5be3":function(e,t,n){"use strict";n("07eb")},"5f72":function(e,t,n){},6448:function(e,t,n){},"6a1f":function(e,t,n){},"79f5":function(e,t,n){},"7f15":function(e,t,n){},"82bb":function(e,t,n){"use strict";n("7f15")},"83bd":function(e,t,n){"use strict";n("3548")},"8d7f":function(e,t,n){},"8fd6":function(e,t,n){"use strict";n("aadb")},"981b":function(e,t,n){"use strict";n("8d7f")},"99fa":function(e,t,n){},aadb:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("a913");var a=n("5040"),r=n.n(a),o=(n("e26b"),n("ee0f")),c=n.n(o),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("7a23")),s=Object(i["withScopeId"])("data-v-295a8f17");Object(i["pushScopeId"])("data-v-295a8f17");var l=Object(i["createTextVNode"])("MAP"),u=Object(i["createTextVNode"])("INFO"),d=Object(i["createVNode"])("footer",null,[Object(i["createVNode"])("p",null,[Object(i["createTextVNode"])(" MAP TILES: © "),Object(i["createVNode"])("a",{href:"https://www.openstreetmap.org/copyright"},"OpenStreetMap"),Object(i["createTextVNode"])(" contributors © "),Object(i["createVNode"])("a",{href:"https://carto.com/attributions"},"CARTO")]),Object(i["createVNode"])("p",null,[Object(i["createTextVNode"])(" WEBSITE: © 2021 Michael Schnerring, Sebastian Deuss | "),Object(i["createVNode"])("a",{href:"https://github.com/schnerring/seabats"},"GitHub")])],-1);Object(i["popScopeId"])();var p=s((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("router-link"),p=Object(i["resolveComponent"])("router-view");return Object(i["openBlock"])(),Object(i["createBlock"])(i["Fragment"],null,[Object(i["createVNode"])("nav",null,[Object(i["createVNode"])(c,{to:"/"},{default:s((function(){return[l]})),_:1}),Object(i["createVNode"])(c,{to:"/info"},{default:s((function(){return[u]})),_:1})]),Object(i["createVNode"])("main",null,[Object(i["createVNode"])(p)]),d],64)})),f=Object(i["defineComponent"])({});n("981b"),n("82bb");f.render=p,f.__scopeId="data-v-295a8f17";var h=f,b=n("1da1"),m=(n("96cf"),n("b0c0"),n("6c02")),v=Object(i["withScopeId"])("data-v-4a59f6e5");Object(i["pushScopeId"])("data-v-4a59f6e5");var g={class:"parent"},O={class:"timeline"},j={class:"map"};Object(i["popScopeId"])();var y=v((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("timeline"),s=Object(i["resolveComponent"])("leaflet-map");return Object(i["openBlock"])(),Object(i["createBlock"])("div",g,[Object(i["createVNode"])("div",O,[Object(i["createVNode"])(c,{events:e.events,tooltipContent:e.tooltipContent,onEventClick:e.highlightFlight,onDateRangeChanged:e.dateRangeChanged},null,8,["events","tooltipContent","onEventClick","onDateRangeChanged"])]),Object(i["createVNode"])("div",j,[Object(i["createVNode"])(s,{selectedPolylineId:e.selectedFlightId},null,8,["selectedPolylineId"])])])})),x=n("5530"),k=(n("99af"),n("d3b7"),n("25f0"),n("d81d"),n("4de4"),n("5a0c")),w=n.n(k),S=n("5502"),D=n("2ef0"),N=n("d4ec"),C=function e(t){Object(N["a"])(this,e),this.fields=t},R=Object(i["withScopeId"])("data-v-8ea8bb84");Object(i["pushScopeId"])("data-v-8ea8bb84");var V={id:"leaflet"};Object(i["popScopeId"])();var I=R((function(e,t,n,a,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])("div",V)})),B=n("b85c"),z=(n("4ec9"),n("3ca3"),n("ddb0"),n("a9e3"),n("7db0"),n("898b")),T=n("e11e"),_=(n("6cc5"),Object(i["defineComponent"])({data:function(){return{zoom:6,center:new T["LatLng"](35.917973,14.409943),map:void 0,polylines:new Map,selectedPolyline:void 0}},props:{polylineColor:{type:String,default:"white"},polylineWeight:{type:Number,default:1},polylineWeightHighlighted:{type:Number,default:2},polylineColorHighlighted:{type:String,default:"#1148fe"},selectedPolylineId:{type:String}},computed:Object(x["a"])({},Object(S["c"])(["flights"])),watch:{selectedPolylineId:function(){var e;if(null===(e=this.selectedPolyline)||void 0===e||e.style("stroke-width","1").style("stroke","white"),this.selectedPolyline=void 0,this.selectedPolylineId){this.selectedPolyline=Object(z["d"])(".polyline_".concat(this.selectedPolylineId)).style("stroke","".concat(this.polylineColorHighlighted)).style("stroke-width","".concat(this.polylineWeightHighlighted,"px"));var t=this.polylines.get(this.selectedPolylineId);if(t){if(!this.map)return;var n=t.getBounds();this.map.fitBounds(n)}}},flights:function(e){var t,n=this,a=Object(B["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(!this.polylines.has(r._id)){var o=r.traces.map((function(e){return new T["LatLng"](e.lat,e.lon)})),c=new T["Polyline"](o,{className:"polyline_".concat(r._id),color:this.polylineColor,weight:this.polylineWeight});this.polylines.set(r._id,c),c.addTo(this.map)}}}catch(u){a.e(u)}finally{a.f()}var i,s=Object(B["a"])(this.polylines.keys());try{var l=function(){var t,a=i.value,r=e.find((function(e){return e._id===a}));if(r)return"continue";null===(t=n.polylines.get(a))||void 0===t||t.remove(),n.polylines.delete(a)};for(s.s();!(i=s.n()).done;)l()}catch(u){s.e(u)}finally{s.f()}}},mounted:function(){this.map=new T["Map"]("leaflet",{zoomControl:!1,attributionControl:!1}),this.map.setView(this.center,this.zoom);var e=new T["TileLayer"]("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png");this.map.addLayer(e)},beforeUnmount:function(){var e;null===(e=this.map)||void 0===e||e.remove()}}));n("3a2e");_.render=I,_.__scopeId="data-v-8ea8bb84";var A=_,L=Object(i["withScopeId"])("data-v-37ce5392");Object(i["pushScopeId"])("data-v-37ce5392");var M={class:"timeline"},F={class:"d3",ref:"d3"},E={class:"info-bar"},P=Object(i["createVNode"])("div",{class:"event-info"},null,-1);Object(i["popScopeId"])();var Y=L((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("date-range"),s=Object(i["resolveComponent"])("flight-tooltip");return Object(i["openBlock"])(),Object(i["createBlock"])("div",M,[Object(i["createVNode"])("div",F,null,512),Object(i["createVNode"])("div",E,[Object(i["createVNode"])(c,{onDateRangeChanged:t[1]||(t[1]=function(t){return e.setDateRange(t)})}),P,e.tooltipContent?(Object(i["openBlock"])(),Object(i["createBlock"])("div",{class:"event-info",key:e.tooltipContent.title},[Object(i["createVNode"])(s,{content:e.tooltipContent},null,8,["content"])])):Object(i["createCommentVNode"])("",!0)])])})),H=(n("a15b"),n("4e82"),Object(i["withScopeId"])("data-v-479c438f"));Object(i["pushScopeId"])("data-v-479c438f");var $={class:"date-range"},G={class:"date-pager"},q={class:"current"};Object(i["popScopeId"])();var U=H((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("el-radio-button"),s=Object(i["resolveComponent"])("el-radio-group");return Object(i["openBlock"])(),Object(i["createBlock"])("div",$,[Object(i["createVNode"])(s,{modelValue:e.duration,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.duration=t}),size:"medium"},{default:H((function(){return[Object(i["createVNode"])(c,{label:"year"}),Object(i["createVNode"])(c,{label:"month"}),Object(i["createVNode"])(c,{label:"week",disabled:""}),Object(i["createVNode"])(c,{label:"day"})]})),_:1},8,["modelValue"]),Object(i["createVNode"])("div",G,[e.enabled?(Object(i["openBlock"])(),Object(i["createBlock"])("button",{key:0,class:"pager-button",onClick:t[2]||(t[2]=function(t){return e.previous()})}," < ")):Object(i["createCommentVNode"])("",!0),Object(i["createVNode"])("div",q,Object(i["toDisplayString"])(e.formattedDate),1),e.enabled?(Object(i["openBlock"])(),Object(i["createBlock"])("button",{key:1,class:"pager-button",onClick:t[3]||(t[3]=function(t){return e.next()})},">")):Object(i["createCommentVNode"])("",!0)])])})),W=(n("ebbd"),n("9aae")),K=n.n(W),Z=(n("1e5c"),n("13e1")),J=n.n(Z),X=Object(i["defineComponent"])({components:{ElRadioGroup:J.a,ElRadioButton:K.a},emits:["dateRangeChanged"],data:function(){return{selectedDate:new Date(2021,6,15),duration:"year"}},props:{enabled:{type:Boolean,default:!0}},watch:{dateRange:function(){this.$emit("dateRangeChanged",this.dateRange)}},computed:{formattedDate:function(){var e=this.duration;if("year"===e)return w()(this.selectedDate).format("YYYY").toString();if("month"===e)return w()(this.selectedDate).format("YYYY / MM").toString();if("day"===e)return w()(this.selectedDate).format("YYYY / MM / DD").toString();throw"Unsupported unitType ".concat(e)},dateRange:function(){var e=this.duration;return[w()(this.selectedDate).startOf(e).toDate(),w()(this.selectedDate).endOf(e).toDate()]}},methods:{previous:function(){var e=this.duration;this.selectedDate=w()(this.selectedDate).subtract(1,e).toDate()},next:function(){var e=this.duration;this.selectedDate=w()(this.selectedDate).add(1,e).toDate()}}});n("e977");X.render=U,X.__scopeId="data-v-479c438f";var Q=X,ee=Object(i["withScopeId"])("data-v-73929900");Object(i["pushScopeId"])("data-v-73929900");var te={id:"Tooltip-Container"},ne={class:"single-tooltip"};Object(i["popScopeId"])();var ae=ee((function(e,t,n,a,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])("div",te,[Object(i["createVNode"])("div",ne,[(Object(i["openBlock"])(!0),Object(i["createBlock"])(i["Fragment"],null,Object(i["renderList"])(e.content.fields,(function(e){return Object(i["openBlock"])(),Object(i["createBlock"])("span",{key:e.key},[Object(i["createVNode"])("strong",null,Object(i["toDisplayString"])(e.key),1),Object(i["createTextVNode"])(" "+Object(i["toDisplayString"])(e.value),1)])})),128))])])})),re=Object(i["defineComponent"])({props:{content:{type:C}}});n("3e1c");re.render=ae,re.__scopeId="data-v-73929900";var oe=re,ce=Object(i["defineComponent"])({emits:["eventClick","dateRangeChanged"],components:{DateRange:Q,FlightTooltip:oe},props:{minDate:{type:Date,default:new Date(2021,0,1)},maxDate:{type:Date,default:new Date(2021,11,31)},events:{type:Array,default:[]},tooltipContent:{type:C,default:void 0}},computed:{daysInDomain:function(){return w()(this.maxDate).diff(w()(this.minDate),"days",!0)},maxZoomFactor:function(){var e=4;return this.daysInDomain/e},labels:function(){var e=this.events.map((function(e){return{key:e.key,label:e.label}}));return Object(D["uniqBy"])(e,(function(e){return e.key}))}},data:function(){var e=this;return{debounceDateRangeChanged:Object(D["debounce"])((function(t,n){e.$emit("dateRangeChanged",t,n)}),1e3),zoomBehavior:{},zoomRect:{},margin:{top:10,right:30,bottom:10,left:150},xScale:{},zoomScale:{},yScale:{},xAxisDefinition:{},xAxis:{},tracksSelection:{},defaultSelection:[],svg:{},eventsSelection:{},clipRect:{},resizeObserver:new ResizeObserver(Object(D["debounce"])((function(t){e.onResize(t)}),250))}},methods:{resetZoom:function(){this.zoomBehavior.transform(this.zoomRect,z["g"])},setDateRange:function(e){var t=e[0],n=e[1];this.zoomScale=this.zoomScale.domain([t,n]),this.xAxisDefinition.scale(this.zoomScale),this.scalesChanged();var a=this.zoomScale.domain()[0],r=this.zoomScale.domain()[1];this.debounceDateRangeChanged(a,r)},zoom:function(e){this.zoomScale=e.transform.rescaleX(this.xScale),this.xAxisDefinition.scale(this.zoomScale),this.scalesChanged();var t=this.zoomScale.domain()[0],n=this.zoomScale.domain()[1];this.debounceDateRangeChanged(t,n)},onResize:function(e){var t=this;e.forEach((function(e){var n={height:e.contentRect.height,width:e.contentRect.width},a={height:Math.max(0,n.height-t.margin.top-t.margin.bottom),width:Math.max(0,n.width-t.margin.left-t.margin.right)};t.svg.attr("width",a.width).attr("height",a.height),t.zoomRect.attr("width",a.width).attr("height",a.height),t.zoomBehavior.extent([[0,0],[a.width,a.height]]),t.clipRect.attr("width",a.width).attr("height",a.height);var r=20;t.zoomScale.rangeRound([0,a.width]),t.xScale.rangeRound([0,a.width]),t.yScale.rangeRound([0,a.height-r]),t.scalesChanged()}))},scalesChanged:function(){var e=this;Object(z["e"])(".track-rect").attr("width",this.zoomScale.range()[1]).attr("height",this.yScale.bandwidth),Object(z["e"])(".track-group").attr("transform",(function(t){var n=e.yScale(t.key);return void 0===n?"translate(0, 0)":"translate(0, ".concat(n,")")})),Object(z["e"])(".event").attr("width",(function(t){var n=e.zoomScale(t.end),a=e.zoomScale(t.start);return Math.max(10,n-a)})).attr("height",this.yScale.bandwidth).attr("transform",(function(t){return"translate(".concat(e.zoomScale(t.start),", ").concat(e.yScale(t.key),")")})),this.xAxis.attr("transform","translate(0, ".concat(this.yScale.range()[1],")")).call(this.xAxisDefinition)}},watch:{events:function(){var e=this;this.eventsSelection=this.eventsSelection.data(this.events,(function(e){return e.key})).join((function(t){return t.append("rect").attr("class","event").attr("fill","var(--white)").on("click.select",(function(){Object(z["e"])(".selected-track").classed("selected-track",!1),Object(z["d"])(this).classed("selected-track",!0),Object(z["d"])(this).attr("selected")})).on("click.emit",(function(t,n){return e.$emit("eventClick",n)}))}),(function(e){return e}),(function(e){return e.selectAll(".selected-track").classed("selected-track",!1),e.remove()})),this.tracksSelection=this.tracksSelection.data(this.labels,(function(e){return e.key})).join((function(e){var t=e.append("g").attr("class","track-group");return t.append("rect").attr("class","track-rect").attr("fill","var(--grey2)"),t.append("text").attr("class","track-label").attr("text-anchor","end").attr("dominant-baseline","text-before-edge").attr("transform","translate(-10, 0)").attr("text-align","right").text((function(e){return e.label})),t}),(function(e){return e}),(function(e){return e.remove()})),this.yScale.domain(this.labels.map((function(e){return e.key})).sort()),this.scalesChanged()}},created:function(){this.xScale=Object(z["c"])().domain([this.minDate,this.maxDate]),this.zoomScale=this.xScale,this.yScale=Object(z["b"])().padding(.6),this.xAxisDefinition=Object(z["a"])(this.xScale)},mounted:function(){this.svg=Object(z["d"])(".d3").append("svg").attr("class","canvas").attr("transform","translate(".concat(this.margin.left,", ").concat(this.margin.top,")")).style("overflow","visible"),this.xAxis=this.svg.append("g").attr("class","x-axis").call(this.xAxisDefinition),this.tracksSelection=this.svg.append("g").attr("class","tracks-g").selectAll(".track"),this.zoomBehavior=Object(z["f"])().scaleExtent([.25,999999]).on("zoom",this.zoom),this.zoomRect=this.svg.append("rect").style("fill","none").style("pointer-events","all").call(this.zoomBehavior),this.clipRect=this.svg.append("defs").append("clipPath").attr("id","EventsClip").append("rect").attr("fill","transparent"),this.eventsSelection=this.svg.append("g").attr("class","events-g").attr("clip-path","url(#EventsClip)").selectAll(".event"),this.resizeObserver.observe(this.$refs["d3"]),this.$emit("dateRangeChanged",this.minDate,this.maxDate)}});n("8fd6"),n("3fca");ce.render=Y,ce.__scopeId="data-v-37ce5392";var ie=ce,se=Object(i["defineComponent"])({data:function(){return{events:[],tooltipContent:void 0,selectedFlightId:void 0}},methods:Object(x["a"])({dateRangeChanged:function(e,t){var n=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.getFlights({from:e,to:t});case 2:case"end":return a.stop()}}),a)})))()},highlightFlight:function(e){var t,n;this.selectedFlightId=e.data._id;var a=Object(D["find"])(this.aircrafts,(function(t){return t.icao===e.data.icao})),r=null===(t=Object(D["last"])(e.data.traces))||void 0===t?void 0:t.date,o=null===(n=Object(D["first"])(e.data.traces))||void 0===n?void 0:n.date,c=w()(r).diff(o,"minutes"),i=Math.floor(c/60),s=c%60;this.tooltipContent=new C([{key:"DATE",value:w()(e.data.date).format("YYYY-MM-DD")},{key:"TIME",value:w()(e.data.date).format("HH:mm")},{key:"DURATION",value:"".concat(i.toString(),"h ").concat(s,"m")},{key:"TYPE",value:a.model}])}},Object(S["b"])(["getAircrafts","getFlights"])),computed:Object(x["a"])({},Object(S["c"])(["aircrafts","flights"])),watch:{flights:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getAircrafts();case 2:t.events=e.filter((function(e){return e.traces&&e.traces.length>0})).map((function(e){var n=e.traces.map((function(e){return e.date})),a=Object(D["find"])(t.aircrafts,(function(t){return t.icao===e.icao}));return{data:e,label:a.model,key:e.icao,start:Object(D["first"])(n),end:Object(D["last"])(n)}}));case 3:case"end":return n.stop()}}),n)})))()}},components:{LeafletMap:A,Timeline:ie}});n("83bd");se.render=y,se.__scopeId="data-v-4a59f6e5";var le=se,ue=Object(i["withScopeId"])("data-v-66f0291a");Object(i["pushScopeId"])("data-v-66f0291a");var de={class:"parent"},pe={class:"child"},fe=Object(i["createVNode"])("h1",null,"Hello! You Need Data To Use This App",-1),he=Object(i["createVNode"])("p",null," Sorry, we currently don't have a license to publicly redistribute any of our test data. ",-1),be=Object(i["createVNode"])("p",null," Please contact one of the project maintainers to request a sample data set. ",-1),me={key:0,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-loader",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},ve=Object(i["createVNode"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),ge=Object(i["createVNode"])("line",{x1:"12",y1:"6",x2:"12",y2:"3"},null,-1),Oe=Object(i["createVNode"])("line",{x1:"16.25",y1:"7.75",x2:"18.4",y2:"5.6"},null,-1),je=Object(i["createVNode"])("line",{x1:"18",y1:"12",x2:"21",y2:"12"},null,-1),ye=Object(i["createVNode"])("line",{x1:"16.25",y1:"16.25",x2:"18.4",y2:"18.4"},null,-1),xe=Object(i["createVNode"])("line",{x1:"12",y1:"18",x2:"12",y2:"21"},null,-1),ke=Object(i["createVNode"])("line",{x1:"7.75",y1:"16.25",x2:"5.6",y2:"18.4"},null,-1),we=Object(i["createVNode"])("line",{x1:"6",y1:"12",x2:"3",y2:"12"},null,-1),Se=Object(i["createVNode"])("line",{x1:"7.75",y1:"7.75",x2:"5.6",y2:"5.6"},null,-1),De={key:1,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-upload",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},Ne=Object(i["createVNode"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),Ce=Object(i["createVNode"])("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"},null,-1),Re=Object(i["createVNode"])("polyline",{points:"7 9 12 4 17 9"},null,-1),Ve=Object(i["createVNode"])("line",{x1:"12",y1:"4",x2:"12",y2:"16"},null,-1),Ie={class:"status-text"},Be=Object(i["createVNode"])("p",null,[Object(i["createTextVNode"])(" If you want to provide your own data, "),Object(i["createVNode"])("a",{href:"https://github.com/schnerring/seabats/blob/main/README.md"},"read more about the expected data format"),Object(i["createTextVNode"])(". ")],-1);Object(i["popScopeId"])();var ze=ue((function(e,t,n,a,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])("div",de,[Object(i["createVNode"])("div",pe,[fe,he,be,Object(i["createVNode"])("label",null,[Object(i["createVNode"])("input",{type:"file",ref:"file",multiple:"multiple",onChange:t[1]||(t[1]=function(t){return e.loadData(t.target.files)}),disabled:e.isLoading},null,40,["disabled"]),e.isLoading?(Object(i["openBlock"])(),Object(i["createBlock"])("svg",me,[ve,ge,Oe,je,ye,xe,ke,we,Se])):(Object(i["openBlock"])(),Object(i["createBlock"])("svg",De,[Ne,Ce,Re,Ve])),Object(i["createVNode"])("p",Ie,Object(i["toDisplayString"])(e.status),1)]),Be])])})),Te=n("16b2"),_e=n("5d16"),Ae=n("bc3a"),Le=n.n(Ae),Me=n("0e54"),Fe=n.n(Me),Ee=new Te["a"]("flights");function Pe(e){return Ye.apply(this,arguments)}function Ye(){return Ye=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee.put(t);case 3:e.next=11;break;case 5:if(e.prev=5,e.t0=e["catch"](0),"conflict"!==e.t0.name){e.next=10;break}e.next=11;break;case 10:throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,5]])}))),Ye.apply(this,arguments)}function He(e,t){return $e.apply(this,arguments)}function $e(){return $e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ee.createIndex({index:{fields:["date"]}});case 2:return e.next=4,Ee.find({selector:{date:{$gte:t,$lte:n}}});case 4:return a=e.sent,e.abrupt("return",a.docs.map((function(e){return e})));case 6:case"end":return e.stop()}}),e)}))),$e.apply(this,arguments)}function Ge(e){return qe.apply(this,arguments)}function qe(){return qe=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ee.find({selector:{_id:{$in:t}}});case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return e})));case 4:case"end":return e.stop()}}),e)}))),qe.apply(this,arguments)}function Ue(){return We.apply(this,arguments)}function We(){return We=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Le.a.get("info-text.md");case 2:return t=e.sent,e.abrupt("return",Fe()(t.data));case 4:case"end":return e.stop()}}),e)}))),We.apply(this,arguments)}function Ke(){return Ze.apply(this,arguments)}function Ze(){return Ze=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Le.a.get("aircrafts.json");case 2:t=e.sent,n=Object(B["a"])(t.data);try{for(n.s();!(a=n.n()).done;)r=a.value,r.icao=r.icao.toLowerCase(),r.isSelected=!0}catch(o){n.e(o)}finally{n.f()}return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),Ze.apply(this,arguments)}function Je(){return Xe.apply(this,arguments)}function Xe(){return Xe=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ee.info();case 2:return e.t0=e.sent.doc_count,e.abrupt("return",e.t0>0);case 4:case"end":return e.stop()}}),e)}))),Xe.apply(this,arguments)}Te["a"].plugin(_e["a"]);var Qe;n("ac1f"),n("5319");(function(e){e[e["SecondsAfterTimestamp"]=0]="SecondsAfterTimestamp",e[e["Lat"]=1]="Lat",e[e["Lon"]=2]="Lon",e[e["AltitudeFt"]=3]="AltitudeFt",e[e["GroundSpeedKts"]=4]="GroundSpeedKts",e[e["TrackDeg"]=5]="TrackDeg",e[e["Flags"]=6]="Flags",e[e["VerticalRateFpm"]=7]="VerticalRateFpm",e[e["Aircraft"]=8]="Aircraft"})(Qe||(Qe={}));var et=function e(t){var n;Object(N["a"])(this,e),this.icao=null!==(n=t.icao)&&void 0!==n?n:t.hex,this._id="".concat(this.icao,"-").concat(t.timestamp).replace(".","_");var a=w.a.unix(t.timestamp);this.date=a.toDate(),this.traces=t.trace.map((function(e){var t=e[Qe.Flags];return{date:a.add(e[Qe.SecondsAfterTimestamp],"seconds").toDate(),lat:e[Qe.Lat],lon:e[Qe.Lon],altitudeFt:e[Qe.AltitudeFt],groundSpeedKts:e[Qe.GroundSpeedKts],trackDeg:e[Qe.TrackDeg],isStale:(1&t)>0,isLeg:(2&t)>0,isVerticalRateGeometric:(4&t)>0,isAltitudeGeometric:(8&t)>0,verticalRateFpm:e[Qe.VerticalRateFpm]}}))},tt=Object(i["defineComponent"])({data:function(){return{isLoading:!1}},computed:{status:function(){return this.isLoading?"Loading ...":"Click here to select a data set from the local file system"}},methods:{loadData:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r,o,c,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.isLoading=!0,n.prev=1,a=0;case 3:if(!(a<e.length)){n.next=36;break}return n.t0=JSON,n.next=7,e[a].text();case 7:n.t1=n.sent,r=n.t0.parse.call(n.t0,n.t1),o=Object(B["a"])(r),n.prev=10,o.s();case 12:if((c=o.n()).done){n.next=25;break}return i=c.value,n.prev=14,s=new et(i),n.next=18,Pe(s);case 18:n.next=23;break;case 20:n.prev=20,n.t2=n["catch"](14),console.warn(i);case 23:n.next=12;break;case 25:n.next=30;break;case 27:n.prev=27,n.t3=n["catch"](10),o.e(n.t3);case 30:return n.prev=30,o.f(),n.finish(30);case 33:a++,n.next=3;break;case 36:n.next=41;break;case 38:n.prev=38,n.t4=n["catch"](1),console.error(n.t4);case 41:return n.prev=41,t.isLoading=!1,n.finish(41);case 44:t.$router.push("/");case 45:case"end":return n.stop()}}),n,null,[[1,38,41,44],[10,27,30,33],[14,20]])})))()}}});n("5be3");tt.render=ze,tt.__scopeId="data-v-66f0291a";var nt=tt,at=Object(i["withScopeId"])("data-v-307b6ff0");Object(i["pushScopeId"])("data-v-307b6ff0");var rt={class:"info-map"};Object(i["popScopeId"])();var ot=at((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("info-map");return Object(i["openBlock"])(),Object(i["createBlock"])("div",rt,[Object(i["createVNode"])("div",{class:"info",innerHTML:e.infoText},null,8,["innerHTML"]),Object(i["createVNode"])(c,{flights:e.flights},null,8,["flights"])])})),ct=(n("1276"),Object(i["withScopeId"])("data-v-6060e9f0"));Object(i["pushScopeId"])("data-v-6060e9f0");var it={class:"leaflet-container"},st=Object(i["createVNode"])("div",{id:"leaflet"},null,-1),lt={class:"tooltip-list"};Object(i["popScopeId"])();var ut=ct((function(e,t,n,a,r,o){var c=Object(i["resolveComponent"])("info-tooltip");return Object(i["openBlock"])(),Object(i["createBlock"])("div",it,[st,Object(i["createVNode"])("div",lt,[(Object(i["openBlock"])(!0),Object(i["createBlock"])(i["Fragment"],null,Object(i["renderList"])(e.tooltipContents,(function(e){return Object(i["openBlock"])(),Object(i["createBlock"])(c,{class:"tooltip-box",key:e,from:e.from,to:e.to,aircraftName:e.aircraftName},null,8,["from","to","aircraftName"])})),128))])])})),dt={class:"single-tooltip"};function pt(e,t,n,a,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])("div",dt,[Object(i["createVNode"])("span",null,"from "+Object(i["toDisplayString"])(e.formatDate(e.from))+" to "+Object(i["toDisplayString"])(e.formatDate(e.to))+": "+Object(i["toDisplayString"])(e.aircraftName),1)])}var ft=Object(i["defineComponent"])({methods:{formatDate:function(e){return w()(e).format(this.dayjsFormat)}},props:{from:{type:Date},to:{type:Date},aircraftName:{type:String},dayjsFormat:{type:String,default:"YY/MM/DD HH:mm"}}});ft.render=pt;var ht=ft,bt=Object(i["defineComponent"])({components:{InfoTooltip:ht},data:function(){return{zoom:6,center:new T["LatLng"](35.917973,14.409943),map:void 0,polylines:void 0,tooltipContents:[]}},props:{flights:{default:function(){return[]},type:Array}},methods:Object(x["a"])({},Object(S["b"])(["getAircrafts"])),computed:Object(x["a"])({},Object(S["c"])(["aircrafts"])),watch:{flights:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getAircrafts();case 2:if(t.map){n.next=4;break}return n.abrupt("return");case 4:t.polylines&&t.polylines.remove(),t.tooltipContents.length>0&&(t.tooltipContents=[]),t.polylines=new T["FeatureGroup"],a=Object(B["a"])(e),n.prev=8,o=function(){var e,n,a=r.value,o=Object(D["find"])(t.aircrafts,(function(e){return e.icao===a.icao})),c=null===(e=Object(D["last"])(a.traces))||void 0===e?void 0:e.date,i=null===(n=Object(D["first"])(a.traces))||void 0===n?void 0:n.date;if(!o||!i||!c)return"continue";t.tooltipContents.push({aircraftName:o.model,from:i,to:c});var s=a.traces.map((function(e){return new T["LatLng"](e.lat,e.lon)})),l=new T["Polyline"](s,{className:"polyline_".concat(a._id),color:"#1148fe",weight:2});t.polylines.addLayer(l)},a.s();case 11:if((r=a.n()).done){n.next=17;break}if(c=o(),"continue"!==c){n.next=15;break}return n.abrupt("continue",15);case 15:n.next=11;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n["catch"](8),a.e(n.t0);case 22:return n.prev=22,a.f(),n.finish(22);case 25:t.polylines.addTo(t.map),t.map.fitBounds(t.polylines.getBounds());case 27:case"end":return n.stop()}}),n,null,[[8,19,22,25]])})))()}},mounted:function(){this.map=new T["Map"]("leaflet",{zoomControl:!1,attributionControl:!1,keyboard:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1}),this.map.setView(this.center,this.zoom);var e=new T["TileLayer"]("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png");this.map.addLayer(e)},beforeUnmount:function(){var e;null===(e=this.map)||void 0===e||e.remove()}});n("d430");bt.render=ut,bt.__scopeId="data-v-6060e9f0";var mt=bt,vt=Object(i["defineComponent"])({computed:Object(x["a"])({},Object(S["c"])(["infoText"])),methods:Object(x["a"])({},Object(S["b"])(["getInfoText"])),components:{InfoMap:mt},data:function(){return{flights:[]}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getInfoText();case 2:n=document.getElementsByClassName("data-link"),a=Object(B["a"])(n);try{for(o=function(){var t,n=r.value,a=null===(t=n.getAttribute("data"))||void 0===t?void 0:t.split(",");if(!a)throw"data-link requires data attribute";n.addEventListener("click",Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ge(a);case 2:e.flights=t.sent;case 3:case"end":return t.stop()}}),t)}))))},a.s();!(r=a.n()).done;)o()}catch(c){a.e(c)}finally{a.f()}case 5:case"end":return t.stop()}}),t)})))()}});n("5476"),n("e68d");vt.render=ot,vt.__scopeId="data-v-307b6ff0";var gt,Ot=vt,jt=n("ade3"),yt="checkIfDataExists",xt="getAircrafts",kt="getInfoText",wt="getFlights",St=Object(S["a"])({state:{aircrafts:[],dataExists:!1,flights:[],infoText:"",selectedFlights:[],tracks:[]},mutations:(gt={},Object(jt["a"])(gt,yt,(function(e,t){e.dataExists=t})),Object(jt["a"])(gt,xt,(function(e,t){e.aircrafts=t})),Object(jt["a"])(gt,wt,(function(e,t){e.flights=t})),Object(jt["a"])(gt,kt,(function(e,t){e.infoText=t})),gt),actions:{getAircrafts:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Ke();case 3:a=t.sent,n(xt,a);case 5:case"end":return t.stop()}}),t)})))()},getInfoText:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Ue();case 3:a=t.sent,n(kt,a);case 5:case"end":return t.stop()}}),t)})))()},getFlights:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,He(t.from,t.to);case 3:r=n.sent,a(wt,r);case 5:case"end":return n.stop()}}),n)})))()},checkIfDataExists:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.t0=n,t.t1=yt,t.next=5,Je();case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 7:case"end":return t.stop()}}),t)})))()}},modules:{}}),Dt=[{path:"/setup",name:"Setup",component:nt},{path:"/",alias:"/map",name:"Map",component:le,meta:{requireData:!0}},{path:"/info",name:"Info",component:Ot,meta:{requireData:!0}}],Nt=Object(m["a"])({history:Object(m["b"])("/seabats/"),routes:Dt});Nt.beforeEach(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(St.state.dataExists){e.next=3;break}return e.next=3,St.dispatch("checkIfDataExists");case 3:t.matched.some((function(e){return e.meta.requireData}))&&!St.state.dataExists?a("/setup"):t.matched.some((function(e){return"Setup"===e.name}))&&St.state.dataExists?a(n):a();case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var Ct=Nt,Rt=(n("55e3"),[c.a]),Vt=[r.a],It=Object(i["createApp"])(h).use(St).use(Ct);Rt.forEach((function(e){return It.use(e)})),Vt.forEach((function(e){return It.use(e)})),It.mount("#app")},d430:function(e,t,n){"use strict";n("4f42")},e68d:function(e,t,n){"use strict";n("99fa")},e977:function(e,t,n){"use strict";n("6448")},fede:function(e,t,n){}});
//# sourceMappingURL=app.6d06d18e.js.map