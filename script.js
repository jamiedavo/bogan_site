const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const enquiryForm = document.getElementById("enquiryForm");
const enquiryMsg = document.getElementById("enquiryMsg");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (enquiryMsg) {
      enquiryMsg.textContent =
        "Enquiry saved locally. Next step: connect this form to Netlify Forms, Formspree, or your email handler.";
    }

    enquiryForm.reset();
  });
}

// Smooth scrolling for in-page anchor links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    event.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
