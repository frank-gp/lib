// Create element:
const fgp_loader = document.createElement("fgp_loader");
fgp_loader.innerHTML = `
<style>
  fgp_loader {
    display: block;
  }
  #loader {
    /* content: ""; */
    background-color: #025d;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    /* filter: blur(26px); */
    backdrop-filter: blur(10px);
  }
  #loader :nth-child(1) {
    /* position: absolute; */
    /* font-size: 3vw; */
    font: 100 calc((5vh + 5vw) / 2) system-ui, Roboto, "Open Sans", sans-serif;
    animation: opacity 2s infinite;
    color: #fc0;
    order: 2;
    margin: 1em;
  }
  #loader :nth-child(2) {
    border: 0.5vw solid #fc0;
    border-radius: 50%;
    border-bottom: 0.5vw solid #fc02;
    width: calc((10vh + 10vw) / 2);
    height: calc((10vh + 10vw) / 2);
    /* -webkit-animation: spin 2s linear infinite; */
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes opacity {
    50% {
      opacity: 0.2;
    }
  }
</style>

<div id="loader">
  <p data-css=":nth-child(1)">loading...</p>
  <div data-css=":nth-child(2)"></div>
</div>

`;

// Append to body:
document.body.appendChild(fgp_loader);

window.addEventListener("load", function () {
  let loader = document.querySelector("#loader");
  // alert("hello");
  console.log("display none in #loader ");
  loader.style.display = "none";
});
