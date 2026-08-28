const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".product-card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const value = button.dataset.filter;

    cards.forEach(card => {
      const show = value === "all" || card.dataset.category === value;
      card.classList.toggle("hidden", !show);
    });
  });
});
