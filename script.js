document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search");
  const checkbox = document.querySelector(".checkbox");
  const visit = document.querySelector(".visit");
  const form = document.querySelector(".form");

  searchUrl(search, checkbox, visit, form);
});

const searchUrl = (search, checkbox, visit, form) => {
  console.log(search, checkbox, visit, form);

  checkbox.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      checkbox.checked = !checkbox.checked;
      console.log(checkbox.checked);
      ev.preventDefault();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkbox.checked === true) {
      const url = search.value.startsWith("http://") ? `${search.value}` : `https://${search.value}`;
      window.location.href = url;
    }

    else {
      const url = `https://www.google.com/search?q=${search.value}`;
      window.location.href = url;
    }
  });
};
