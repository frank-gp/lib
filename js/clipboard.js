/*

https://frank-gp.github.io/lib/js/clipboard.js

*/


// ========== clipboard... ==========
const _clipboard = document.querySelectorAll(".clipboard");

_clipboard.forEach((item) => {
  item.addEventListener("click", () => {
    navigator.clipboard.writeText(item.textContent);
    console.log(item.textContent);
    // alert(`Copy:
    // ${item.textContent}`);
  });
});
// ========== clipboard. ==========

const styleSheet = document.createElement("style");
styleSheet.innerHTML = /* css */ `
pre {
  background-color: darkslateblue;
  padding: 1em;
  color: white;
  overflow-x: auto;
  max-width: 30rem;
  margin: 0 auto;
}
.clipboard {
  cursor: pointer;
  padding: 1em;
  position: relative;
  border: 1px solid ;
}
.clipboard:hover::before {
  /* content: '\\f0ea'; */
  /* content: '\\f24d';  */
  content: 'Copy';
  position: absolute;
  right: 1em;
  font: 1em FontAwesome;
  text-rendering: auto;
}
.clipboard:active::before {
  content: 'Copied!';
  background: darkslateblue;
  color: white;
  transform: scale(1.2);
  padding: 4px;
  border-radius: 5px;
  border: 1px solid;
}
`;
document.head.appendChild(styleSheet);
