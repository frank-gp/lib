
/*

https://frank-gp.github.io/lib/js/loader.js

*/

const fgp_loader = document.createElement("fgp-loader");

fgp_loader.innerHTML = /* html */ `
    <style>
      fgp-loader {
        display: none;
        display: block;
        font: calc((100vh + 100vw) / 100) verdana;
        z-index: 9;
        color: #777;
        position: fixed;
        width: 100%;
        left: 0;
        height: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        backdrop-filter: blur(1.5em);
        background: #fff8;
      }
      fgp-loader > .spinner {
        font-size: calc(1vw / 2);
        border: 1em solid;
        border-top: 1em solid transparent;
        border-radius: 50%;
        width: 30em;
        max-width: 5rem;
        height: 30em;
        max-height: 5rem;
        animation: rotate 1s ease infinite;
      }
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      fgp-loader .title {
        animation: opacity 2s infinite;
      }
      @keyframes opacity {
        50% {
          opacity: 0.2;
        }
      }
    </style>

      <div class="spinner"></div>
      <h2 class="title">loader...</h2>
`;

document.body.appendChild(fgp_loader);

window.addEventListener("load", () => {
  fgp_loader.remove();
});
