//your JS code here. If required.
document.querySelector(".btn").addEventListener("click", function () {
  const search = document.querySelector(".search");
  const input = document.querySelector(".input");

  // Add 'active' class to show input
  search.classList.add("active");

  // Focus the input
  input.focus();
});

