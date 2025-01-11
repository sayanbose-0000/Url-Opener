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

    const trimmedUrl = search.value.trim();

    if (trimmedUrl === "") {
      return;
    }

    if (checkbox.checked === true) {
      const url = trimmedUrl.startsWith("http://") ? `${trimmedUrl}` : `https://${trimmedUrl}`;
      window.location.href = url;
    }

    else {
      const url = `https://www.google.com/search?q=${trimmedUrl}`;
      window.location.href = url;
    }
  });
};
