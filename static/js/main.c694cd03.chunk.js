(this["webpackJsonpnamemc-img-edit"]=this["webpackJsonpnamemc-img-edit"]||[]).push([[0],{107:function(e,t,n){e.exports={footer:"footer_footer__15SXk"}},108:function(e,t,n){e.exports={title:"header_title__P-y1t"}},116:function(e,t,n){},117:function(e,t,n){},146:function(e,t){},148:function(e,t){},160:function(e,t){},162:function(e,t){},271:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(106),c=n.n(i),s=(n(116),n(54)),r=n(55),l=n(25),d=n(58),u=n(57),f=(n(117),n(107)),j=n.n(f),A=n(108),h=n.n(A),b=n(111),m=n(110),w=n(56),g=n(34),O=n(17),p=n.n(O),x=n(109),v=n.n(x),E=n(35),B=function(e,t,n){E.a.event({category:e,action:t,label:n})},y=n(2);function F(e){return Object(y.jsxs)("header",{children:[Object(y.jsx)("h1",{className:h.a.title,children:Object(y.jsx)("a",{href:"https://ixukw.github.io",children:"ixukw"})}),"Image Splitter"]})}function I(e){return Object(y.jsx)("footer",{className:j.a.footer,children:"ixukw"})}var M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={inputFile:"",imgOut:[],downloadHref:"",downloadButton:!1},a.handleFileSelected=a.handleFileSelected.bind(Object(l.a)(a)),a.execute=a.execute.bind(Object(l.a)(a)),a.download=a.download.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e;e="UA-192734530-1",E.a.initialize(e),E.a.pageview(window.location.pathname+window.location.search)}},{key:"handleFileSelected",value:function(e){this.setState({inputFile:Array.from(e.target.files),imgOut:[],downloadHref:"",downloadButton:!1})}},{key:"execute",value:function(){var e=new v.a,t=new FileReader;this.setState({imgOut:[],downloadHref:"",downloadButton:!1});var n,a,o=this.state.inputFile[0],i=this;p.a.read("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAABmUlEQVR4nO2au0oDQRiFzyyaNgixMsRHMBY2aaPtpNXGRnwTn0Ds7GwsJbWmsEkjSPIGMSSVIKZNiL9F2AUTcIXJ5sTs+WBY9sLuN4e5sQysXbe4AMDCMRCsAd57894vuHjvzVm7bq7WcvHFuOIA4GotF1oJ55xLfyp7vt52bdAZo1wtJNcGnTEiYFbp+YoTHDMl2n935WoBZpaUP/Hfu0C/WbR+s2jArBV4723aK9m0VzLvvUXzfX6T+TzcwcN1Ozm/uXjGFtFnJVQaI3d1emzAE4qvHxh2Jz/uJWMAzXBFTHslG3Yn2DvYBoDkmDrYbcosEAdwd38EADg/e0GlMXLp09ztye9vvnwMEmMHFDE/vg4oALYAGwXAFmCjANgCbBbm4LR1Qdq8nfXCKdRvnty3AAXAFmAT/Mtr3UkbE3LfAhQAW4CNAmALsFEAbAE2CoAtwEYBsAWEEEIIIYQQQgghVs3S9+hlvb9g2fsKc/9HSAGwBdgE9yf2/oLQMSH3LUABsAXYKAC2ABsFwBZgowDYAmwUAFuAzTd7DhsEirojIgAAAABJRU5ErkJggg==").then((function(e){n=e.clone()})),new p.a(1,1,"#FFC643",(function(e,t){a=t.clone()})),t.onload=function(){p.a.read(this.result).then((function(t){for(var o=0;o<3;o++)for(var c=0;c<9;c++){var s=n.clone(),r=t.clone();r.crop(8*c,8*o,8,8),s.composite(r,8,8,{mode:p.a.BLEND_SOURCE_OVER,opacitySource:1,opacityDest:1}),s.composite(a,4+Math.floor(3*Math.random()),4+Math.floor(3*Math.random()),{mode:p.a.BLEND_SOURCE_OVER,opacitySource:1,opacityDest:1}),s.getBase64(p.a.MIME_PNG,(function(e,t){e&&alert("getBase64: "+e);var n=i.state.imgOut.concat(t);i.setState({imgOut:n})}));var l="".concat(27-(9*o+c),".").concat(s.getExtension());s.getBuffer(p.a.MIME_PNG,(function(t,n){t&&alert("getBuffer: "+t),e.file(l,n)}))}})).catch((function(e){alert(e)})).then((function(){e.generateAsync({type:"base64"}).then((function(e){i.setState({downloadHref:"data:application/zip;base64,"+e})})),i.setState({downloadButton:!0}),B("split-image-success","Image splitted and zip created.","IMG-EDIT")}))},t.readAsArrayBuffer(o)}},{key:"download",value:function(){if(this.state.downloadButton)return B("download-success","Zip download","IMG-EDIT"),this.state.downloadHref;alert("You must input a file or run the program first."),B("download-failure","Zip download failure","IMG-EDIT")}},{key:"render",value:function(){var e=this.state.imgOut.map((function(e){return Object(y.jsx)("img",{src:e,className:"images",alt:"split-img"})}));return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"justify-content-start d-flex align-items-center overflow-auto",children:[Object(y.jsx)("input",{className:"overflow-hidden w-75",id:"fileInput",type:"file",onChange:this.handleFileSelected}),Object(y.jsx)(b.a,{onClick:this.execute,children:"Go"})]}),Object(y.jsx)("a",{href:this.state.downloadHref,onClick:this.download,children:"Download ZIP"}),Object(y.jsx)("br",{}),e]})}}]),n}(o.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(m.a,{className:"justify-content-between d-flex flex-column",children:[Object(y.jsx)(g.a,{className:"",children:Object(y.jsx)(F,{})}),Object(y.jsxs)(g.a,{className:"main d-flex align-items-start flex-row",children:[Object(y.jsxs)(w.a,{children:[Object(y.jsx)(M,{}),Object(y.jsx)("div",{className:"download"})]}),Object(y.jsxs)(w.a,{children:["Input 24x72",Object(y.jsx)("br",{}),"Preset skin file head at pixel 8,8 to 15,15 for 8x8",Object(y.jsx)("br",{}),"1. Add input file.",Object(y.jsx)("br",{}),"2. Press Go.",Object(y.jsx)("br",{}),"3. Download ZIP."]})]}),Object(y.jsx)(g.a,{className:"",children:Object(y.jsx)(I,{})})]})}}]),n}(o.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};n(270);c.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),C()}},[[271,1,2]]]);
//# sourceMappingURL=main.c694cd03.chunk.js.map