(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[92],{1708:function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document){var e=/\n(?!$)/g,t=function(t){var a=n(t)["white-space"];if("pre-wrap"===a||"pre-line"===a){var l=t.querySelector("code"),r=t.querySelector(".line-numbers-rows"),i=t.querySelector(".line-numbers-sizer"),c=l.textContent.split(e);i||((i=document.createElement("span")).className="line-numbers-sizer",l.appendChild(i)),i.style.display="block",c.forEach((function(e,t){i.textContent=e||"\n";var n=i.getBoundingClientRect().height;r.children[t].style.height=n+"px"})),i.textContent="",i.style.display="none"}},n=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),t)})),Prism.hooks.add("complete",(function(n){if(n.code){var a=n.element,l=a.parentNode;if(l&&/pre/i.test(l.nodeName)&&!a.querySelector(".line-numbers-rows")){for(var r=!1,i=/(?:^|\s)line-numbers(?:\s|$)/,c=a;c;c=c.parentNode)if(i.test(c.className)){r=!0;break}if(r){a.className=a.className.replace(i," "),i.test(l.className)||(l.className+=" line-numbers");var o,s=n.code.match(e),u=s?s.length+1:1,m=new Array(u+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=m,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),n.element.appendChild(o),t(l),Prism.hooks.run("line-numbers",n)}}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var n=e.querySelector(".line-numbers-rows"),a=parseInt(e.getAttribute("data-start"),10)||1,l=a+(n.children.length-1);t<a&&(t=a),t>l&&(t=l);var r=t-a;return n.children[r]}}}}}()},1709:function(e,t,n){},1710:function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector){var e=function(){var e;return function(){if("undefined"===typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),t=0;Prism.hooks.add("before-sanity-check",(function(e){var t=e.element.parentNode,a=t&&t.getAttribute("data-line");if(t&&a&&/pre/i.test(t.nodeName)){var l=0;n(".line-highlight",t).forEach((function(e){l+=e.textContent.length,e.parentNode.removeChild(e)})),l&&/^( \n)+$/.test(e.code.slice(-l))&&(e.code=e.code.slice(0,-l))}})),Prism.hooks.add("complete",(function e(n){var l=n.element.parentNode,c=l&&l.getAttribute("data-line");if(l&&c&&/pre/i.test(l.nodeName)){clearTimeout(t);var o=Prism.plugins.lineNumbers,s=n.plugins&&n.plugins.lineNumbers;if(a(l,"line-numbers")&&o&&!s)Prism.hooks.add("line-numbers",e);else r(l,c)(),t=setTimeout(i,1)}})),window.addEventListener("hashchange",i),window.addEventListener("resize",(function(){var e=[];n("pre[data-line]").forEach((function(t){e.push(r(t))})),e.forEach(l)}))}function n(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function a(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function l(e){e()}function r(t,n,r){var i=(n="string"===typeof n?n:t.getAttribute("data-line")).replace(/\s+/g,"").split(","),c=+t.getAttribute("data-line-offset")||0,o=(e()?parseInt:parseFloat)(getComputedStyle(t).lineHeight),s=a(t,"line-numbers"),u=s?t:t.querySelector("code")||t,m=[];return i.forEach((function(e){var n=e.split("-"),a=+n[0],l=+n[1]||a,i=t.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(m.push((function(){i.setAttribute("aria-hidden","true"),i.setAttribute("data-range",e),i.className=(r||"")+" line-highlight"})),s&&Prism.plugins.lineNumbers){var d=Prism.plugins.lineNumbers.getLine(t,a),p=Prism.plugins.lineNumbers.getLine(t,l);if(d){var g=d.offsetTop+"px";m.push((function(){i.style.top=g}))}if(p){var h=p.offsetTop-d.offsetTop+p.offsetHeight+"px";m.push((function(){i.style.height=h}))}}else m.push((function(){i.setAttribute("data-start",a),l>a&&i.setAttribute("data-end",l),i.style.top=(a-c-1)*o+"px",i.textContent=new Array(l-a+2).join(" \n")}));m.push((function(){u.appendChild(i)}))})),function(){m.forEach(l)}}function i(){var e=location.hash.slice(1);n(".temporary.line-highlight").forEach((function(e){e.parentNode.removeChild(e)}));var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var a=e.slice(0,e.lastIndexOf(".")),l=document.getElementById(a);if(l)l.hasAttribute("data-line")||l.setAttribute("data-line",""),r(l,t,"temporary ")(),document.querySelector(".temporary.line-highlight").scrollIntoView()}}}()},1711:function(e,t,n){},2114:function(e,t,n){"use strict";n.r(t);var a=n(11),l=n(12),r=n(14),i=n(13),c=n(0),o=n.n(c),s=n(1269),u=n(1270),m=n(806),d=n(1271),p=n(1272),g=n(1273),h=n(1274),f=n(809),E=n.n(f),b=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,"Basic Usage")),o.a.createElement(h.a,null,o.a.createElement("p",null,"First You will need to import prism."),o.a.createElement("p",null,"Prism does its best to encourage good authoring practices. Therefore, it only works with",o.a.createElement("code",null,"&ltcode&gt"),"elements, since marking up code without a"," ",o.a.createElement("code",null,"&ltcode&gt "),"element is semantically invalid.",o.a.createElement("a",{href:"http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element",target:"_blank",rel:"noopener noreferrer"},"According to the HTML5 spec"),", the recommended way to define a code language is a"," ",o.a.createElement("code",null,"language-xxxx"),"class, which is what Prism uses. To make things easier however, Prism assumes that this language definition is inherited. Therefore, if multiple ",o.a.createElement("code",null,"&ltcode&gt "),"elements have the same language, you can add the",o.a.createElement("code",null,"language-xxxx"),"class on one of their common ancestors. This way, you can also define a document-wide default language, by adding a ",o.a.createElement("code",null,"language-xxxx"),"class on the",o.a.createElement("code",null,"&ltbody&gt "),"or ",o.a.createElement("code",null,"&lthtml&gt"),"element."," "),o.a.createElement("p",null,"If you want to opt-out of highlighting for a"," ",o.a.createElement("code",null,"&ltcode&gt"),"element that is a descendant of an element with a declared code language, you can add the class ",o.a.createElement("code",null,"language-none"),"to it (or any non-existing language, really)."),o.a.createElement("p",null,"The"," ",o.a.createElement("a",{href:"https://www.w3.org/TR/html5/grouping-content.html#the-pre-element",target:"_blank",rel:"noopener noreferrer"},"recommended way to mark up a code block"),"(both for semantics and for Prism) is a ",o.a.createElement("code",null,"&ltpre&gt"),"element with a ",o.a.createElement("code",null,"&ltcode&gt"),"element inside, like so:"),o.a.createElement("p",null,"code:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    p {\n        color: red\n      }\n  </code>\n</pre>\n  ')),o.a.createElement("p",{className:"my-1"},"Output"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\np {\n  color: red\n}\n                ")),o.a.createElement("p",{className:"mt-1"},"If you use that pattern, the ",o.a.createElement("code",null,"&ltpre&gt"),"will automatically get the ",o.a.createElement("code",null,"language-xxxx"),"class (if it doesn't already have it) and will be styled as a code block.")))}}]),n}(o.a.Component),y=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,"Examples")),o.a.createElement(h.a,null,o.a.createElement("h5",{className:"font-weight-600"},"HTML Markup"),o.a.createElement("p",null,"Use the following code to use HTML syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-html">\n    HTML CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<Media>\n  <Media left href="#">\n    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />\n  </Media>\n  <Media body>\n    <Media heading>\n      Media heading\n    </Media>\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.\n  </Media>\n</Media>\n\n      ')),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"CSS Markup"),o.a.createElement("p",null,"Use the following code to use CSS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    CSS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\na:active {\n  outline: 0\n}\n\na:hover {\n  outline: 0\n}\n\nabbr[title] {\n  border-bottom: 1px dotted\n}\n\nb, strong {\n  font-weight: bold\n}\n\ndfn {\n  font-style: italic\n}\n\nh1 {\n  font-size: 2em\n  margin: 0.67em 0\n}\n          ")),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"JS Markup"),o.a.createElement("p",null,"Use the following code to use JS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-js">\n    JS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-javascript"},"\ncomponentDidMount() {\n  this.setState({\n    item : true\n  })\n}\n              "))))}}]),n}(o.a.Component),v=(n(1708),n(1709),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,"Line Numbers")),o.a.createElement(h.a,null,o.a.createElement("p",null,"Line number at the beginning of code lines."),o.a.createElement("p",null,"Obviously, this is supposed to work only for code blocks (",o.a.createElement("code",null,"&ltpre&gt &ltcode&gt"),") and not for inline code. Add class line-numbers to your desired ",o.a.createElement("code",null,"&ltpre&gt")," and line-numbers plugin will take care."),o.a.createElement("p",null,"Optional: You can specify the data-start (Number) attribute on the"," ",o.a.createElement("code",null,"&ltpre&gt")," element. It will shift the line counter."),o.a.createElement("p",null,"usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre class="line-numbers">\n  <code class="language-javascript">\n   Code here...\n  </code>\n</pre>\n    ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{className:"line-numbers"},o.a.createElement("code",{className:"language-javascript"}," componentDidMount = () => {\n    if (typeof self==='undefined' || !self.Prism || !self.document) {\n      return\n    }\n  }"))))}}]),n}(o.a.Component)),w=(n(1710),n(1711),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,"Line Highlight")),o.a.createElement(h.a,null,o.a.createElement("p",null,"Highlights specific lines and/or line ranges."),o.a.createElement("p",null,"You specify the lines to be highlighted through the"," ",o.a.createElement("em",null,"data-line")," attribute on the",o.a.createElement("code",null,"&ltpre&gt ")," element, in the following simple format:"),o.a.createElement("ul",null,o.a.createElement("li",null,"A single number refers to the line with that number"),o.a.createElement("li",null,"Ranges are denoted by two numbers, separated with a hyphen (-)"),o.a.createElement("li",null,"Multiple line numbers or ranges are separated by commas."),o.a.createElement("li",null,"Whitespace is allowed anywhere and will be stripped off.")),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre data-line="2, 4, 8-10">\n  <code class="language-css">\n    Your Code\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{"data-line":"2, 4, 8-10"},o.a.createElement("code",{className:"language-css"},"\npre.line-numbers {\n  position: relative\n  padding-left: 3.8em\n  counter-reset: linenumber\n}\n\npre.line-numbers > code {\n  position: relative\n}\n  "))))}}]),n}(o.a.Component)),N=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){E.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{breadCrumbTitle:"Syntax Highlighter",breadCrumbParent:"Content",breadCrumbActive:"Syntax Highlighter"}),o.a.createElement(s.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement(b,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(y,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(v,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(w,null))))}}]),n}(o.a.Component);t.default=N}}]);
//# sourceMappingURL=92.54855132.chunk.js.map