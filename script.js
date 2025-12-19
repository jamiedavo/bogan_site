const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const productInput = document.getElementById("product");
document.querySelectorAll("[data-product]").forEach((el) => {
  el.addEventListener("click", () => {
    const p = el.getAttribute("data-product");
    if (productInput) productInput.value = p;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});

const notifyForm = document.getElementById("notifyForm");
const notifyMsg = document.getElementById("notifyMsg");

if (notifyForm) {
  notifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    notifyMsg.textContent = "Saved. You’ll get pinged when the next drop lands.";
    notifyForm.reset();
  });
}

const orderForm = document.getElementById("orderForm");
const orderMsg = document.getElementById("orderMsg");

if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    orderMsg.textContent =
      "Sent (locally). Next step: connect this form to Netlify Forms or a mail service.";
    orderForm.reset();
  });
}
