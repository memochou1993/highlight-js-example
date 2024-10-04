import './style.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const code = `function greet() {
  console.log("Hello, World!");
}`;

document.querySelector('#app').innerHTML = `<pre style="text-align: left;">
<code>${code}</code>
</pre>`;

hljs.highlightAll();
