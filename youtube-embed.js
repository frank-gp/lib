/*

    <!-- ========== youtube-embed component... ========== -->
    <article class="youtube" data-url="https://youtu.be/1eIEGxlaOiE"></article>
    <article class="youtube" data-url="https://youtu.be/DcTLSTbDXww"></article>

    <script src="https://frank-gp.github.io/lib/social/youtube-embed.js"></script>
    <!-- ========== youtube-embed component. ========== -->
    
 */



const youtube = document.querySelectorAll(".youtube");

youtube.forEach(youtube_embed);

function youtube_embed(item, index) {
  let youtubeID = item.dataset.url.split("https://youtu.be/")[1];
  // console.log(youtubeID);
  // console.log(index);
  item.innerHTML = /*HTML */ `
  <iframe
  width="100%"
  src="https://www.youtube.com/embed/${youtubeID}&autoplay=1"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;background: #0008;width:2em;inset: 50%;transform: translateX(-50%);border-radius: 15%;padding: .1em .1em .1em 0.2em;}span:hover{background: red;}</style><a href=https://www.youtube.com/embed/${youtubeID}?autoplay=1><img src=https://i.ytimg.com/vi_webp/${youtubeID}/maxresdefault.webp alt='text alt'><span>▶</span></a>"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="title video"
  ></iframe>
  `;
}
