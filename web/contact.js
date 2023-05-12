/***
    
    <!-- contact component... -->
    <!-- <link rel="stylesheet" href="https://frank-gp.github.io/icon/icomoon/style.css" /> -->
    <section class="contact"></section>
    <script src="https://frank-gp.github.io/lib/web/contact.js" defer></script>
    <!-- contact component... -->

 ***/

// ========== DOM... ==========
let section_contact = document.querySelector(".contact");

let contact_css = /* css */ `/* contact-css */
.contact {
  --color-1: #80f;
  --color-2: #aaa;
  --color-white: #fff;
  --color-black: #555;
  background-color: var(--color-white);
  padding: 2em;
  border-radius: 0.3em;
  max-width: 35em;
  margin: 10vh auto;
  border: thin solid var(--color-2);
}
.contact * {
  box-sizing: border-box;
  color: var(--color-2);
  border-radius: 0.3em;
}
.contact hr {
  border: none;
  border-bottom: thin solid var(--color-2);
  margin: 1em 0;
}
.contact h2 {
  color: var(--color-black);
}
.contact :is(aside, textarea) {
  position: relative;
  margin-top: 0.5em;
}
.contact :is(.data input, textarea) {
  width: 100%;
  padding: 1em 3em;
  outline: none;
  border: thin solid var(--color-2);
  font-family: inherit;
}
.contact :is(.data input, textarea)::placeholder {
  color: inherit;
}
.contact :is(.data input, textarea):focus {
  border: thin solid var(--color-1);
  color: var(--color-1);
}
.contact :is(.data input, textarea):focus ~ i {
  color: var(--color-1);
}
.contact textarea {
  min-width: 100%;
  max-width: 100%;
  min-height: 15em;
}
.contact i {
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
}
.contact .message i {
  top: 2em;
}
.contact .btn-contact {
  border: none;
  padding: 1em 3em;
  background-color: var(--color-1);
  color: var(--color-white);
  position: relative;
}
.contact .btn-contact:hover:enabled {
  opacity: 0.8;
  cursor: pointer;
}
.contact .btn-contact i {
  color: inherit;
}
.contact .btn-area label {
  color: var(--color-black);
  cursor: pointer;
}
.btn-contact:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* @media desktop... */
@media (min-width: 50rem) {
  .contact .data {
    display: flex;
    gap: 1em;
  }
  .contact aside {
    flex: 1 1 auto;
  }
  .contact .btn-area {
    display: flex;
    align-items: center;
  }
  .contact .btn-area aside {
    flex: 0 1 auto;
  }
  .contact .btn-area label {
    margin-left: 2em;
  }
}
/* @media desktop. */

/* @media mobile... */
@media (max-width: 50rem) {
  .contact {
    text-align: center;
  }
  .contact .btn-area button {
    margin: 1em;
  }
}
/* @media mobile. */
`;
let style_contact = document.createElement("style");
style_contact.innerHTML = contact_css;
section_contact.insertAdjacentElement("beforebegin", style_contact);

let contact_html = /* html */ `<h2>Contact Form</h2>
<hr />
<form action="https://asset.fgp.one/mail/contact-form.php" method="post">
  <!-- <form action="send-email.php" method="post"> -->
  <section class="data">
    <aside>
      <input type="text" placeholder="Enter your name" name="form_name" required />
      <i class="icon-user"></i>
    </aside>
    <aside>
      <input type="email" placeholder="Enter your email" name="form_email" required />
      <i class="icon-envelope"></i>
    </aside>
  </section>
  <section class="message">
    <aside>
      <textarea placeholder="Write your message" name="form_message" required></textarea>
      <i class="icon-message"></i>
    </aside>
  </section>
  <section class="btn-area">
    <aside>
      <button class="btn-contact" type="submit" disabled><i class="icon-paper-plane"></i> Send Message</button>
    </aside>
    <aside>
      <label>
        <input type="checkbox" name="form_checkbox" value="checkbox_value" required disabled />
        I'm not a Robot
      </label>
    </aside>
  </section>
</form>
`;
section_contact.innerHTML = contact_html;
// ========== DOM. ==========

// ========== func... ==========
document.querySelector("input[type=checkbox]").value = location.href;

let textarea = document.querySelector(".contact textarea");
let submit = document.querySelector(".contact .btn-contact");
let checkbox = document.querySelector(".contact input[type=checkbox]");

submitEnable = () => submit.removeAttribute("disabled", "");
enableCheckbox = () => checkbox.removeAttribute("disabled", "");

textarea.addEventListener("mousemove", enableCheckbox);
checkbox.addEventListener("change", submitEnable);

textarea.oninput = function () {
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};
// ========== func. ==========
