const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const forms = [
  {
    formId: "notifyForm",
    messageId: "notifyMsg",
    text: "Thanks — you're on the update list. Connect this to your email platform when ready."
  },
  {
    formId: "contactForm",
    messageId: "contactMsg",
    text: "Message saved locally. Next step: connect this form to your email or CRM handler."
  }
];

forms.forEach(({ formId, messageId, text }) => {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (message) message.textContent = text;
    form.reset();
  });
});

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});
