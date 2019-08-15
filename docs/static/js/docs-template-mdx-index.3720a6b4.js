(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs-template-mdx/index.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a("./node_modules/@babel/runtime/helpers/esm/extends.js"),c=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=a("./node_modules/docz/dist/index.esm.js"),o=a("./src/index.js"),i={},l="wrapper";function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"react-client-captcha"},"react-client-captcha"),Object(r.b)("p",null,Object(r.b)("img",{alt:"ClientCaptcha Screenshot",src:"https://raw.githubusercontent.com/majid-amiri/react-client-captcha/master/react-client-captcha.png"})),Object(r.b)("p",null,"A light JS-based captcha generator."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Custom characters."),Object(r.b)("li",{parentName:"ul"},"Retry functionality."),Object(r.b)("li",{parentName:"ul"},"Easily customizable via props.")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install react-client-captcha --save")),Object(r.b)("p",null,"or"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"yarn add react-client-captcha")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://codesandbox.io/s/stoic-noyce-fnkkq"}),Object(r.b)("img",{alt:"Edit react-client-captcha",src:"https://codesandbox.io/static/img/play-codesandbox.svg"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport ReactDOM from "react-dom";\nimport ClientCaptcha from "react-client-captcha";\n\nexport default class App extends React.Component {\n  render() {\n    return <ClientCaptcha captchaCode={code => console.log(code)} />;\n  }\n}\n\nReactDOM.render(<App />, document.getElementById("app"));\n')),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(s.d,{of:o.a,mdxType:"Props"}),Object(r.b)("h2",{id:"license"},"License"),Object(r.b)("p",null,"MIT \xa9 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/majid-amiri/"}),"Majid Amiri")))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs-template-mdx/index.mdx"}}),p.isMDXComponent=!0},"./src/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),r=a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),o=a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),i=a("./node_modules/react/index.js"),l=a.n(i),p=a("./src/style.css"),d=a.n(p),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).generateCode=function(){for(var e=a.props,t=e.chars,n=e.charsCount,c=[],r=0;r<n;r+=1){var s=Math.ceil(Math.random()*t.length);t[s]&&-1===c.indexOf(t[s])?c.push(t[s]):r-=1}return c.join("")},a.generateCaptcha=function(){var e=a.props,t=e.width,n=e.height,c=e.fontSize,r=e.captchaCode,s=e.backgroundColor,o=e.fontFamily,i=e.fontColor;a.captchaCode=a.generateCode();var l=a.canvasRef.current.getContext("2d");l.fillStyle=s,l.fillRect(0,0,t,n),l.font="".concat(c,"px ").concat(o),l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,l.fillText(a.captchaCode.split("").join(" "),t/2,n/2),r(a.captchaCode)},a.canvasRef=l.a.createRef(),a.captchaCode="",a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.generateCaptcha()}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.retryIcon,c=e.containerClassName,r=e.captchaClassName,s=e.retryButtonClassName,o=e.retryImgClassName,i=e.retry,p=e.retryIconSize;return l.a.createElement("div",{className:c},l.a.createElement("canvas",{width:t,height:a,ref:this.canvasRef,style:{pointerEvents:"none"},className:r}),i&&l.a.createElement("button",{onClick:this.generateCaptcha,id:"retryButton",className:s},l.a.createElement("img",{src:n,alt:"Re-new captcha",className:o,width:p,height:p})))}}]),t}(i.Component);m.defaultProps={width:100,height:40,fontSize:22,fontFamily:"Arial, Tahoma",fontColor:"#000",chars:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",charsCount:4,backgroundColor:"#F2F2F2",retry:!0,retryIcon:"https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg",retryIconSize:24,retryButtonClassName:d.a.retryButton,retryImgClassName:"",containerClassName:d.a.captchaContainer,captchaClassName:""},t.a=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClientCaptcha",filename:"src/index.js"}})},"./src/style.css":function(e,t,a){e.exports={captchaContainer:"style_captchaContainer__FWlJo",retryButton:"style_retryButton__3Fwvw"}}}]);
//# sourceMappingURL=docs-template-mdx-index.92aff9f1e19faf365d4c.js.map