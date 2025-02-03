import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import './style.scss'
import './highlight.scss'

hljs.registerLanguage('javascript', javascript);

const code = `function greet() {
  console.log("Hello, World!");
}`;

document.querySelector('#app').innerHTML = `<pre style="text-align: left;">
<code>${code}</code>
</pre>

<button id="theme-switch">Switch to Light Theme</button>
`;

hljs.highlightAll();

const themeSwitch = document.querySelector('#theme-switch');
themeSwitch.addEventListener('click', () => {
  const html = document.querySelector('html');
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  themeSwitch.textContent = html.getAttribute('data-theme') === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme';
});
